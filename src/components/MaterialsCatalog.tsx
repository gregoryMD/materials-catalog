"use client";

import Header from "./Header";
import List from "./List";
import Details from "./Details";
import Footer from "./Footer";
import { useEffect, useState, useCallback } from "react";
import materialService from "../services/materials";
import { Material } from "../types";

export default function MaterialCatalog() {
  const [materials, setMaterials] = useState<Material[]>([]);
  const [activeItem, setActiveItem] = useState<Material>(materials[0]);

  //fetch data on page load
  useEffect(() => {
    materialService.getAll().then((initialMaterials) => {
      setMaterials(initialMaterials);
      setActiveItem(initialMaterials[0]);
    });
  }, []);

  const selectListItem = useCallback(
    (id: String) => {
      const selected = materials.find((x) => x.id === id);
      setActiveItem(selected!);
    },
    [materials, setActiveItem]
  );

  //event handlers
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ): void => {
    event.preventDefault();
    switch (event.target.id) {
      case "name":
        setActiveItem({ ...activeItem, name: event.target.value });
        break;
      case "color":
        setActiveItem({ ...activeItem, color: event.target.value });
        break;
      case "volume":
        setActiveItem({
          ...activeItem,
          volume: parseInt(event.target.value, 10),
        });
        break;
      case "cost":
        setActiveItem({
          ...activeItem,
          cost: parseInt(event.target.value, 10),
        });
        break;
      case "deliveryDate":
        setActiveItem({ ...activeItem, deliveryDate: event.target.value });
        break;
    }
  };

  const addMaterial = useCallback(() => {
    const newMaterial = {
      name: "",
      volume: 0,
      deliveryDate: "",
      color: "#000000",
      cost: 0,
    };
    setActiveItem(newMaterial);
  }, [setActiveItem]);

  const deleteMaterial = useCallback(() => {
    const id = activeItem && activeItem.id;
    if (id) {
      materialService.deleteMaterial(id!).then((deletedMat) => {
        setMaterials(materials.filter((mat) => mat.id !== deletedMat.id));
      });
    }
  }, [activeItem, materials]);

  const sendData = useCallback((): void => {
    if (activeItem.id) {
      materialService
        .updateMaterial(activeItem.id, activeItem)
        .then((updatedMat) => {
          setMaterials(
            materials.map((mat) =>
              mat.id === updatedMat.id ? updatedMat : mat
            )
          );
        });
    } else {
      materialService.addNew(activeItem).then((newMaterial) => {
        setMaterials(materials.concat(newMaterial));
        setActiveItem(newMaterial);
      });
    }
  }, [materials, activeItem]);

  const itemCosts = materials && materials.map((mat) => mat.cost * mat.volume);

  return (
    <div className="container mx-auto bg-zinc-800 text-stone-300 py-5 px-8 w-2/3">
      <Header addNew={addMaterial} deleteItem={deleteMaterial} />
      <div className="flex">
        <List materials={materials} handleClick={selectListItem} />
        <Details
          activeItem={activeItem}
          handleChange={handleChange}
          sendData={sendData}
        />
      </div>
      <Footer itemCosts={itemCosts} />
    </div>
  );
}

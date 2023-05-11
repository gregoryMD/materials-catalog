"use client";

import Header from "./Header";
import List from "./List";
import Details from "./Details";
import Footer from "./Footer";
import { useEffect, useState } from "react";
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

  const selectListItem = (id: String) => {
    const selected = materials.find((x) => x.id === id);
    setActiveItem(selected!);
  };

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

  const addMaterial = () => {
    const newMaterial = {
      name: "",
      volume: 0,
      deliveryDate: "",
      color: "#000000",
      cost: 0,
    };
    setActiveItem(newMaterial);
  };

  const deleteMaterial = () => {
    const id = activeItem && activeItem.id;
    if (id) {
      materialService.deleteMaterial(id!).then((deletedMat) => {
        setMaterials(materials.filter((mat) => mat.id !== deletedMat.id));
      });
    }
  };

  const sendData = (): void => {
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
  };

  const itemCosts = materials && materials.map((mat) => mat.cost * mat.volume);
  console.log(itemCosts);
  return (
    <div className="container mx-auto bg-gray-800 text-white p-6 w-2/3">
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

"use client";

import Header from "./Header";
import List from "./List";
import Details from "./Details";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import materialService from "../services/materials";
import { Material } from "../types";
import { access } from "fs";

export default function MaterialCatalog() {
  const [materials, setMaterials] = useState<Material[]>([]);
  const [activeItem, setActiveItem] = useState<Material>(materials[0]);

  useEffect(() => {
    materialService
      .getAll()
      .then((initialMaterials) => setMaterials(initialMaterials));
  }, []);

  const selectListItem = (id: String) => {
    const selected = materials.find((x) => x.id === id);
    setActiveItem(selected!);
  };

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
        setActiveItem({ ...activeItem, volume: event.target.value });
        break;
      case "cost":
        setActiveItem({ ...activeItem, cost: event.target.value });
        break;
      case "deliveryDate":
        setActiveItem({ ...activeItem, deliveryDate: event.target.value });
        break;
    }
  };

  const addMaterial = () => {
    //set activeItem to new item
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
      materialService.deleteMaterial(id!);
    }
  };

  const sendData = (): void => {
    //puts if existing material
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

      //if id is not present in materials, posts (once first onblur occurs)
      //then sets activeItem to current
    }
  };

  return (
    <div>
      <Header addNew={addMaterial} deleteItem={deleteMaterial} />
      <List materials={materials} handleClick={selectListItem} />
      <Details
        activeItem={activeItem}
        handleChange={handleChange}
        sendData={sendData}
      />
      <Footer />
    </div>
  );
}

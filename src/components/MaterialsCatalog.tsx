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

  const sendData = () => {
    //if id is not present in materials, posts (once first onblur occurs)
    //puts if existing material
  };

  return (
    <div>
      <Header />
      <List materials={materials} handleClick={selectListItem} />
      <Details activeItem={activeItem} handleChange={handleChange} />
      <Footer />
    </div>
  );
}

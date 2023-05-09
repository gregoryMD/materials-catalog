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
  const [activeItem, setActiveItem] = useState<Material | undefined>();

  useEffect(() => {
    materialService
      .getAll()
      .then((initialMaterials) => setMaterials(initialMaterials));
  }, []);

  const selectListItem = (event:) => {
    setActiveItem(event.target.value)
  }

  return (
    <div>
      <Header />
      <List materials={materials} />
      <Details activeItem={activeItem} />
      <Footer />
    </div>
  );
}

import MaterialsCatalog from "../src/components/MaterialsCatalog";
import Footer from "../src/components/Footer";
import materialService from "../src/services/materials";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

const mockMaterials = [
  {
    id: "1",
    name: "Material 1",
    volume: 10,
    deliveryDate: "2022-01-01",
    color: "#000000",
    cost: 100,
  },
  {
    id: "2",
    name: "Material 2",
    volume: 10,
    deliveryDate: "2022-01-01",
    color: "#000000",
    cost: 100,
  },
];

test("component fetches data on pageload and displays all as list", async () => {
  const getAllMock = jest
    .spyOn(materialService, "getAll")
    .mockResolvedValue(mockMaterials);

  const { findByText } = render(<MaterialsCatalog />);
  const material1Name = await findByText("Material 1");
  const material2Name = await findByText("Material 2");

  expect(material1Name).toBeInTheDocument();
  expect(material2Name).toBeInTheDocument();

  expect(getAllMock).toHaveBeenCalled();
});

test("footer calculates the total cost of items", () => {
  const itemCosts = mockMaterials.map((mat) => mat.cost * mat.volume);
  const { getByText } = render(<Footer itemCosts={itemCosts} />);
  const totalCost = getByText("Total Cost:");
  expect(totalCost).toBeInTheDocument();
  expect(totalCost.nextSibling?.textContent).toBe("$2000.00");
});

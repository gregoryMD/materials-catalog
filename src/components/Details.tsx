import { Material } from "../types";

interface Props {
  activeItem: Material;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
}
export default function Details({ activeItem, handleChange }: Props) {
  return (
    <div>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        onChange={handleChange}
        onBlur={() => {}}
        value={activeItem ? activeItem.name : ""}
      ></input>
      <label htmlFor="color">Color</label>
      <input
        type="color"
        id="color"
        onChange={handleChange}
        onBlur={() => {}}
        value={activeItem ? activeItem.color : ""}
      ></input>
      <label htmlFor="volume">Volume (m3)</label>
      <input
        type="number"
        id="volume"
        onChange={handleChange}
        onBlur={() => {}}
        value={activeItem ? activeItem.volume : 0}
      ></input>
      <label htmlFor="cost">Cost (USD per m3)</label>
      <input
        type="number"
        id="cost"
        onChange={handleChange}
        onBlur={() => {}}
        value={activeItem ? activeItem.cost : 0}
      ></input>
      <label htmlFor="deliveryDate">Delivery Date</label>
      <input
        type="string"
        id="deliveryDate"
        onChange={handleChange}
        onBlur={() => {}}
        value={activeItem ? activeItem.deliveryDate : ""}
      ></input>
    </div>
  );
}

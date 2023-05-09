import { Material } from "../types";

interface Props {
  activeItem: Material;
}
export default function Details({ activeItem }: Props) {
  return (
    <div>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        onChange={() => {}}
        onBlur={() => {}}
      ></input>
      <label htmlFor="color">Color</label>
      <input
        type="color"
        id="color"
        onChange={() => {}}
        onBlur={() => {}}
      ></input>
      <label htmlFor="volume">Volume (m3)</label>
      <input
        type="number"
        id="volume"
        onChange={() => {}}
        onBlur={() => {}}
      ></input>
      <label htmlFor="cost">Cost (USD per m3)</label>
      <input
        type="number"
        id="cost"
        onChange={() => {}}
        onBlur={() => {}}
      ></input>
      <label htmlFor="date">Delivery Date</label>
      <input
        type="datetime-local"
        id="date"
        onChange={() => {}}
        onBlur={() => {}}
      ></input>
    </div>
  );
}

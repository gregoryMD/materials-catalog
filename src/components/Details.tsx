import { Material } from "../types";

interface Props {
  activeItem: Material;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
  sendData: () => void;
}
export default function Details({ activeItem, handleChange, sendData }: Props) {
  return (
    <div className="bg-slate-950 w-2/3 ml-4 p-4 text-sm">
      <label htmlFor="name">
        Name{" "}
        <input
          className="block bg-gray-800"
          type="text"
          id="name"
          onChange={handleChange}
          onBlur={sendData}
          value={activeItem ? activeItem.name : ""}
        />
      </label>

      <label htmlFor="color">
        Color{" "}
        <input
          className="block bg-gray-800"
          type="color"
          id="color"
          onChange={handleChange}
          onBlur={sendData}
          value={activeItem ? activeItem.color : "#000000"}
        />
      </label>

      <label htmlFor="volume">
        Volume (m<sup>3</sup>)
        <input
          className="block bg-gray-800"
          type="number"
          id="volume"
          onChange={handleChange}
          onBlur={sendData}
          value={activeItem ? activeItem.volume : 0}
        />
      </label>

      <label htmlFor="cost">
        Cost (USD per m<sup>3</sup>)
        <input
          className="block bg-gray-800"
          type="number"
          id="cost"
          onChange={handleChange}
          onBlur={sendData}
          value={activeItem ? activeItem.cost : 0}
        />
      </label>

      <label htmlFor="deliveryDate">
        Delivery Date
        <input
          className="block bg-gray-800"
          type="string"
          id="deliveryDate"
          onChange={handleChange}
          onBlur={sendData}
          value={activeItem ? activeItem.deliveryDate : ""}
        />
      </label>
    </div>
  );
}

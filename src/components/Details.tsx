import { Material } from "../types";
import DetailInput from "./DetailInput";

interface Props {
  activeItem: Material;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
  sendData: () => void;
}
export default function Details({ activeItem, handleChange, sendData }: Props) {
  return (
    <div className="bg-zinc-900 w-3/4 h-64 ml-4 p-4 text-sm rounded flex flex-col flex-wrap">
      <div className="my-3">
        <label htmlFor="name">
          <b>Name</b>
          <input
            className="block bg-zinc-700 p-1  rounded"
            type="text"
            id="name"
            onChange={handleChange}
            onBlur={sendData}
            value={activeItem ? activeItem.name : ""}
          />
        </label>
      </div>
      <div className="my-3">
        <label htmlFor="volume">
          <b>
            Volume (m<sup>3</sup>)
          </b>
          <input
            className="block bg-zinc-700 p-1 rounded"
            type="number"
            id="volume"
            onChange={handleChange}
            onBlur={sendData}
            value={activeItem ? activeItem.volume : 0}
          />
        </label>
      </div>
      <div className="my-3">
        <label htmlFor="deliveryDate">
          <b>Delivery Date</b>
          <input
            className="block bg-zinc-700 p-1 rounded"
            type="string"
            id="deliveryDate"
            onChange={handleChange}
            onBlur={sendData}
            value={activeItem ? activeItem.deliveryDate : ""}
          />
        </label>
      </div>
      <div className="my-3">
        <label htmlFor="color">
          <b>Color</b>
          <input
            className="block bg-zinc-700 px-1 rounded"
            type="color"
            id="color"
            onChange={handleChange}
            onBlur={sendData}
            value={activeItem ? activeItem.color : "#000000"}
          />
        </label>
      </div>

      <div className="my-3">
        <label htmlFor="cost">
          <b>
            Cost (USD per m<sup>3</sup>)
          </b>
          <input
            className="block bg-zinc-700 p-1 rounded"
            type="number"
            id="cost"
            onChange={handleChange}
            onBlur={sendData}
            value={activeItem ? activeItem.cost : 0}
          />
        </label>
      </div>
    </div>
  );
}

import { Material } from "../types";

interface Props {
  name: String;
  volume: Number;
  id: String;
  handleClick: (id: String) => void;
}

export default function ListItem({ name, volume, id, handleClick }: Props) {
  return (
    <div
      className="border-solid border-2 border-white p-1"
      onClick={() => handleClick(id)}
    >
      <p>
        <b>{name}</b>
      </p>
      <p>
        {`${volume} `}m<sup>3</sup>
      </p>
    </div>
  );
}

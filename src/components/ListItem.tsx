import { Material } from "../types";

interface Props {
  name: String;
  volume: Number;
  id: String;
  handleClick: (id: String) => void;
}

export default function ListItem({ name, volume, id, handleClick }: Props) {
  return (
    <div className=" border-stone-300 p-2" onClick={() => handleClick(id)}>
      <p>{name}</p>
      <p className="text-xs">
        {`${volume} `}m<sup>3</sup>
      </p>
    </div>
  );
}

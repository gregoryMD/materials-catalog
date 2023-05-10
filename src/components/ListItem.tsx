import { Material } from "../types";

interface Props {
  name: String;
  volume: Number;
  id: String;
  handleClick: (id: String) => void;
}

export default function ListItem({ name, volume, id, handleClick }: Props) {
  return (
    <div onClick={() => handleClick(id)}>
      <p>{name}</p>
      <p>{`${volume}m3`}</p>
    </div>
  );
}

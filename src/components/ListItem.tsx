import { Material } from "../types";

interface Props {
  name: String;
  volume: Number;
}

export default function ListItem({ name, volume }: Props) {
  return (
    <div>
      <p>{name}</p>
      <p>{volume} m3</p>
    </div>
  );
}

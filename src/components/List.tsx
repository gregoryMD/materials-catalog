import ListItem from "./ListItem";
import { Material } from "../types";

interface Props {
  materials: Material[];
}

export default function List({ materials }: Props) {
  return (
    <div>
      {materials.map((each: Material) => (
        <ListItem key={each.id} name={each.name} volume={each.volume} />
      ))}
    </div>
  );
}

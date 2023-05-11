import ListItem from "./ListItem";
import { Material } from "../types";

interface Props {
  materials: Material[];
  handleClick: (id: String) => void;
}

export default function List({ materials, handleClick }: Props) {
  return (
    <div className="bg-slate-950 w-1/3 p-4 text-sm">
      {materials.length ? (
        materials.map((each: Material) => (
          <ListItem
            key={each.id}
            id={each.id!}
            name={each.name}
            volume={each.volume}
            handleClick={handleClick}
          />
        ))
      ) : (
        <p>No Materials</p>
      )}
    </div>
  );
}

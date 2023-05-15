import ListItem from "./ListItem";
import { Material } from "../types";

interface Props {
  materials: Material[];
  handleClick: (id: String) => void;
}

export default function List({ materials, handleClick }: Props) {
  return (
    <div className="bg-zinc-900 w-1/4 text-sm border-solid border border-stone-300 divide-y">
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
        <p className="text-center py-24 ">No Materials</p>
      )}
    </div>
  );
}

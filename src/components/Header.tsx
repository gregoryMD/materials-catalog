import ActionsBar from "./ActionsBar";

interface Props {
  addNew: () => void;
  deleteItem: () => void;
}

export default function Header({ addNew, deleteItem }: Props) {
  return (
    <div>
      <h1>Materials</h1>
      <ActionsBar addNew={addNew} deleteItem={deleteItem} />
    </div>
  );
}

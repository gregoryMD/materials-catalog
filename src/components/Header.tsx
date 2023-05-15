import ActionsBar from "./ActionsBar";

interface Props {
  addNew: () => void;
  deleteItem: () => void;
}

export default function Header({ addNew, deleteItem }: Props) {
  return (
    <div className="mb-4">
      <h1 className="text-xl mb-1 font-bold">Materials</h1>
      <ActionsBar addNew={addNew} deleteItem={deleteItem} />
    </div>
  );
}

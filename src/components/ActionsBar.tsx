interface Props {
  addNew: () => void;
  deleteItem: () => void;
}
export default function ActionsBar({ addNew, deleteItem }: Props) {
  return (
    <div className="py-1">
      <button className="bg-sky-500 mr-1 px-2 rounded-full" onClick={addNew}>
        + Add
      </button>
      <button
        className="bg-red-600 mx-1 px-2 rounded-full"
        onClick={deleteItem}
      >
        - Delete
      </button>
    </div>
  );
}

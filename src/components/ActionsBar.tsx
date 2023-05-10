interface Props {
  addNew: () => void;
  deleteItem: () => void;
}
export default function ActionsBar({ addNew, deleteItem }: Props) {
  return (
    <div>
      <button onClick={addNew}>Add + </button>
      <button onClick={deleteItem}>Delete - </button>
    </div>
  );
}

export default function Footer({ itemCosts }) {
  const total =
    itemCosts.length > 1 && itemCosts.reduce((acc, curr) => acc + curr);
  return (
    <div className="my-3 text-sm">
      <p>Total Cost:</p>
      <p>${total}.00</p>
    </div>
  );
}

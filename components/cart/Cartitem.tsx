import { CartItem as CartItemType } from "@/types/cart";

type CartItemProps = {
  item: CartItemType;
  removeItem: (id: number) => void;
};

export default function CartItem({
  item,
  removeItem,
}: CartItemProps) {
  return (
    <li className="flex justify-between items-center border rounded-lg p-3">
      <div className="text-black">
        <p>{item.name}</p>

        <p className="text-sm text-gray-500">
          Quantity: {item.quantity}
        </p>
      </div>

      <button
        onClick={() => removeItem(item.id)}
        className="text-red-600 hover:text-red-800"
      >
        Remove
      </button>
    </li>
  );
}
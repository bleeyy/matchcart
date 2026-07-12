import { CartItem as CartItemType } from "@/types/cart";

type CartItemProps = {
  item: CartItemType;
  removeItem: (id: number) => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  highlighted: boolean;
};

export default function CartItem({
  item,
  removeItem,
  increaseQuantity,
  decreaseQuantity,
  highlighted,
}: CartItemProps) {
  return (
    <li
      className={`flex justify-between items-center border rounded-lg p-3 transition-all duration-300 ${highlighted
          ? "bg-blue-100 border-blue-500 scale-105"
          : ""
        }`}
    >
      <div className="text-black">
        <p>{item.name}</p>

        <div className="flex items-center gap-3 mt-2">
          <button
            onClick={() => decreaseQuantity(item.id)}
            disabled={item.quantity === 1}
            className={`px-2 rounded ${item.quantity === 1
                ? "text-gray-300 cursor-not-allowed"
                : "text-blue-600 hover:text-blue-800"
              }`}
          >
            ◀
          </button>

          <span className="font-medium">
            {item.quantity}
          </span>

          <button
            onClick={() => increaseQuantity(item.id)}
            className="px-2 rounded text-blue-600 hover:text-blue-800"
          >
            ▶
          </button>
        </div>
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
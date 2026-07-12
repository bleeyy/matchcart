import { CartItem as CartItemType } from "@/types/cart";
import CartItem from "./CartItem";

type CartProps = {
  cart: CartItemType[];
  removeItem: (id: number) => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  highlightedItem: number | null;
};

export default function Cart({
  cart,
  removeItem,
  increaseQuantity,
  decreaseQuantity,
  highlightedItem,
}: CartProps) {
  return (
    <>
      <h2 className="text-xl font-semibold mb-3 text-black">
        Cart
      </h2>

      {cart.length === 0 ? (
        <p className="text-gray-500">
          Your cart is empty.
        </p>
      ) : (
        <ul className="space-y-2">
          {cart.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              removeItem={removeItem}
              increaseQuantity={increaseQuantity}
              decreaseQuantity={decreaseQuantity}
              highlighted={highlightedItem === item.id}
            />
          ))}
        </ul>
      )}
    </>
  );
}
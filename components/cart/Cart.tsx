import { CartItem as CartItemType } from "@/types/cart";
import CartItem from "./Cartitem";

type Props = {
  cart: CartItemType[];
  removeItem: (id: number) => void;
};

export default function Cart({
  cart,
  removeItem,
}: Props) {
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
            />
          ))}
        </ul>
      )}
    </>
  );
}
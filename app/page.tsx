"use client";

import { useState, useEffect } from "react";
import { CartItem } from "@/types/cart";
import Header from "@/components/layout/Header";
import ItemInput from "@/components/cart/Iteminput";
import Cart from "@/components/cart/Cart";

export default function Home() {
  const [input, setInput] = useState("");
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addItem = () => {
    if (!input.trim()) return;

    setCart([
      ...cart,
      {
        id: Date.now(),
        productId: Date.now(),
        name: input.trim(),
        quantity: 1,
      },
    ]);
    setInput("");
  };

  const removeItem = (id: number) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <main className="min-h-screen bg-gray-100 flex justify-center items-start pt-20">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-lg">
        <Header />
        <ItemInput
          input={input}
          setInput={setInput}
          addItem={addItem}
        />
        <Cart cart={cart} removeItem={removeItem} />
      </div>
    </main>
  );
}
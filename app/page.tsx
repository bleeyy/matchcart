"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [input, setInput] = useState("");
  const [cart, setCart] = useState<string[]>([]);

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

    setCart([...cart, input.trim()]);
    setInput("");
  };

  const removeItem = (index: number) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  return (
    <main className="min-h-screen bg-gray-100 flex justify-center items-start pt-20">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-lg">
        <h1 className="text-4xl font-bold text-center mb-2">
          🛒 QuicKart
        </h1>

        <p className="text-center text-gray-500 mb-8">
          Compare grocery prices across stores.
        </p>

        <div className="flex gap-2 mb-6">
          <input
            className="border rounded-lg px-4 py-2 flex-1 bg-white text-black placeholder:text-gray-400"
            type="text"
            placeholder="Add an item..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") addItem();
            }}
          />

          <button
            onClick={addItem}
            className="bg-blue-600 text-white px-5 rounded-lg hover:bg-blue-700"
          >
            Add
          </button>
        </div>

        <h2 className="text-xl font-semibold mb-3">Cart</h2>

        {cart.length === 0 ? (
          <p className="text-gray-400">Your cart is empty.</p>
        ) : (
          <ul className="space-y-2">
            {cart.map((item, index) => (
              <li
                key={index}
                className="flex justify-between items-center border rounded-lg p-3"
              >
                <span className="text-black">{item}</span>

                <button
                  onClick={() => removeItem(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}
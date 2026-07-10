type ItemInputProps = {
  input: string;
  setInput: (value: string) => void;
  addItem: () => void;
};

export default function ItemInput({
  input,
  setInput,
  addItem,
}: ItemInputProps) {
  return (
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
  );
}
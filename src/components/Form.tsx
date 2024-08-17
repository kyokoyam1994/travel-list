import { useState } from "react";
import Item from "../models/Item";

interface FormProps {
  onAddItem: (item: Item) => void;
}

export default function Form({ onAddItem }: FormProps) {
  const [quantity, setQuantity] = useState(1);
  const [description, setDescription] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!description) {
      return;
    }

    const item: Item = {
      id: Date.now(),
      description,
      quantity,
      packed: false,
    };

    onAddItem(item);
    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={(e) => handleSubmit(e)}>
      <h3>What do you need for your trip?</h3>
      <select value={quantity} onChange={(e) => setQuantity(+e.target.value)}>
        {Array.from({ length: 20 }, (_, i) => (
          <option key={i} value={i + 1}>
            {i + 1}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></input>
      <button>Add</button>
    </form>
  );
}

import Item from "../models/Item";

interface PackingItemProps {
  item: Item;
  onDeleteItem: (id: number) => void;
  onToggleItem: (id: number) => void;
}

export default function PackingItem({
  item,
  onDeleteItem,
  onToggleItem,
}: PackingItemProps) {
  return (
    <li>
      <input
        type="checkbox"
        value={`${item.packed}`}
        onChange={() => onToggleItem(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}

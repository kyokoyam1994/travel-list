import Item from "../models/Item";

interface StatsProp {
  items: Item[];
}

export default function Stats({ items }: StatsProp) {
  const numItems = items.length;
  if (!numItems) {
    return (
      <footer className="stats">
        <em>Start adding some items to your list! 🚀</em>
      </footer>
    );
  }

  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? `You got everything! Ready to go! ✈️`
          : `
          You have ${numItems} items and you already packed ${numPacked} (${percentage}%)`}
      </em>
    </footer>
  );
}

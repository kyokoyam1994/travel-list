import { useState } from "react";
import "./App.css";
import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";
import Item from "./models/Item";

function App() {
  const [items, setItems] = useState<Item[]>([]);

  function addItem(item: Item) {
    setItems((items) => [...items, item]);
  }

  function deleteItem(id: number) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function clearItems() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );
    if (confirmed) {
      setItems([]);
    }
  }

  function toggleItem(id: number) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  return (
    <>
      <Logo />
      <Form onAddItem={addItem} />
      <PackingList
        items={items}
        onDeleteItem={deleteItem}
        onToggleItem={toggleItem}
        onClearItems={clearItems}
      />
      <Stats items={items} />
    </>
  );
}

export default App;

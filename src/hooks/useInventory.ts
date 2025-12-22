import { useState } from "react";
import { InventoryItem } from "../types/inventory";
import { mockItems } from "../data/mockItems";

export function useInventory() {
  const [items, setItems] = useState<InventoryItem[]>(mockItems);

  function addItem(item: Omit<InventoryItem, "id">) {
    setItems((prev) => [
      ...prev,
      { ...item, id: Date.now().toString() },
    ]);
  }

  return {
    items,
    addItem,
  };
}

import { useState } from "react";
import { View, FlatList } from "react-native";
import ItemRow from "@/src/components/ItemRow";
import { mockItems } from "@/src/data/mockItems";
import { InventoryItem } from "@/src/types/inventory";

export default function HomeScreen() {
  const [items, setItems] = useState<InventoryItem[]>(mockItems);

  const increment = (id: string) => {
    setItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, qty: item.qty + 1 }
          : item
      )
    );
  };

  const decrement = (id: string) => {
    setItems(items =>
      items.map(item =>
        item.id === id && item.qty > 0
          ? { ...item, qty: item.qty - 1 }
          : item
      )
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={items}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <ItemRow
            item={item}
            onIncrement={() => increment(item.id)}
            onDecrement={() => decrement(item.id)}
          />
        )}
      />
    </View>
  );
}

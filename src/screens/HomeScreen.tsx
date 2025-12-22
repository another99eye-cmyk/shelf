import { View, FlatList } from "react-native";
import { useState } from "react";
import ItemRow from "@/src/components/ItemRow";
import FloatingAddButton from "@/src/components/FloatingAddButton";
import AddItemModal from "@/src/components/AddItemModal";
import { useInventory } from "@/src/hooks/useInventory";

export default function HomeScreen() {
  const { items, addItem } = useInventory();
  const [showModal, setShowModal] = useState(false);

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ItemRow item={item} />}
      />

      <FloatingAddButton onPress={() => setShowModal(true)} />

      {showModal && (
        <AddItemModal
          onAdd={(name, qty) =>
            addItem({ name, qty, min: 1 })
          }
          onClose={() => setShowModal(false)}
        />
      )}
    </View>
  );
}

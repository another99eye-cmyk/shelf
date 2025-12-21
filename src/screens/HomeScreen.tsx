import { View, Text, FlatList, StyleSheet } from "react-native";
import { COLORS } from "../theme/colors";
import { TYPE } from "../theme/type";
import ItemRow from "../components/ItemRow";
import { mockItems } from "../data/mockItems";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* Top bar */}
      <View style={styles.header}>
        <Text style={styles.title}>Hi, Shelf</Text>
        <Text style={styles.menu}>☰</Text>
      </View>

      {/* Stock list */}
      <FlatList
        data={mockItems}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <ItemRow item={item} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.paper,
  },
  header: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    ...TYPE.itemName,
    color: COLORS.ink,
  },
  menu: {
    fontSize: 20,
    color: COLORS.ink,
  },
  list: {
    paddingHorizontal: 12,
    paddingBottom: 80, // space for FAB later
  },
});

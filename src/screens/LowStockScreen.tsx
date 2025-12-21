import { View, Text, FlatList, StyleSheet } from "react-native";
import { COLORS } from "../theme/colors";
import { TYPE } from "../theme/type";
import ItemRow from "../components/ItemRow";
import { mockItems } from "../data/mockItems";

export default function LowStockScreen() {
  const lowStockItems = mockItems
    .filter((item) => item.qty < item.min)
    .sort((a, b) => a.qty - b.qty);

  const empty = lowStockItems.length === 0;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Low Stock</Text>
        <Text style={styles.subtitle}>Items that need attention</Text>
      </View>

      {empty ? (
        <View style={styles.empty}>
          <Text style={styles.check}>✓</Text>
          <Text style={styles.emptyText}>All good for now.</Text>
        </View>
      ) : (
        <FlatList
          data={lowStockItems}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.list}
          renderItem={({ item }) => (
            <ItemRow item={item} compact />
          )}
        />
      )}
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
    paddingTop: 12,
    paddingBottom: 4,
  },
  title: {
    ...TYPE.sectionTitle,
    color: COLORS.ink,
  },
  subtitle: {
    ...TYPE.meta,
    color: COLORS.ash,
    marginTop: 2,
  },
  list: {
    paddingHorizontal: 12,
  },
  empty: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  check: {
    fontSize: 32,
    color: COLORS.ash,
    marginBottom: 8,
  },
  emptyText: {
    ...TYPE.meta,
    color: COLORS.ash,
  },
});

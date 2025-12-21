import { View, Text, StyleSheet } from "react-native";
import { COLORS } from "../theme/colors";
import { TYPE } from "../theme/type";
import { InventoryItem } from "../types/inventory";

type Props = {
  item: InventoryItem;
  compact?: boolean;
};

export default function ItemRow({ item, compact }: Props) {
  const isZero = item.qty === 0;
  const isLow = item.qty < item.min;

  return (
    <View style={[styles.card, compact && styles.compact]}>
      {isLow && <View style={styles.amberBar} />}

      <Text style={styles.icon}>📦</Text>

      <View style={styles.middle}>
        <Text style={styles.name}>{item.name}</Text>
        {item.tag && <Text style={styles.tag}>{item.tag}</Text>}
      </View>

      <Text
        style={[
          styles.qty,
          isZero && { color: COLORS.mutedRed },
        ]}
      >
        {item.qty}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.white,
    borderRadius: 8,
    padding: 12,
    marginBottom: 8,
  },
  compact: {
    paddingVertical: 8,
  },
  amberBar: {
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    width: 4,
    backgroundColor: COLORS.amber,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  icon: {
    marginRight: 12,
    fontSize: 16,
  },
  middle: {
    flex: 1,
  },
  name: {
    ...TYPE.itemName,
    color: COLORS.ink,
  },
  tag: {
    ...TYPE.meta,
    color: COLORS.ash,
    marginTop: 2,
  },
  qty: {
    ...TYPE.quantity,
    color: COLORS.ink,
  },
});

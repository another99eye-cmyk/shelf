import { Pressable, Text, StyleSheet } from "react-native";
import { COLORS } from "../theme/colors";

export default function FloatingAddButton({ onPress }: { onPress: () => void }) {
  return (
    <Pressable style={styles.fab} onPress={onPress}>
      <Text style={styles.plus}>+</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    bottom: 72,
    alignSelf: "center",
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: COLORS.shelfGreen,
    justifyContent: "center",
    alignItems: "center",
  },
  plus: {
    color: COLORS.white,
    fontSize: 28,
    fontWeight: "600",
  },
});

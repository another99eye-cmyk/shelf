import { View, Text, StyleSheet } from "react-native";
import { COLORS } from "../theme/colors";
import { TYPE } from "../theme/type";
import { SPACING } from "../theme/spacing";

export default function AccountScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Account</Text>
        <Text style={styles.meta}>Details live here later.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.paper,
    padding: SPACING.lg,
  },
  card: {
    backgroundColor: COLORS.white,
    borderRadius: 8,
    padding: SPACING.lg,
  },
  title: {
    ...TYPE.sectionTitle,
    color: COLORS.ink,
    marginBottom: SPACING.sm,
  },
  meta: {
    ...TYPE.meta,
    color: COLORS.ash,
  },
});

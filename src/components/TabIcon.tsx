import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../theme/colors";
import { TYPE } from "../theme/type";

type Props = {
  icon: keyof typeof Ionicons.glyphMap;
  label: string | null;
  focused: boolean;
};

export default function TabIcon({ icon, label, focused }: Props) {
  return (
    <View style={styles.container}>
      <Ionicons
        name={icon}
        size={22}
        color={focused ? COLORS.shelfGreen : COLORS.ash}
      />
      {label && (
        <Text style={styles.label}>{label}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    ...TYPE.meta,
    color: COLORS.shelfGreen,
    marginTop: 2,
  },
});

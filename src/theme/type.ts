import { TextStyle } from "react-native";

type TypeScale = {
  itemName: TextStyle;
  quantity: TextStyle;
  sectionTitle: TextStyle;
  meta: TextStyle;
};

export const TYPE: TypeScale = {
  itemName: {
    fontSize: 16,
    fontWeight: "500",
  },
  quantity: {
    fontSize: 18,
    fontWeight: "600",
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "500",
  },
  meta: {
    fontSize: 12,
    fontWeight: "400",
  },
};

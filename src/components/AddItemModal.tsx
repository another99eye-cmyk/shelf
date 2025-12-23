import React, { useState } from "react";
import { View, Text, TextInput, Pressable, StyleSheet, Modal } from "react-native";
import { COLORS } from "../theme/colors";
import { TYPE } from "../theme/type";
import { SPACING } from "../theme/spacing";
import { DEFAULT_MIN_STOCK } from "../constants/inventory";


type Props = {
  visible: boolean;
  onClose: () => void;
  onAdd: (name: string, qty: number) => void;
};

export default function AddItemModal({ visible, onClose, onAdd }: Props) {
  const [name, setName] = useState("");
  const [qty, setQty] = useState("");

  function handleAdd() {
    const parsedQty = Number(qty);

    if (!name.trim() || isNaN(parsedQty) || parsedQty < 0) {
      return;
    }

    onAdd(name.trim(), parsedQty);
    setName("");
    setQty("");
    onClose();
  }

  return (
    <Modal transparent visible={visible} animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.card}>
          <Text style={styles.title}>Add Product</Text>

          <TextInput
            placeholder="Product name"
            value={name}
            onChangeText={setName}
            style={styles.input}
          />

          <TextInput
            placeholder="Quantity"
            value={qty}
            onChangeText={setQty}
            keyboardType="numeric"
            style={styles.input}
          />

          <Pressable style={styles.button} onPress={handleAdd}>
            <Text style={styles.buttonText}>Add</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.25)",
    justifyContent: "center",
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
    marginBottom: SPACING.md,
  },
  input: {
    borderWidth: 1,
    borderColor: COLORS.ash,
    borderRadius: 6,
    padding: SPACING.sm,
    marginBottom: SPACING.sm,
  },
  button: {
    backgroundColor: COLORS.shelfGreen,
    padding: SPACING.sm,
    borderRadius: 6,
    alignItems: "center",
    marginTop: SPACING.sm,
  },
  buttonText: {
    color: COLORS.white,
    fontWeight: "600",
  },
});

Number(5) || DEFAULT_MIN_STOCK

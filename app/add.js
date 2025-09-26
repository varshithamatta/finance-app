import { View, Text, Button, StyleSheet } from "react-native";
import { router } from "expo-router";

export default function AddTransaction() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>➕ Add Transaction</Text>
      <Button title="Go Back" onPress={() => router.back()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 20, fontWeight: "600", marginBottom: 20 },
});

import { View, Text, Button, StyleSheet } from "react-native";
import { router } from "expo-router";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to MyFinance 🚀</Text>
      <Text style={styles.subtitle}>Track your income, expenses, and budgets.</Text>
      <Button
        title="Go to Add Transaction"
        onPress={() => router.push("/add")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 20 },
  title: { fontSize: 22, fontWeight: "700", marginBottom: 10 },
  subtitle: { fontSize: 14, color: "#666", marginBottom: 20 },
});

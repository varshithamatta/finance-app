import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { router } from "expo-router";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to SpendWiz 🚀</Text>
      <Text style={styles.subtitle}>Track your income, expenses, and budgets.</Text>

      <View style={styles.buttonContainer}>
        <Button title="Add Transaction" color="#FFFD82" onPress={() => router.push("/add")} />
        <Button title="Budget" color="#FFFD82" onPress={() => router.push("/budget")} />
        <Button title="Insights" color="#FFFD82" onPress={() => router.push("/insights")} />
        <Button title="Profile" color="#FFFD82" onPress={() => router.push("/profile")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 20, backgroundColor: "#FFF" },
  title: { fontSize: 24, fontWeight: "700", color: "#386641", marginBottom: 10 },
  subtitle: { fontSize: 16, color: "#613A3A", marginBottom: 20, textAlign: "center" },
  buttonContainer: { width: "100%", gap: 10},
});

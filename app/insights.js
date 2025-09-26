import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { router } from "expo-router";

export default function Insights() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Insights</Text>
      <Text style={styles.subtitle}>This is a placeholder for financial insights and analytics.</Text>
      <Button title="Go Back" color="#FFFD82" onPress={() => router.back()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 20, backgroundColor: "#C6E0FF" },
  title: { fontSize: 24, fontWeight: "700", color: "#386641", marginBottom: 10 },
  subtitle: { fontSize: 16, color: "#613A3A", marginBottom: 20, textAlign: "center" },
});

import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack screenOptions={{ headerStyle: { backgroundColor: "#FFF" }, headerTintColor: "#386641", headerTitleStyle: { fontWeight: "700", fontSize:"22px" } }}>
      <Stack.Screen name="index" options={{ title: "SpendWiz" }} />
      <Stack.Screen name="add" options={{ title: "Add Transaction" }} />
      <Stack.Screen name="budget" options={{ title: "Budget" }} />
      <Stack.Screen name="insights" options={{ title: "Insights" }} />
      <Stack.Screen name="profile" options={{ title: "Profile" }} />
    </Stack>
  );
}

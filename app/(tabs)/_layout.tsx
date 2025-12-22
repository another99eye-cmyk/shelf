import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "@/src/theme/colors";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: COLORS.white,
        },
      }}
    >
      <Tabs.Screen
        name="low-stock"
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="warning-outline" size={22} color={color} />
          ),
          tabBarLabel: ({ focused }) => (focused ? "Low Stock" : ""),
          tabBarActiveTintColor: COLORS.amber,
          tabBarInactiveTintColor: COLORS.ash,
        }}
      />

      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="home-outline" size={22} color={color} />
          ),
          tabBarLabel: ({ focused }) => (focused ? "Home" : ""),
          tabBarActiveTintColor: COLORS.shelfGreen,
          tabBarInactiveTintColor: COLORS.ash,
        }}
      />

      <Tabs.Screen
        name="account"
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="person-outline" size={22} color={color} />
          ),
          tabBarLabel: ({ focused }) => (focused ? "Account" : ""),
          tabBarActiveTintColor: COLORS.ink,
          tabBarInactiveTintColor: COLORS.ash,
        }}
      />
    </Tabs>
  );
}

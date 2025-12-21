import { Text, StyleSheet } from 'react-native';
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "@/src/theme/colors";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: COLORS.shelfGreen,
        tabBarInactiveTintColor: COLORS.ash,
        tabBarStyle: {
          backgroundColor: COLORS.white,
          borderTopWidth: 0,
        },
        tabBarIcon: ({ color, focused }) => {
          let iconName: keyof typeof Ionicons.glyphMap;

          if (route.name === "low-stock") {
            iconName = focused ? "warning" : "warning-outline";
          } else if (route.name === "index") {
            iconName = focused ? "home" : "home-outline";
          } else {
            iconName = focused ? "person" : "person-outline";
          }

          return (
            <>
              <Ionicons name={iconName} size={22} color={color} />
              {focused && (
                <IoniconsLabel routeName={route.name} />
              )}
            </>
          );
        },
      })}
    >
      <Tabs.Screen name="low-stock" />
      <Tabs.Screen name="index" />
      <Tabs.Screen name="account" />
    </Tabs>
  );
}

function IoniconsLabel({ routeName }: { routeName: string }) {
  let label = "";

  if (routeName === "low-stock") label = "Low Stock";
  if (routeName === "index") label = "Home";
  if (routeName === "account") label = "Account";

  return (
    <Text
      style={{
        fontSize: 11,
        marginTop: 2,
        color: COLORS.shelfGreen,
      }}
    >
      {label}
    </Text>
  );
}

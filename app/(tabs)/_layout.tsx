import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "@/src/theme/colors";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false, // we control labels manually
        tabBarStyle: {
          backgroundColor: COLORS.white,
          borderTopWidth: 0.5,
          borderTopColor: COLORS.paper,
        },
        tabBarActiveTintColor: COLORS.shelfGreen,
        tabBarInactiveTintColor: COLORS.ash,
      }}
    >
      {/* 1. LOW-STOCKS — LEFT */}
      <Tabs.Screen
        name="low-stock"
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <TabIcon
              focused={focused}
              color={focused ? COLORS.amber : color}
              size={size}
              icon="warning-outline"
              label="Low Stock"
            />
          ),
        }}
      />

      {/* 2. HOME — CENTER */}
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <TabIcon
              focused={focused}
              color={color}
              size={size}
              icon={focused ? "home" : "home-outline"}
              label="Home"
            />
          ),
        }}
      />

      {/* 3. ACCOUNT — RIGHT */}
      <Tabs.Screen
        name="account"
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <TabIcon
              focused={focused}
              color={color}
              size={size}
              icon={focused ? "person" : "person-outline"}
              label="Account"
            />
          ),
        }}
      />
    </Tabs>
  );
}

/* ---------------------------- */
/* Tab Icon Component           */
/* ---------------------------- */

function TabIcon({
  focused,
  icon,
  label,
  color,
  size,
}: {
  focused: boolean;
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
  color: string;
  size: number;
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 2,
      }}
    >
      <Ionicons name={icon} size={size} color={color} />
      {focused && (
        <span
          style={{
            fontSize: 12,
            color: color,
            lineHeight: "14px",
          }}
        >
          {label}
        </span>
      )}
    </div>
  );
}

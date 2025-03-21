import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function Sidebar() {
  const router = useRouter();

  const routes = [
    { name: "Home", path: "/" },
    { name: "About", path: "/About" },
    { name: "Scroll View", path: "/scroll-view" },
    { name: "Flat List", path: "/flat-list" },
  ];

  return (
    <View style={styles.sidebar}>
      {routes.map((route, index) => (
        <TouchableOpacity
          key={index}
          style={styles.navItem}
          onPress={() => router.push(route.path)}
        >
          <Text style={styles.navText}>{route.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  sidebar: {
    width: 120, // Increased width
    backgroundColor: "#333",
    paddingVertical: 20,
    paddingHorizontal: 10,
    height: "100%",
  },
  navItem: {
    paddingVertical: 15, // Increased padding
    paddingHorizontal: 20, // Increased padding
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: "#444", // Added background color
  },
  navText: {
    color: "white",
    fontSize: 16, // Increased font size
  },
});
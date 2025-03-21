import { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function Sidebar() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const routes = [
    { name: "Home", path: "/" },
    { name: "About", path: "/About" },
    { name: "Scroll View", path: "/scroll-view" },
    { name: "Flat List", path: "/flat-list" },
  ];

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Open Button */}
      <TouchableOpacity style={styles.openButton} onPress={toggleSidebar}>
        <Text style={styles.openButtonText}>☰</Text>
      </TouchableOpacity>

      {/* Sidebar */}
      {isOpen && (
        <View style={styles.sidebar}>
          {/* Close Button */}
          <TouchableOpacity style={styles.closeButton} onPress={toggleSidebar}>
            <Text style={styles.closeButtonText}>X</Text>
          </TouchableOpacity>

          {/* Navigation Items */}
          {routes.map((route, index) => (
            <TouchableOpacity
              key={index}
              style={styles.navItem}
              onPress={() => {
                router.push(route.path);
                setIsOpen(false); // Close sidebar after navigation
              }}
            >
              <Text style={styles.navText}>{route.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  sidebar: {
    width: 120,
    backgroundColor: "#333",
    paddingVertical: 20,
    paddingHorizontal: 10,
    height: "100%",
    position: "absolute",
    left: 0,
    top: 0,
    zIndex: 1,
  },
  navItem: {
    top: 70,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: "#444",
  },
  navText: {
    color: "white",
    fontSize: 16,
  },
  openButton: {
    padding: 20,
    backgroundColor: "#6200ee",
    borderRadius: 5,
    margin: 10,
    alignSelf: "flex-start",
    top:40,
  },
  openButtonText: {
    color: "white",
    fontSize: 16,
  },
  closeButton: {
    position: "absolute",
    right: 10,
    top: 45,
    backgroundColor: "#ff4444",
    borderRadius: 15,
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  closeButtonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});
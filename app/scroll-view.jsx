import { ScrollView, Text, View, StyleSheet } from "react-native";
import Sidebar from "../components/Sidebar";

export default function ScrollViewPage() {
  return (
    <View style={styles.container}>
      <Sidebar />
      <ScrollView style={styles.content}>
        {Array.from({ length: 50 }).map((_, index) => (
          <Text key={index} style={styles.item}>
            Item {index + 1}
          </Text>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, flexDirection: "row" },
  content: { flex: 1, padding: 20 },
  item: {
    fontSize: 18,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
});
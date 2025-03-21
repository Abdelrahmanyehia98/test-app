import { FlatList, Text, View, StyleSheet } from "react-native";
import Sidebar from "../components/Sidebar";

export default function FlatListPage() {
  const data = Array.from({ length: 50 }, (_, index) => ({
    id: index + 1,
    title: `Item ${index + 1}`,
  }));

  return (
    <View style={styles.container}>
      <Sidebar />
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.title}>{item.title}</Text>
          </View>
        )}
        style={styles.content}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, flexDirection: "row" },
  content: { flex: 1, padding: 20 },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  title: {
    fontSize: 18,
  },
});
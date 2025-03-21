import { useState } from "react";
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet, Button, TextInput,StatusBar } from "react-native";
import Sidebar from "../components/Sidebar";

const initialData = [
  { id: 1, image: require("../assets/lemon.png") }, 
  { id: 2, image: require("../assets/mango.png") }, 
  { id: 3, image: require("../assets/icon.png") }, 
];

export default function HomeScreen() {
  const [data, setData] = useState(initialData);
  const [searchQuery, setSearchQuery] = useState("");

  // Function to delete an item by id
  const deleteItem = (id) => {
    setData((prevData) => prevData.filter((item) => item.id !== id));
  };

  // Function to restore the original data
  const restoreData = () => {
    setData(initialData);
  };

  // Function to filter data based on search query
  const filteredData = data.filter((item) =>
    item.id.toString().includes(searchQuery)
  );

  return (
    <View style={styles.container}>
      <Sidebar />
      <View style={styles.content}>
        {/* Search Input */}
        <TextInput
          style={styles.searchInput}
          placeholder="Search by ID..."
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)}
        />

        <ScrollView>
          {filteredData.map((item) => (
            <TouchableOpacity key={item.id} onPress={() => deleteItem(item.id)}>
              <View style={styles.item}>
                <Image source={item.image} style={styles.image} />
                <Text style={styles.text}>ID: {item.id}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <Button title="Restore Data" onPress={restoreData} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  content: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  item: {
    top: 40,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    padding: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  text: {
    fontSize: 16,
  },
  searchInput: {
    top: 40,
    height: 30,
    borderColor: "#ccc",
    borderWidth: 3,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 40,
  },
});
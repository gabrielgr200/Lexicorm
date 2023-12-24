import { StyleSheet, Text, TextInput, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import React from "react";

function Search() {
  return (
    <View style={styles.searchContainer}>
      <AntDesign name="search1" size={24} color="black" />
      <TextInput
        style={styles.input}
        placeholder="Qual Sua Duvida"
      />
    </View>
  );
}

export default Search;

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: 350,
    marginVertical: 30,
  },
  input: {
    marginLeft: 10,
    flex: 1,
  },
});

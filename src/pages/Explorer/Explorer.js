import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from "react-native";
import Balance from "../../components/Balance/Balance";

const RemedioCard = ({ remedio }) => (
  <View style={styles.card}>
    <Text style={{ fontWeight: "bold", textTransform: "uppercase" }}>
      {remedio.Referencia}
    </Text>
  </View>
);

const Explorer = () => {
  const [selectedLetter, setSelectedLetter] = useState(null);
  const [remedios, setRemedios] = useState([]);
  const alphabet = "ABCDEFGHIJKLMNOPQRST";

  useEffect(() => {
    if (selectedLetter) {
      fetchRemedios(selectedLetter);
    }
  }, [selectedLetter]);

  const fetchRemedios = (letter) => {
    fetch(`https://api-remedios-d6f50ec60526.herokuapp.com/remedios/distinct/${letter}`)
      .then((response) => response.json())
      .then((data) => setRemedios(data))
      .catch((error) => console.error("Error fetching data:", error));
  };

  const renderAlphabetItem = (item) => (
    <TouchableOpacity
      style={selectedLetter === item ? styles.selectedLetter : styles.letter}
      onPress={() => setSelectedLetter(item)}
      key={item}
    >
      <Text>{item}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ height: 80 }} />
        <Balance />
        <View style={{ height: 20 }} />

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            {alphabet.split("").map((letter) => renderAlphabetItem(letter))}
          </View>
        </ScrollView>

        {selectedLetter && (
          <>
            <View style={{ height: 10 }} />
            <Text
              style={{
                left: 10,
                fontWeight: "bold",
                textTransform: "uppercase",
              }}
            >
              Lista de remédios para pesquisar com a letra {selectedLetter} :
            </Text>
            <View style={{ height: 10 }} />
            {remedios.map((item, index) => (
              <RemedioCard key={item.Referencia} remedio={item} />
            ))}
          </>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  letter: {
    padding: 10,
  },
  selectedLetter: {
    backgroundColor: "#4682B4",
    padding: 10,
    borderRadius: 50,
  },
  card: {
    borderBottomWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    margin: 5,
  },
});

export default Explorer;

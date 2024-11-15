import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from "react-native";
import Balance from "../../components/Balance/Balance";
import { useNavigation } from '@react-navigation/native';

const RemedioCard = ({ remedio, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.card}>
    <Text style={{ fontWeight: "bold", textTransform: "uppercase" }}>
      {remedio.referencia}
    </Text>
  </TouchableOpacity>
);

const Explorer = () => {
  const [selectedLetter, setSelectedLetter] = useState(null);
  const [remedios, setRemedios] = useState([]);
  const alphabet = "ABCDEFGHIJKLMNOPQRST";
  const navigation = useNavigation();

  useEffect(() => {
    if (selectedLetter !== null) {
      fetchRemedios(selectedLetter);
    }
  }, [selectedLetter]);

  const fetchRemedios = (letter) => {
    fetch(`https://api-remedios.onrender.com/remedios/distinct/${letter}`)
      .then((response) => response.json())
      .then((data) => setRemedios(data))
      .catch((error) => console.error("Error fetching data:", error));
  };

  const navigateToSaveMedicine = (remedio) => {
    navigation.navigate('SendMedicine', { remedio });
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

  const filterUniqueRemedios = (data) => {
    const uniqueRemedios = [];
    const seenRemedios = new Set();

    data.forEach((item) => {
      const referenciaLowerCase = item.referencia.toLowerCase();

      if (!seenRemedios.has(referenciaLowerCase)) {
        seenRemedios.add(referenciaLowerCase);
        uniqueRemedios.push(item);
      }
    });

    return uniqueRemedios;
  };

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

        {selectedLetter !== null && (
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
            {filterUniqueRemedios(remedios).map((item, index) => (
              <RemedioCard
                key={item.referencia}
                remedio={item}
                onPress={() => navigateToSaveMedicine(item)}
              />
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

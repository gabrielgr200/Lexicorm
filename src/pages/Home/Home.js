import React, { useState, useEffect, useRef } from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  Alert,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Animatable from "react-native-animatable";
import Header from "../../components/Header/Header";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from '@expo/vector-icons';
import Carrossel from "../../components/Carrossel/Carrossel";
import { TOP_PLACES, PLACES } from "../../data";
import TripsList from "../../components/TripsList/TripsList";
import { AntDesign } from '@expo/vector-icons';
import Hour from "../../components/Hour/Hour";
import Data from "../../components/Date/Date";

export default function Home({ route }) {
  const animatableRef = useRef(null);
  const [savedMedicines, setSavedMedicines] = useState([]);

  useEffect(() => {
    AsyncStorage.getItem("@saved_medicines")
      .then((data) => {
        if (data) {
          setSavedMedicines(JSON.parse(data));
        }
      })
      .catch((error) => console.error("Error loading saved medicines:", error));
  }, []);

  useEffect(() => {
    if (route.params && route.params.savedMedicineCard) {
      const isMedicineSaved = savedMedicines.some(
        (medicine) =>
          medicine.Referencia === route.params.savedMedicineCard.Referencia
      );

      if (!isMedicineSaved) {
        const updatedMedicines = [
          ...savedMedicines,
          route.params.savedMedicineCard,
        ];
        setSavedMedicines(updatedMedicines);

        AsyncStorage.setItem(
          "@saved_medicines",
          JSON.stringify(updatedMedicines)
        )
          .then(() => console.log("Medicine saved successfully"))
          .catch((error) => console.error("Error saving medicine:", error));
      }
    }
  }, [route.params]);

  const handleDeleteMedicine = (medicineData) => {
    Alert.alert(
      "Confirmar exclusão",
      `Tem certeza que deseja excluir o medicamento ${medicineData.Referencia}?`,
      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Excluir",
          style: "destructive",
          onPress: () => {
            const updatedMedicines = savedMedicines.filter(
              (medicine) => medicine.Referencia !== medicineData.Referencia
            );
            setSavedMedicines(updatedMedicines);

            AsyncStorage.setItem(
              "@saved_medicines",
              JSON.stringify(updatedMedicines)
            )
              .then(() => console.log("Medicine deleted successfully"))
              .catch((error) =>
                console.error("Error deleting medicine:", error)
              );
          },
        },
      ]
    );
  };



  return (
    <ScrollView style={styles.container}>
      <Header name="Lexicorm" />

      <View style={{ height: 10 }} />

      <View style={styles.categoriesContainer}>
        <View
          style={styles.categoryCard}
        >
          <View style={styles.iconTextContainer}>
            <Entypo
              name="clock"
              size={24}
              color="black"
              style={styles.icon}
            />
            <Text style={styles.categoryTitle}><Hour /></Text>
          </View>
        </View>
        <Animatable.View
          ref={animatableRef}
          animation="rotate"
          iterationCount={1}
          duration={5000}
        >
          <Image source={require("../../img/star.png")} style={styles.img} />
        </Animatable.View>

        <View
          style={styles.categoryCard}
        >
          <View style={styles.iconTextContainer}>
            <MaterialIcons
              name="date-range"
              size={24}
              color="black"
              style={styles.icon}
            />
            <Text style={styles.categoryTitle}><Data /></Text>
          </View>
        </View>
      </View>

      <Carrossel list={TOP_PLACES} />

      <View style={{ height: 20 }} />

      <TripsList />

      <Text style={styles.title}>Os remédios salvos apareceram aqui</Text>
      <AntDesign name="arrowdown" size={24} color="black" style={styles.arrow} />
      <ScrollView style={styles.cardContainer}>
        {savedMedicines.map((medicineData, index) => (
          <View key={index} style={styles.card}>
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => handleDeleteMedicine(medicineData)}
            >
              <Animatable.View
                animation="rotate"
                easing="linear"
                iterationCount={1}
              >
                <Icon name="close" size={24} color="#FF0000" />
              </Animatable.View>
            </TouchableOpacity>

            <Text style={styles.medicineName}>{medicineData.Referencia}</Text>

            <View style={styles.detailItem}>
              <Text style={styles.detailText}>
                Princípio:
              </Text>
              <Text style={styles.info}>
                {medicineData.Principio}
              </Text>
            </View>

            <View style={styles.detailItem}>
              <Text style={styles.detailText}>
                Comercial:
              </Text>
              <Text style={styles.info}>
                {medicineData.Comercial}
              </Text>
            </View>

            {/* <View style={styles.detailItem}>
              <Text style={styles.detailText}>
                Registro:
              </Text>
              <Text style={styles.info}>
                {medicineData.Registro}
              </Text>
            </View> */}

            <View style={styles.detailItem}>
              <Text style={styles.detailText}>
                Colaterais:
              </Text>
              <Text style={styles.info}>
                {medicineData.Colaterais}
              </Text>
            </View>

            <View style={styles.detailItem}>
              <Text style={styles.detailText}>
                Decomposto:
              </Text>
              <Text style={styles.info}>
                {medicineData.Decomposto}
              </Text>
            </View>

            {/* <View style={styles.detailItem}>
              <Text style={styles.detailText}>
                Farmácia:
              </Text>
              <Text style={styles.info}>
                {medicineData.Farmacia}
              </Text>
            </View> */}

            <View style={styles.detailItem}>
              <Text style={styles.detailText}>
                Concentracão:
              </Text>
              <Text style={styles.info}>
                {medicineData.Concentracao}
              </Text>
            </View>
          </View>
        ))}
        <View style={{ height: 50 }} />
      </ScrollView>
    </ScrollView >
  );
}

const styles = StyleSheet.create({
  img: {
    width: 30,
    height: 30,
  },
  categoriesContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    marginBottom: 10,
  },
  categoryCard: {
    width: 140,
    padding: 6,
    borderWidth: 1,
    borderColor: "#4682B4",
    borderRadius: 50,
    marginHorizontal: 5,
  },
  icon: {
    top: 8,
    paddingLeft: 8,
  },
  categoryTitle: {
    bottom: 10,
    paddingLeft: 20,
    textAlign: "center",
    color: "#000000",
    fontWeight: "600",
    textTransform: "uppercase",
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 8,
  },
  arrow: {
    position: 'relative',
    left: 180
  },
  cardContainer: {
    padding: 16,
  },
  card: {
    backgroundColor: "#f8f8ff",
    marginBottom: 16,
    borderRadius: 10,
    padding: 16,
    elevation: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 6,
    position: "relative",
  },
  deleteButton: {
    position: "absolute",
    top: 4,
    right: 4,
    zIndex: 1,
  },
  medicineName: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
  detailItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 6
  },
  detailText: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  info: {
    flex: 1,
    marginLeft: 8,
    fontSize: 18
  }
});

import React, { useEffect, useState } from "react";
import MapView, { Marker } from "react-native-maps";
import { BackHandler, StyleSheet, View } from "react-native";
import * as Location from "expo-location";
import { useNavigation } from "@react-navigation/native";

export default function App() {
  const navigation = useNavigation();

  useEffect(() => {
    const backAction = () => {
      navigation.navigate('Main');
      return true;
    };

    const backHadler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction
    );

    return() => backHadler.remove();
  }, [navigation]);

  const [mapRegion, setMapRegion] = useState({
    latitude: -20.1741037,
    longitude: -44.848648,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const [pharmacies, setPharmacies] = useState([]);
  const [errorMsg, setErrorMsg] = useState(null);

  const userLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied", errorMsg);
      return;
    }

    let location = await Location.getCurrentPositionAsync({
      enableHighAccuracy: true,
    });

    setMapRegion({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    });

    console.log(location.coords.latitude, location.coords.longitude);

    fetchNearbyPharmacies(location.coords.latitude, location.coords.longitude);
  };

  const fetchNearbyPharmacies = async (userLatitude, userLongitude) => {
    const radius = 3000;
    const types = "pharmacy"; 
    const key = "AIzaSyDa0mQFntSceo6belgNgxYykH6xrXMpdkY";

    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${userLatitude},${userLongitude}&radius=${radius}&types=${types}&key=${key}`
      );

      const data = await response.json();

      if (data.results) {
        setPharmacies(data.results);
      }
    } catch (error) {
      console.error("Error fetching nearby pharmacies:", error);
    }
  };

  useEffect(() => {
    userLocation();
  }, []);

  return (
    <View style={styles.container}>
      <MapView style={styles.map} region={mapRegion}>
        <Marker
          coordinate={mapRegion}
          title="Sua localização"
          pinColor="#4682B4"
        />
        {pharmacies.map((pharmacy, index) => (
          <Marker
            key={index}
            coordinate={{
              latitude: pharmacy.geometry.location.lat,
              longitude: pharmacy.geometry.location.lng,
            }}
            title={pharmacy.name}
          />
        ))}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});

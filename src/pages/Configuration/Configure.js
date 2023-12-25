import React, { useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, BackHandler } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

export default function Configuration() {
  const navigation = useNavigation();

  const support = () => {
    navigation.navigate("Suporte");
  };

  const init = () => {
    navigation.navigate("Sobre nós");
  };

  useEffect(() => {
    const backAction = () => {
      navigation.navigate('Main');
      return true;
    };

    const backHadler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction
    );

    return () => backHadler.remove();
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={{ height: 60 }} />
      <TouchableOpacity onPress={support}>
        <View style={styles.card}>
          <View style={styles.iconContainer}>
            <MaterialIcons
              name="contact-support"
              size={24}
              color="black"
            />
          </View>
          <Text style={styles.cardText}>Suporte</Text>
          <View style={styles.iconContainer2}>
            <AntDesign
              name="right"
              size={24}
              color="black"
            />
          </View>
        </View>
      </TouchableOpacity>

      <View style={{ height: 20 }} />
      <TouchableOpacity onPress={init}>
        <View style={styles.card}>
          <View style={styles.iconContainer}>
            <Ionicons
              name="people"
              size={24}
              color="black"
            />
          </View>
          <Text style={styles.cardText}>Sobre nós</Text>
          <View style={styles.iconContainer3}>
            <AntDesign
              name="right"
              size={24}
              color="black"
            />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 8,
    width: 360,
    marginLeft: 6,
  },
  iconContainer: {
    marginRight: 16,
  },
  iconContainer1: {
    marginLeft: 200,
  },
  iconContainer2: {
    marginLeft: 213,
  },
  iconContainer3: {
    marginLeft: 199,
  },
  cardText: {
    fontSize: 18,
  },
});

import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

const Configuration = () => {
  const navigation = useNavigation();

  const support = () => {
    navigation.navigate("Suporte");
  };

  const init = () => {
    navigation.navigate("Sobre nós");
  };

  const profiles = () => {
    navigation.navigate('Profiles');
  }

  const feedback = () => {
    navigation.navigate('FeedBack');
  }

  return (
    <View style={styles.container}>
      <View style={styles.text}>
        <Text style={styles.title}>Configuração</Text>
        <Fontisto
          name="player-settings"
          size={24}
          color="black"
          style={styles.icon}
        />
      </View>
      <View style={{ height: 60 }} />
      <TouchableOpacity onPress={profiles}>
        <View style={styles.card}>
          <View style={styles.iconContainer}>
            <FontAwesome
              name="user-circle-o"
              size={24}
              color="black"
            />
          </View>
          <Text style={styles.cardText}>Informações do Usuário</Text>
          <View style={styles.iconContainer4}>
            <AntDesign
              name="right"
              size={24}
              color="black"
            />
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={feedback}>
        <View style={styles.card}>
          <View style={styles.iconContainer}>
            <MaterialIcons
              name="feedback"
              size={24}
              color="black"
            />
          </View>
          <Text style={styles.cardText}>FeedBack</Text>
          <View style={styles.iconContainer5}>
            <AntDesign
              name="right"
              size={24}
              color="black"
            />
          </View>
        </View>
      </TouchableOpacity>

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

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
    paddingTop: '4%',
    paddingHorizontal: 10,
  },
  text: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    top: width * 0.1,
    position: 'relative',
    left: width * 0.04
  },
  title: {
    fontSize: 26,
    fontWeight: '600',
  },
  icon: {
    paddingHorizontal: width * 0.07
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    padding: width * 0.04,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 20,
    width: width * 0.9,
    marginLeft: width * 0.03,
  },
  iconContainer: {
    marginRight: width * 0.04,
  },
  iconContainer1: {
    marginLeft: width * 0.25,
  },
  iconContainer2: {
    marginLeft: width * 0.50,
  },
  iconContainer3: {
    marginLeft: width * 0.46,
  },
  iconContainer4: {
    marginLeft: width * 0.22,
  },
  iconContainer5: {
    marginLeft: width * 0.47,
  },
  cardText: {
    fontSize: width * 0.045,
  },
});

export default Configuration;

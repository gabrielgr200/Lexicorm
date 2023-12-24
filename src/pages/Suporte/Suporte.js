import React, { useState } from "react";
import { View, Button, StyleSheet, Text, TouchableOpacity } from "react-native";
import * as MailComposer from "expo-mail-composer";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCapsules } from "@fortawesome/free-solid-svg-icons";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { Modal } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
import Aplicativo from "./List/List";
import Pesquisas from "./Pesquisas/Pesquisas";
import Remedios from "./Remedios/Remedios";
import Pessoais from "./Pessoais/Pessoais";
import Location from "./Location/Location";

const SupportScreen = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  const sendEmail = () => {
    MailComposer.composeAsync({
      recipients: ["remedioslexicorm@gmail.com"],
      subject: "Suporte ao Cliente",
    }).catch((error) => console.error(error));
  };

  const handleCardPress = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.container}>

      <View style={{ height: 60 }} />

      <TouchableOpacity onPress={() => handleCardPress(Aplicativo)}>
        <View style={styles.card}>
          <View style={styles.iconContainer}>
          <Octicons 
          name="checklist" 
          size={24} 
          color="black" 
          />
          </View>
          <Text style={styles.cardText}>Lista de Medicamentos</Text>
          <View style={styles.iconContainer4}>
            <AntDesign
              name="right"
              size={24}
              color="black"
            />
          </View>
        </View>
      </TouchableOpacity>

      <View style={{ height: 20 }} />

      <TouchableOpacity onPress={() => handleCardPress(Pesquisas)}>
        <View style={styles.card}>
          <View style={styles.iconContainer}>
            <MaterialCommunityIcons
              name="account-search"
              size={24}
              color="black"
            />
          </View>
          <Text style={styles.cardText}>Pesquisas</Text>
          <View style={styles.iconContainer1}>
            <AntDesign
              name="right"
              size={24}
              color="black"
            />
          </View>
        </View>
      </TouchableOpacity>

      <View style={{ height: 20 }} />

      <TouchableOpacity onPress={() => handleCardPress(Remedios)}>
        <View style={styles.card}>
          <View style={styles.iconContainer}>
            <FontAwesomeIcon icon={faCapsules} size={24} color="black" />
          </View>
          <Text style={styles.cardText}>Remédios</Text>
          <View style={styles.iconContainer1}>
            <AntDesign
              name="right"
              size={24}
              color="black"
            />
          </View>
        </View>
      </TouchableOpacity>

      <View style={{ height: 20 }} />

      <TouchableOpacity onPress={() => handleCardPress(Pessoais)}>
        <View style={styles.card}>
          <View style={styles.iconContainer}>
            <Ionicons name="person" size={24} color="black" />
          </View>
          <Text style={styles.cardText}>Dados Pessoais</Text>
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
      
      <TouchableOpacity onPress={() => handleCardPress(Location)}>
        <View style={styles.card}>
          <View style={styles.iconContainer}>
            <Entypo
              name="location"
              size={24}
              color="black"
            />
          </View>
          <Text style={styles.cardText}>Localização das Farmácias</Text>
          <View style={styles.iconContainer3}>
            <AntDesign name="right" size={24} color="black" />
          </View>
        </View>
      </TouchableOpacity>

      <View style={{ height: 20 }} />

      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <View style={styles.contact}>
          <AntDesign name="message1" size={20} color="black" />
          <Text style={styles.text}>Entre em Contato</Text>
        </View>
      </TouchableOpacity>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.content}>
            <Icon
              style={styles.icon}
              name="close"
              size={30}
              color="#4682B4"
              onPress={() => setModalVisible(!modalVisible)}
            />
            <Text style={styles.title}>
              Se você tiver alguma dúvida, sinta-se à vontade para enviar um
              e-mail.
            </Text>
            <View style={styles.circle}>
              <TouchableOpacity onPress={sendEmail}>
                <MaterialIcons name="email" size={24} color="black" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default SupportScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderColor: "#d3d3d3",
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
    marginLeft: 160,
  },
  iconContainer3: {
    marginLeft: 84,
  },
  iconContainer4: {
    marginLeft: 110,
  },
  icon: {
    top: 3,
    right: 170,
    position: 'relative',
  },
  contact: {
    marginTop: 240,
    left: 30,
    position: "absolute",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    width: 300,
    height: 40,
    backgroundColor: "gray",
  },
  text: {
    paddingLeft: 6,
    textAlign: "center",
    color: "black",
  },
  content: {
    justifyContent: "center",
    alignItems: "center",
    height: 140,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 18,
    paddingHorizontal: 50,
    fontWeight: "600",
    bottom: 10
  },
  circle: {
    justifyContent: "center",
    alignItems: "center",
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: "#c3c3c3",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
  cardText: {
    fontSize: 18,
  },
});

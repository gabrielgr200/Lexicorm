import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Platform,
  TextInput,
} from "react-native";
import * as Animatable from "react-native-animatable";
import * as ImagePicker from "expo-image-picker";
import { Feather } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/FontAwesome";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function Login() {
  const navigation = useNavigation();
  const [image, setImage] = useState(null);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (Platform.OS !== "web") {
      const requestPermission = async () => {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Permissão negada para acessar a biblioteca de mídia!");
        }
      };
      requestPermission();
    }

    const loadImageUri = async () => {
      try {
        const storedImageUri = await AsyncStorage.getItem("userImageUri");
        if (storedImageUri) {
          setImage(storedImageUri);
        }
      } catch (error) {
        console.error("Error loading image URI:", error);
      }
    };

    loadImageUri();

    const loadUserData = async () => {
      try {
        const storedToken = await AsyncStorage.getItem("userToken");

        if (storedToken) {
          const response = await fetch("https://api-register.onrender.com/user", {
            method: "GET",
            headers: {
              Authorization: `Bearer ${storedToken}`,
            },
          });

          if (response.ok) {
            const data = await response.json();
            setUserData(data.user);
          } else {
            console.error("Failed to fetch user data");
          }
        }
      } catch (error) {
        console.error("Error loading user data:", error);
      }
    };

    loadUserData();
  }, []);

  const PickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      if (result.assets && result.assets.length > 0) {
        setImage(result.assets[0].uri);
        try {
          await AsyncStorage.setItem("userImageUri", result.assets[0].uri);
        } catch (error) {
          console.error("Error storing image URI:", error);
        }
      }
    }
  };

  const removeAvatar = async () => {
    setImage(null);
    try {
      await AsyncStorage.removeItem("userImageUri");
    } catch (error) {
      console.error("Error removing image URI:", error);
    }
  };

  const handleDeleteAccount = async () => {
    try {
      const storedToken = await AsyncStorage.getItem("userToken");

      if (storedToken) {
        const response = await fetch("https://api-register.onrender.com/user", {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${storedToken}`,
          },
        });

        if (response.ok) {
          await AsyncStorage.removeItem("userToken");
          await AsyncStorage.removeItem("userImageUri");
          navigation.navigate("Login");
        } else {
          console.error("Failed to delete user account");
        }
      }
    } catch (error) {
      console.error("Error deleting user account:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Animatable.View
        animation="fadeInLeft"
        delay={500}
        style={styles.containerHeader}
      >
        <Text style={styles.message}>Suas Informações</Text>
      </Animatable.View>

      <Animatable.View animation="fadeInUp" style={styles.containerForm}>
        <TouchableOpacity style={styles.button} onPress={PickImage}>
          {image || uploadedImage ? (
            <Image
              source={{ uri: image || uploadedImage }}
              style={styles.avatar}
            />
          ) : (
            <>
              <View style={styles.avatar}>
                <Icon name="user" size={50} color="#fff" />
              </View>
            </>
          )}
          <View style={styles.iconContainer}>
            <Feather name="plus" size={20} color="white" />
          </View>
        </TouchableOpacity>

        {image && (
          <TouchableOpacity style={styles.removeButton} onPress={removeAvatar}>
            <MaterialIcons name="delete" size={24} color="white" />
          </TouchableOpacity>
        )}

        {userData && (
          <View style={styles.userInfoContainer}>
            <Text style={styles.userInfoLabel}>ID:</Text>
            <TextInput
              style={styles.userInfoInput}
              placeholder="ID"
              value={userData.id.toString()}
              editable={false}
            />

            <Text style={styles.userInfoLabel}>Nome:</Text>
            <TextInput
              style={styles.userInfoInput}
              placeholder="Nome"
              value={userData.name}
              editable={false}
            />

            <Text style={styles.userInfoLabel}>Email:</Text>
            <TextInput
              style={styles.userInfoInput}
              placeholder="Email"
              value={userData.email}
              editable={false}
            />
          </View>
        )}

        <TouchableOpacity
          style={styles.deleteButton}
          onPress={handleDeleteAccount}
        >
          <Text style={styles.deleteButtonText}>Excluir Conta</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4682B4",
  },
  containerHeader: {
    marginTop: "14%",
    marginBottom: "8%",
    paddingStart: "5%",
  },
  message: {
    fontSize: 28,
    fontWeight: "bold",
    top: 10,
  },
  icon: {
    position: "relative",
    left: 340,
    bottom: 50,
  },
  containerForm: {
    backgroundColor: "#f5f5f5",
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: "5%",
    paddingEnd: "5%",
    paddingTop: "12%",
  },
  title: {
    fontSize: 20,
    marginTop: 28,
  },
  inputLine: {
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 12,
    fontSize: 16,
    paddingHorizontal: "4%",
  },
  button: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#4682B4",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: -70,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
  },
  iconContainer: {
    position: "absolute",
    bottom: 5,
    right: 5,
    backgroundColor: "#4682B4",
    borderRadius: 10,
    padding: 3,
  },
  removeButton: {
    position: "absolute",
    top: 5,
    right: 10,
    backgroundColor: "#ff4500",
    borderRadius: 50,
    padding: 5,
    zIndex: 2,
  },
  userInfoLabel: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: "bold",
  },
  userInfoInput: {
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginBottom: 10,
    fontSize: 16,
    color: "#a2a2a2"
  },
  userInfo: {
    fontSize: 16,
    marginBottom: 10,
  },
  deleteButton: {
    backgroundColor: "#ff4500",
    width: "100%",
    borderRadius: 4,
    paddingVertical: 8,
    marginTop: 14,
    justifyContent: "center",
    alignItems: "center",
  },
  deleteButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});

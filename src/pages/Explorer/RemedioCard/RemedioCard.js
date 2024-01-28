import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SendMedicine({ route }) {
  const { remedio } = route.params || {};
  const [medicineName, setMedicineName] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    if (remedio) {
      setMedicineName(remedio.referencia);
    }
  }, [remedio]);

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleSaveToHome = async () => {
    try {
      const savedMedicineCard = {
        Referencia: remedio.referencia,
        Principio: remedio.principio,
        Comercial: remedio.comercial,
        Registro: remedio.registro,
        Colaterais: remedio.colaterais,
        Decomposto: remedio.decomposto,
        Farmacia: remedio.farmacia,
        Concentracao: remedio.concentracao,
      };

      const existingMedicines = await AsyncStorage.getItem('@saved_medicines');
      let updatedMedicines = existingMedicines ? JSON.parse(existingMedicines) : [];
      updatedMedicines.push(savedMedicineCard);

      await AsyncStorage.setItem('@saved_medicines', JSON.stringify(updatedMedicines));

      navigation.navigate('Home', { savedMedicineCard });
    } catch (error) {
      console.error('Error saving medicine:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Animatable.View animation="fadeInRight" delay={500} style={styles.containerHeader}>
        <TouchableOpacity onPress={handleGoBack}>
          <AntDesign
            name="arrowleft"
            size={30}
            color="black"
          />
        </TouchableOpacity>
        <Text style={styles.message}>{medicineName}</Text>
      </Animatable.View>
      <View />
      <View style={styles.navBar}>
        <View style={styles.card}>
          <View style={styles.favorites}>
            <Text style={styles.title}>Detalhes do medicamento</Text>
            <TouchableOpacity onPress={handleSaveToHome}>
              <MaterialIcons
                name="favorite"
                size={24}
                color="red"
              />
            </TouchableOpacity>
          </View>

          <View style={styles.detailItem}>
            <Text style={styles.label}>Princípio:</Text>
            <Text style={styles.info}>{remedio.principio}</Text>
          </View>

          <View style={styles.detailItem}>
            <Text style={styles.label}>Comercial:</Text>
            <Text style={styles.info}>{remedio.comercial}</Text>
          </View>

          <View style={styles.detailItem}>
            <Text style={styles.label}>Registro:</Text>
            <Text style={styles.info}>{remedio.registro}</Text>
          </View>

          <View style={styles.detailItem}>
            <Text style={styles.label}>Colaterais:</Text>
            <Text style={styles.info}>{remedio.colaterais}</Text>
          </View>

          <View style={styles.detailItem}>
            <Text style={styles.label}>Decomposto:</Text>
            <Text style={styles.info}>{remedio.decomposto}</Text>
          </View>

          <View style={styles.detailItem}>
            <Text style={styles.label}>Farmácia:</Text>
            <Text style={styles.info}>{remedio.farmacia}</Text>
          </View>

          <View style={styles.detailItem}>
            <Text style={styles.label}>Concentração:</Text>
            <Text style={styles.info}>{remedio.concentracao}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4682B4',
  },
  containerHeader: {
    marginTop: '14%',
    marginBottom: '8%',
    paddingStart: '5%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20
  },
  message: {
    fontSize: 24,
    fontWeight: '400',
    textTransform: 'uppercase'
  },
  navBar: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#f8f8ff',
    marginBottom: 20,
    borderRadius: 10,
    padding: 16,
    width: '90%',
    maxWidth: 400,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.6,
    shadowRadius: 6,
  },
  favorites: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  detailItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
  },
  info: {
    fontSize: 16,
    flex: 2,
    marginLeft: 8,
  },
});


import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function MedicineDetailsScreen({ route }) {
  const { medicineData } = route.params;
  const [medicineName, setMedicineName] = useState('Nome do usuário');
  const navigation = useNavigation();

  useEffect(() => {
    if (medicineData) {
      setMedicineName(medicineData.Referencia);
    }
  }, [medicineData]);

  const handleGoBack = () => {
    navigation.navigate('Home', { savedMedicineCard: medicineData });
  };

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Animatable.View animation="fadeInRight" delay={500} style={styles.containerHeader}>
        <TouchableOpacity onPress={handleBack}>
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
            <Text style={styles.title}>Detalhes dos medicamentos</Text>
            <TouchableOpacity onPress={handleGoBack}>
              <MaterialIcons
                name="favorite"
                size={24}
                color="red"
              />
            </TouchableOpacity>
          </View>
          {medicineData && (
            <View>
              <View style={styles.detailItem}>
                <Text style={styles.label}>Princípio:</Text>
                <Text style={styles.info}>{medicineData.Principio}</Text>
              </View>

              <View style={styles.detailItem}>
                <Text style={styles.label}>Comercial:</Text>
                <Text style={styles.info}>{medicineData.Comercial}</Text>
              </View>

              <View style={styles.detailItem}>
                <Text style={styles.label}>Registro:</Text>
                <Text style={styles.info}>{medicineData.Registro}</Text>
              </View>

              <View style={styles.detailItem}>
                <Text style={styles.label}>Colaterais:</Text>
                <Text style={styles.info}>{medicineData.Colaterais}</Text>
              </View>

              <View style={styles.detailItem}>
                <Text style={styles.label}>Decomposto:</Text>
                <Text style={styles.info}>{medicineData.Decomposto}</Text>
              </View>

              <View style={styles.detailItem}>
                <Text style={styles.label}>Farmácia:</Text>
                <Text style={styles.info}>{medicineData.Farmacia}</Text>
              </View>

              <View style={styles.detailItem}>
                <Text style={styles.label}>Concentracão:</Text>
                <Text style={styles.info}>{medicineData.Concentracao}</Text>
              </View>
            </View>
          )}
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8aaee0',
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
  button: {
    backgroundColor: '#4682B4',
    paddingTop: 10,
    paddingBottom: 10,
    padding: 8,
    borderRadius: 20
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold'
  }
});

import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

export default function Balance() {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');
  const [medicineData, setMedicineData] = useState(null);

  const handleSearch = () => {
    if (searchQuery.trim() === '') {
      Alert.alert('Campo vazio', 'Digite o nome de um remédio para pesquisar.');
      return;
    }
  
    const apiUrl = `https://api-remedios.onrender.com/remedios/search?nome=${searchQuery}`;
  
    axios
      .get(apiUrl)
      .then((response) => {
        const data = response.data;
        if (data.length > 0) {
          setMedicineData(data[0]);
          navigation.navigate('MedicineDetailsScreen', { medicineData: data[0] });
        } else {
          setMedicineData(null);
          Alert.alert('Remédio não encontrado', 'O remédio pesquisado não foi encontrado.');
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        Alert.alert('Erro', 'Ocorreu um erro ao buscar os dados do remédio.');
      });
  };

  return (
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="Pesquisar remédios"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.7}
          onPress={handleSearch}
        >
          <Text style={styles.buttonText}>Pesquisar</Text>
        </TouchableOpacity>
      </View>
  );
}



const styles = StyleSheet.create({
  searchContainer: {
    width: 340,
    left: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 30,
    marginBottom: 30,
    bottom: 6,
  },
  input: {
    flex: 1,
    marginRight: 8,
    height: 40,
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 30,
    paddingHorizontal: 8,
    
  },
  button: {
    backgroundColor: '#4682B4', 
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff', 
  },
});

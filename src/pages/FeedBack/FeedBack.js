import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions, TextInput, TouchableOpacity, Alert } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const FeedBack = () => {
  const [text, setText] = useState('');
  const [rating, setRating] = useState(0);
  const [accessToken, setAccessToken] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    const getAccessToken = async () => {
      try {
        const token = await AsyncStorage.getItem('userToken');
        setAccessToken(token);
      } catch (error) {
        console.error('Erro ao obter token do AsyncStorage:', error);
      }
    };

    getAccessToken();
  }, []); 

  const handleStartPress = (selectedRating) => {
    setRating(selectedRating);
  };

  const handleSendFeedback = async () => {
    try {
      if (rating === 0) {
        Alert.alert('Erro', 'Por favor, selecione uma avaliação antes de enviar.', [{ text: 'OK' }]);
        return;
      }

      const response = await axios.post(
        'https://api-register-9fa2157bd094.herokuapp.com/feedbacks',
        {
          feedback: text,
          stars: rating,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (response.status === 200) {
        console.log('Feedback enviado com sucesso:', response.data);
        setText('');
        setRating(0);
        Alert.alert('Sucesso', 'Feedback enviado com sucesso!', [
          {
            text: 'OK',
            onPress: () => navigation.replace('Main'),
          },
        ]);
      } else {
        console.error('Erro ao enviar feedback. Resposta inesperada do servidor:', response.status);
        Alert.alert('Erro', `Erro inesperado do servidor. Status: ${response.status}`, [{ text: 'OK' }]);
      }

    } catch (error) {
      console.error('Erro ao configurar a requisição:', error.message);
    }
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <TouchableOpacity
          key={i}
          onPress={() => handleStartPress(i)}
        >
          <AntDesign
            name={i <= rating ? 'star' : 'staro'}
            size={34}
            color="#4682B4"
          />
        </TouchableOpacity>
      );
    }
    return stars;
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>O que você achou da Lexicorm?</Text>
        <Text style={styles.subTitle}>Escolha de 1 a 5 estrelas para classificar</Text>
        <View style={styles.star}>
          {renderStars()}
        </View>

        <View style={styles.comments}>
          <FontAwesome name="commenting" size={30} color="#4682B4" />
          <Text style={styles.comment}>Deixar comentário</Text>
        </View>
        <View style={styles.input}>
          <TextInput
            style={styles.textInput}
            multiline
            numberOfLines={14}
            onChangeText={setText}
            value={text}
            textAlignVertical='top'
            placeholder='Escreva o seu comentário aqui 😊. (Opcional)'
          />
        </View>

        <View style={styles.send}>
          <TouchableOpacity style={styles.button} onPress={handleSendFeedback}>
            <Text style={styles.textButton}>Enviar comentário</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    justifyContent: 'space-between',
  },
  content: {
    top: width * 0.2,
  },
  title: {
    fontSize: 24,
    fontWeight: '600'
  },
  subTitle: {
    fontSize: 16,
    color: '#333',
    fontWeight: '400',
    paddingBottom: '6%'
  },
  star: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: '20%'
  },
  comments: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingBottom: '4%'
  },
  comment: {
    fontSize: 22,
    fontWeight: '500'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8
  },
  send: {
    justifyContent: 'center',
    alignItems: 'center',
    top: width * 0.1,
  },
  button: {
    alignItems: 'center',
    width: '100%',
    padding: 10,
    borderRadius: 16,
    backgroundColor: '#4682B4',
  },
  textButton: {
    fontSize: 18,
    fontWeight: '500',
    color: '#fff'
  }
});

export default FeedBack;

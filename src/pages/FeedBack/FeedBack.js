import { StyleSheet, Text, View, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import React, { useState } from 'react'

const FeedBack = () => {
  const [text, setText] = useState('');
  const [rating, setRating] = useState(0);

  const handleStartPress = (selectedRating) => {
    setRating(selectedRating);
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
            onChange={setText}
            value={text}
            textAlignVertical='top'
            placeholder='Escreva o seu comentário aqui &#128521;. (Opcional)'
          />
        </View>

        <View style={styles.send}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.textButton}>Enviar comentário</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const { width } = Dimensions.get('window');

export default FeedBack

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
    gap: 4,
    flexDirection: 'row',
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
    top: width * 0.496,
  },
  button: {
    alignItems: 'center',
    width: '100%',
    padding: 10,
    backgroundColor: '#4682B4',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  textButton: {
    fontSize: 18,
    fontWeight: '500'
  }
});

{/* <AntDesign name="star" size={24} color="black" /> */ }
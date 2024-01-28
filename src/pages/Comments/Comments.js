import React, { useState, useEffect } from 'react';
import { Dimensions, StyleSheet, Text, View, BackHandler } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const Comments = () => {
  const navigation = useNavigation();
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    const getFeedbacks = async () => {
      try {
        const response = await axios.get('https://api-register-9fa2157bd094.herokuapp.com/feedbacks');
        setFeedbacks(response.data.feedbacks);
      } catch (error) {
        console.error('Erro ao obter feedbacks:', error.message);
      }
    };

    getFeedbacks();
  }, []);

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
      <View style={styles.content}>
        <Text style={styles.title}>Comentários</Text>
      </View>
      <View style={styles.cards}>
        {feedbacks.map((feedback, index) => (
          <View key={index} style={styles.card}>
            <View style={styles.texts}>
              <View style={styles.username}>
                <Text style={styles.name}>{feedback.cadastro.name}</Text>
                <View style={styles.stars}>
                  {Array.from({ length: feedback.stars }).map((_, i) => (
                    <FontAwesome key={i} name="star" size={16} color="#4682B4" />
                  ))}
                </View>
              </View>
              <View style={styles.comments}>
                <Text>{feedback.feedback}</Text>
              </View>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Comments;

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 32
  },
  content: {
    top: width * .1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 24
  },
  cards: {
    top: width * .2,
  },
  card: {
    backgroundColor: "#f8f8ff",
    gap: 10,
    padding: 20,
    borderRadius: 18,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5,
  },
  username: {
    gap: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  name: {
    fontSize: 16,
    fontWeight: '600'
  },
  stars: {
    gap: 8,
    flexDirection: 'row'
  },
  comments: {
    paddingTop: '6%'
  }
});

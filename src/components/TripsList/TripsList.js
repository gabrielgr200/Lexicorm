import React from 'react';
import { Image, View, StyleSheet, TouchableOpacity, Text, ScrollView } from 'react-native';
import { colors, shadow, sizes, spacing } from '../../constants/theme';
import { useNavigation } from '@react-navigation/native';
import { Foundation } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const CARD_WIDTH = sizes.width / 3 - (spacing.l + spacing.l / 3);
const CARD_HEIGHT = 110;


const TripsList = () => {
  const navigation = useNavigation();

  const farma = () => {
    navigation.navigate('Screen')
  }
  const config = () => {
    navigation.navigate('Config')
  }

  const sugest = () => {
    navigation.navigate('Sugesplash')
  }

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        <TouchableOpacity style={styles.cardContainer} onPress={farma}>
          <View style={[styles.card, shadow.light]}>
            <View style={styles.imageBox}>
              <Image style={styles.image} source={require('../../../assets/images/farma.png')} />
            </View>
            <View style={styles.footer}>
              <View style={styles.titleBox}>
                <Text style={styles.title}>Farmácias</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cardContainer} onPress={sugest}>
          <View style={[styles.card, shadow.light]}>
            <View style={styles.imageBox}>
              <Foundation
                name="clipboard-pencil"
                size={40}
                color="black"
                style={styles.icon1}
              />
            </View>
            <View style={styles.footer}>
              <View style={styles.titleBox}>
                <Text style={styles.title}>Sugestão</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cardContainer} onPress={config}>
          <View style={[styles.card, shadow.light]}>
            <View style={styles.imageBox}>
              <Ionicons
                name="settings"
                size={40}
                color="black"
                style={styles.icon2}
              />
            </View>
            <View style={styles.footer}>
              <View style={styles.titleBox}>
                <Text style={styles.title}>Configuração</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>

      </ScrollView>
    </View >
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  cardContainer: {
    marginLeft: spacing.l,
    marginBottom: spacing.l,
  },
  card: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    backgroundColor: '#f8f8ff',
    borderRadius: sizes.radius,
  },
  imageBox: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT - 60,
    borderTopLeftRadius: sizes.radius,
    borderTopRightRadius: sizes.radius,
    overflow: 'hidden',
  },
  icon1: {
    top: 10,
    left: 36
  },
  icon2: {
    top: 10,
    left: 30
  },
  image: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT - 50,
    resizeMode: 'cover',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    height: 56,
    borderBottomLeftRadius: sizes.radius,
    borderBottomRightRadius: sizes.radius,
    backgroundColor: colors.white,
  },
  titleBox: {
    flex: 1,
  },
  title: {
    bottom: 2,
    marginVertical: 4,
    fontSize: sizes.body,
    fontWeight: 'bold',
    color: colors.primary,
    textAlign: 'center'
  },
});

export default TripsList;

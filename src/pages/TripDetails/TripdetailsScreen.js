import { View, StyleSheet, Image, Text, TouchableOpacity, Linking } from 'react-native';

export default function TripDetails({ navigation, route }) {
  const { trip } = route.params;

  const handleLinkPress = () => {
    if (trip.link) {
      Linking.openURL(trip.link);
    }
  };


  const handleEmailPress = () => {
    if (trip.email) {
      Linking.openURL(`mailto:${trip.email}`);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageBox}>
        <Image source={trip.image} style={[StyleSheet.absoluteFillObject, styles.img]} />

        <View style={styles.card}>
          <Text style={styles.title}>{trip.title}</Text>
          <Text style={styles.description}>{trip.description}</Text>
          {trip.link && (
            <TouchableOpacity style={styles.button} onPress={handleLinkPress}>
              <Text style={styles.link}>{trip.location}</Text>
            </TouchableOpacity>
          )}
          {trip.email && (
            <TouchableOpacity style={styles.button} onPress={handleEmailPress}>
              <Text style={styles.link}>{trip.subtitle}</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBox: {
    flex: 1,
    position: 'relative',
  },
  card: {
    position: 'absolute',
    top: '36%',
    left: 20,
    right: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 15,
    borderRadius: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 18,
    marginBottom: 10,
    letterSpacing: 0.6
  },
  button: {
    backgroundColor: '#638ecb',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20
  },
  link: {
    fontSize: 18,
    textTransform: 'uppercase',
    fontWeight: '500',
  },
});

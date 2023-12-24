import { View, StyleSheet } from 'react-native';
import LottieView from "lottie-react-native";
import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';

export default function Splash() {
  const navigation = useNavigation();


  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Login');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={[styles.container, { backgroundColor: 'seagreen' }]}>
      <LottieView
        source={require("../../../json/verificado.json")}
        autoPlay
        loop={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
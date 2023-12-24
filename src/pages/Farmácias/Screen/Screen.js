import { View, StyleSheet } from 'react-native';
import LottieView from "lottie-react-native";
import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';

export default function Screen() {
  const navigation = useNavigation();


  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Farmácias');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={[styles.container, { backgroundColor: '#f5f5f5' }]}>
      <LottieView
        source={require("../../../json/location.json")}
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
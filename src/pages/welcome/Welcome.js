import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import LottieView from "lottie-react-native";
import { useNavigation } from '@react-navigation/native';

export default function Welcome() {
    const navigation = useNavigation();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.replace('Main');
        }, 3000);

        return () => clearTimeout(timer);
    }, [navigation]);

    return (
        <View style={[styles.container, { backgroundColor: '#f5f5f5' }]}>
            <LottieView
                source={require("../../json/loading.json")}
                autoPlay
                loop
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#f5f5f5"
    }
});
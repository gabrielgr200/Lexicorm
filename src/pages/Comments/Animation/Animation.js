import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import LottieView from "lottie-react-native";
import { useNavigation } from '@react-navigation/native';

export default function Animation() {
    const navigation = useNavigation();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.replace('Comments');
        }, 3400);
    }, [navigation]);

    return (
        <View style={styles.container}>
            <LottieView
                source={require("../../../json/comment.json")}
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
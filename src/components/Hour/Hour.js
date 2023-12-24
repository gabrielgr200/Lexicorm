import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Hour() {
    const [horaAtual, setHoraAtual] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setHoraAtual(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.textHora}> 
                {horaAtual.toLocaleTimeString()}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    textHora: {
        bottom: 4,
        fontSize: 16
    }
});
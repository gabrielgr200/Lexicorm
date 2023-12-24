import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Data() {
    const [dataAtual, setDataAtual] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setDataAtual(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.textHora}>
                {dataAtual.toLocaleDateString()}
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
        left: 6,
        fontSize: 16
    }
});
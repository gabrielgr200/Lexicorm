import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function Location() {
    return (
        <View style={styles.container}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.content}
            >
                <Text style={styles.title}>
                    Localização das farmácias
                </Text>

                <Text style={styles.text}>
                    Ao acessar a tela de localização, por favor, ative a função de localização
                    em seu celular para visualizar as farmácias mais próximas de você.
                    {'\n'}
                    {'\n'}
                    Se as farmácias mais próximas de você não aparecerem, tente sair da tela e retornar.
                    Se mesmo assim o problema persistir, entre em contato conosco.
                </Text>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold'
    },
    text: {
        fontSize: 18,
        marginVertical: 22
    },
    content: {
        paddingTop: 60
    },
});
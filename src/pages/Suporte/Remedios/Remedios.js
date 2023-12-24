import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function Remedios() {
    return (
        <View style={styles.container}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.content}
            >
                <Text style={styles.title}>
                    Informações sobre os remédios
                </Text>

                <Text style={styles.text}>
                Nossas informações sobre medicamentos são limitadas no momento. No entanto, não se preocupe! 
                Caso você queira adicionar um medicamento ao nosso banco de dados, basta 
                acessar a aba de sugestões. Fique à vontade para escrever os nomes dos remédios 
                que deseja incluir. Agradecemos pela sua contribuição!
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
    }
});
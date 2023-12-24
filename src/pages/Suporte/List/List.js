import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

export default function Lista() {
    return (
        <View style={styles.container}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.content}
            >
                <Text style={styles.title}>
                    Lista de medicamentos
                </Text>

                <Text style={styles.text}>
                    Esta lista de medicamentos tem o propósito de exibir quais medicamentos estão disponíveis.
                    {'\n'}
                    Ela é facilmente visível abaixo da barra de pesquisa.
                    {'\n'}
                    {'\n'}
                    Para visualizar os medicamentos disponíveis, basta selecionar uma letra.
                    Serão exibidos os medicamentos registrados no banco de dados cujos nomes começam com essa letra.
                    {'\n'}
                    {'\n'}
                    Atualmente, a lista abrange medicamentos desde a letra A até a letra T.
                </Text>

                <View style={{height: 2}}/>

                <View style={styles.img}>
                    <Image
                        style={styles.image}
                        source={require('../../../img/lista.jpg')}
                    />
                </View>

                <View style={{height: 10}}/>
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
    img: {
        flex: 1,
        alignItems: 'center'
    },
    image: {
        height: 510,
        width: 300,
        borderRadius: 10,
    }
});
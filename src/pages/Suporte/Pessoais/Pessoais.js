import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

export default function Pessoais() {
    return (
        <View style={styles.container}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.content}
            >
                <Text style={styles.title}>
                    Dados Pessoais
                </Text>

                <Text style={styles.text}>
                    Para visualizar seus dados, basta clicar no ícone marcado como 'Usuário',
                    e suas informações serão exibidas.
                    {'\n'}
                    {'\n'}
                    Caso deseje excluir sua conta, clique no botão 'Excluir Conta',
                    e seu registro será removido do banco de dados.
                    {'\n'}
                    {'\n'}
                    Se desejar adicionar uma foto de perfil, basta clicar na imagem de pessoa e
                    você será direcionado para uma tela onde estarão suas fotos.
                    {'\n'}
                    {'\n'}
                    Se estiver enfrentando dificuldades durante o processo de registro ou exclusão,
                    ou se houver problemas com suas informações, por favor, entre em contato
                    conosco para assistência.
                </Text>

                <View style={{ height: 2 }} />

                <View style={styles.img}>
                    <Image
                        style={styles.image}
                        source={require('../../../img/dados.jpg')}
                    />
                </View>

                <View style={{ height: 10 }} />
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
        height: 620,
        width: 300,
        borderRadius: 10,
    }
});
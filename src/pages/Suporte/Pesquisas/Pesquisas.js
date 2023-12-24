import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function Pesquisas() {
    return (
        <View style={styles.container}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.content}
            >
                <Text style={styles.title}>
                    Pesquisas sobre os remédios
                </Text>

                <Text style={styles.text}>
                    A barra de pesquisa está localizada na parte superior da tela 'Explorer' para facilitar a busca.
                    {'\n'}
                    {'\n'}
                    As pesquisas são simples: basta inserir o nome ou referência do medicamento.
                    As informações correspondentes serão exibidas na tela. Se a mensagem 'Remédio não encontrado' aparecer, 
                    significa que o medicamento procurado não está registrado em nosso banco de dados.
                    {'\n'}
                    {'\n'}
                    Ao clicar no botão 'Pesquisar', você será direcionado para uma tela contendo as informações
                    detalhadas do medicamento pesquisado. Para salvar essas informações e tornar o processo
                    mais conveniente, basta clicar no botão 'Salvar na tela principal'. Dessa forma,
                    os dados do medicamento escolhido serão armazenados para fácil acesso.
                    {'\n'}
                    {'\n'}
                    Para remover as informações dos medicamentos da tela principal,
                    basta clicar no ícone 'X'. E será removido.
                    O processo de salvar é o mesmo explicado anteriormente.
                    {'\n'}
                    {'\n'}
                    Não há um limite para salvar as informações dos medicamentos,
                    portanto, você pode armazenar quantos desejar.
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
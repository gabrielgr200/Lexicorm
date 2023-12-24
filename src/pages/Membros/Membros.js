import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";

function Membros() {
  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <Text style={styles.title}>
          Informações sobre a Lexicorm e o time de desenvolvimento
        </Text>

        <Text style={styles.text}>
          O aplicativo Lexicorm foi desenvolvido com o objetivo de simplificar a busca por informações sobre medicamentos,
          tornando-a mais prática e acessível para usuários de diferentes níveis de conhecimento técnico.
          Além disso, implementamos uma funcionalidade que permite identificar as farmácias mais próximas de você,
          proporcionando uma experiência completa e conveniente.
          {'\n'}
          {'\n'}
          A Lexicorm oferece uma interface amigável que permite aos usuários acessarem rapidamente informações detalhadas
          sobre diversos medicamentos. Seja procurando por nomes comerciais, princípios ativos ou referências específicas,
          o aplicativo proporciona resultados precisos de maneira ágil.
          {'\n'}
          {'\n'}
          Também adicionamos a opção de você compartilhar sua opinião sobre o aplicativo.
          Caso não encontre o medicamento desejado, implementamos uma funcionalidade que permite que você sugira
          qual medicamento gostaria de ver. A sua contribuição é valiosa para
          melhorarmos constantemente o nosso serviço.
        </Text>

        <Text style={styles.app}>
          Time de desenvolvimento
        </Text>

        <Text style={styles.text}>
          Sobre a equipe de desenvolvimento, somos apenas três pessoas. Uma delas é responsável pelo back-end,
          outra pelo banco de dados, e a terceira pelo front-end. Esforçamo-nos para tornar o aplicativo visualmente atraente,
          escolhendo cores que não sejam muito agressivas.
          {'\n'}
          {'\n'}
          <Text style={styles.person}>
            Fellipe - Back End:
          </Text>
          {'\n'}
          {'\n'}
          Fellipe é o Back End, ele ficou responsável por fornecer os exemplos de código e desenvolver a lógica do servidor.
          {'\n'}
          {'\n'}

          <Text style={styles.person}>
            Pablo - Banco de Dados:
          </Text>
          {'\n'}
          {'\n'}
          Pablo é o Banco de Dados, ele ficou encarregado de criar e gerenciar o banco de dados que armazena
          todas as informações sobre os medicamentos.
          {'\n'}
          {'\n'}

          <Text style={styles.person}>
            Gabriel - Full Stack
          </Text>
          {'\n'}
          {'\n'}
          Gabriel é o membro Full Stack da equipe, desempenhando um papel essencial tanto no 
          desenvolvimento do Front End quanto do Back End do aplicativo.
        </Text>

        <Text style={styles.app}>
          Por que criar o aplicativo?
        </Text>

        <Text style={styles.text}>
          A ideia de criar o aplicativo surgiu durante a realização do projeto integrador no Senac Minas.
          O objetivo principal desse projeto era não apenas aprender programação, mas também demonstrar as habilidades
          desenvolvidas aos demais estudantes da instituição. Inicialmente, o aplicativo tinha a intenção de ser um projeto
          simples, criado com o propósito de exibir as nossas capacidades para a comunidade acadêmica.
        </Text>
      </ScrollView>
    </View>
  );
}

export default Membros;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 32
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
  },
  app: {
    fontSize: 26,
    fontWeight: 'bold'
  },
  person: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  text: {
    fontSize: 18,
    marginVertical: 22,
  },
  content: {
    paddingTop: 60,
  },
});

import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Linking, BackHandler } from 'react-native';

export default function Sugestao() {
  const navigation = useNavigation();
  const [sugestao, setSugestao] = useState('');

  const enviarEmail = () => {
    const destinatario = 'suggestionlexicorm@gmail.com';
    const assunto = 'Sugestão do App';
    const corpo = `Sua sugestão: ${sugestao}`;

    const url = `mailto:${destinatario}?subject=${assunto}&body=${corpo}`;

    Linking.openURL(url)
      .then(() => console.log('Email enviado!'))
      .catch((err) => console.error('Erro ao enviar o email', err));
  }

  useEffect(() => {
    const backAction = () => {
      navigation.navigate('Main');
      return true;
    };

    const backHadler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction
    );

    return () => backHadler.remove();
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>
          Adicionar um medicamento
        </Text>
        <Text style={styles.text}>
        Se quiser adicionar um medicamento específico, basta escrever 
        abaixo e enviar para o nosso e-mail.
        </Text>

          <View style={styles.InforContainer}>
            <Text style={styles.Label}>
              Deixe sua sugestão de medicamento:
            </Text>
            <TextInput
              style={styles.InfoInputComment}
              value={sugestao}
              onChangeText={setSugestao}
            />
          </View>

        <TouchableOpacity style={styles.button} onPress={enviarEmail}>
          <Text style={styles.textButton}>Enviar sugestão</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
   container: {
    flex: 1,
    paddingHorizontal: 32,
    justifyContent: 'center',
    alignItems: 'center'
  },
  content: {
    backgroundColor: '#f8f8ff',
    paddingHorizontal: 32,
    borderRadius: 30,
    paddingTop: 40,
    elevation: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 6,
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold'
  },
  text: {
    fontSize: 18,
    marginVertical: 22
  },
  Label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: 'bold'
  },
  InfoInputComment: {
    height: 60,
    backgroundColor: "#fff",
    paddingHorizontal: 15,
    borderRadius: 10,
    fontSize: 16,
    color: "#000"
  },
  button: {
    marginTop: 20,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 6,
    paddingVertical: 6,
    backgroundColor: "#4682B4",
    marginBottom: 20
  },
  textButton: {
    fontSize: 18,
    fontWeight: 'bold'
  }

});
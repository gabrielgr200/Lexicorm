import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Modal, Pressable } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

export default function Cadastro() {
  const navigation = useNavigation();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [isErrorModalVisible, setIsErrorModalVisible] = useState(false);

  function openErrorModal(errorMessage) {
    setError(errorMessage);
    setIsErrorModalVisible(true);
  }

  async function cadastrar() {
    try {
      if (!name || !email || !password) {
        openErrorModal('Por favor preencha todos os campos.');
        return;
      }
      if (password.length < 6) {
        openErrorModal('A senha deve ter no mínimo 6 caracteres.');
        return;
      }

      const response = await axios.post('https://api-register.onrender.com/register', {
        name: name,
        email: email,
        password: password.trim(),
      });

      console.log(response.data);

      navigation.navigate('Splash');
    } catch (error) {
      console.error('Erro ao cadastrar:', error.message);
      if (error.response && error.response.data && error.response.data.mensagem) {
        openErrorModal(error.response.data.mensagem);
      } else {
        openErrorModal('Erro desconhecido ao cadastrar. Por favor, tente novamente.');
      }
    }
  }

  return (
    <View style={styles.container}>
      <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
        <Text style={styles.message}>Faça o seu Cadastro</Text>
      </Animatable.View>

      <Animatable.View animation="fadeInUp" style={styles.containerForm}>
        <Text style={styles.title}>Nome</Text>
        <TextInput
          placeholder="Digite um nome de usuário"
          style={styles.input}
          value={name}
          onChangeText={setName}
          required
        />
        <Text style={styles.title}>Email</Text>
        <TextInput
          placeholder="Digite seu email"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          required
        />
        <Text style={styles.title}>Senha</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            placeholder="Digite uma senha"
            style={styles.input}
            secureTextEntry={!passwordVisible}
            value={password}
            onChangeText={setPassword}
            required
          />

          <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
            <Feather name={passwordVisible ? 'eye-off' : 'eye'} size={24} color="black" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.button} onPress={cadastrar}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>

        <Modal
          animationType="slide"
          transparent={true}
          visible={isErrorModalVisible}
        >
          <View style={styles.errorModalContainer}>
            <View style={styles.errorBox}>
              <Text style={styles.errorModalText}>{error}</Text>
              <Pressable onPress={() => setIsErrorModalVisible(false)}>
                <Text style={styles.closeModalText}>Fechar</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4682B4',
  },
  containerHeader: {
    marginTop: '14%',
    marginBottom: '8%',
    paddingStart: '5%',
  },
  message: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  containerForm: {
    backgroundColor: '#fff',
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%',
  },
  title: {
    fontSize: 20,
    marginTop: 28,
  },
  input: {
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 12,
    fontSize: 16,
    paddingHorizontal: '3%',
  },
  button: {
    backgroundColor: '#4682B4',
    width: '100%',
    borderRadius: 4,
    paddingVertical: 8,
    marginTop: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  errorModalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  errorBox: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  errorModalText: {
    fontSize: 16,
    color: '#000',
  },
  closeModalText: {
    marginTop: 10,
    fontSize: 16,
    color: '#4682B4',
  },
});

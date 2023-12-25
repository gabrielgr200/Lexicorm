import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Modal, Pressable } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Feather } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

export default function SignIn() {
  const navigation = useNavigation();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [isErrorModalVisible, setIsErrorModalVisible] = useState(false);

  useEffect(() => {
    checkAutoLogin();
  }, []);

  const checkAutoLogin = async () => {
    try {
      const storedToken = await AsyncStorage.getItem('userToken');

      if (storedToken) {
        navigation.navigate('Main');
      }
    } catch (error) {
      console.error('Error checking auto login:', error);
    }
  };

  const handleSignIn = async () => {
    const trimmedName = name.trim();
    const trimmedPassword = password.trim();

    if (!trimmedName || !trimmedPassword) {
      openErrorModal('Por favor preencha todos os campos.');
      return;
    }

    try {
      const response = await fetch('https://api-register.onrender.com/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ identifier: trimmedName, password: trimmedPassword }),
      });

      const data = await response.json();

      if (response.ok) {
        const token = data.token;
        await AsyncStorage.setItem('userToken', token);
        navigation.navigate('Main');
      } else {
        openErrorModal(data.mensagem);
      }
    } catch (error) {
      console.error('Error during login:', error);
      if (error instanceof TokenExpiredError) {
        openErrorModal('O token expirou. Faça o login novamente.');
        navigation.navigate('SignIn');
      } else {
        openErrorModal('Erro ao processar a solicitação.');
      }
    }
  };

  function openErrorModal(errorMessage) {
    setError(errorMessage);
    setIsErrorModalVisible(true);
  }

  function closeErrorModal() {
    setIsErrorModalVisible(false);
  }

  return (
    <View style={styles.container}>
      <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
        <Text style={styles.message}>Faça o seu login</Text>
      </Animatable.View>

      <Animatable.View animation="fadeInUp" style={styles.containerForm}>
        <Text style={styles.title}>Nome ou email</Text>
        <TextInput
          placeholder="Digite seu nome ou email"
          style={styles.input}
          value={name}
          onChangeText={setName}
          required
        />
        <Text style={styles.title}>Senha</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            placeholder="Digite sua senha"
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

        <TouchableOpacity style={styles.button} onPress={handleSignIn}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonRegister} onPress={() => navigation.navigate('Cadastro')} >
          <Text style={styles.registerText}>Não possui uma conta? Cadastre-se</Text>
        </TouchableOpacity>
      </Animatable.View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={isErrorModalVisible}
      >
        <View style={styles.errorModalContainer}>
          <View style={styles.errorBox}>
            <Text style={styles.errorModalText}>{error}</Text>
            <Pressable onPress={closeErrorModal}>
              <Text style={styles.closeModalText}>Fechar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
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
  buttonRegister: {
    marginTop: 14,
    alignSelf: 'center',
  },
  registerText: {
    color: '#a1a1a1',
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

import React, { useState, useEffect, useRef } from 'react';
import {
  View, Text, TextInput, TouchableOpacity, Alert,
  Keyboard, Animated, Easing
} from 'react-native';
import { AntDesign, Feather, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { correoStyle as styles } from './style/correoStyle';

export default function Correo() {
  const navigation = useNavigation();
  const translateY = useRef(new Animated.Value(0)).current;

  const [correo, setCorreo] = useState('');
  const [usuario, setUsuario] = useState('');
  const [contraseña, setContraseña] = useState('');

  useEffect(() => {
    const showSub = Keyboard.addListener('keyboardDidShow', () => {
      Animated.timing(translateY, {
        toValue: -250, 
        duration: 300,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true
      }).start();
    });

    const hideSub = Keyboard.addListener('keyboardDidHide', () => {
      Animated.timing(translateY, {
        toValue: 0,
        duration: 300,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true
      }).start();
    });

    return () => {
      showSub.remove();
      hideSub.remove();
    };
  }, []);

  const handleClose = () => {
    navigation.goBack();
  };

  const handleRegistro = async () => {
    if (!correo || !usuario || !contraseña) {
      Alert.alert('OIGA', 'Por favor completa todos los campos mi bro.');
      return;
    }

    try {
      const response = await fetch('http://192.168.20.241:3000/api/users/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nombre: usuario,
          correo: correo,
          contraseña: contraseña
        })
      });

      const data = await response.json();

      if (response.ok) {
        Alert.alert('Registro exitoso', data.message);
        navigation.navigate('home');
      } else {
        Alert.alert('Error', data.error || 'No se pudo registrar');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Error al conectar con el servidor');
    }
  };

  return (
    <SafeAreaView style={styles.outerContainer}>
      <TouchableOpacity
        style={styles.background}
        activeOpacity={1}
        onPress={handleClose}
      />

      <Animated.View
        style={[
          styles.container,
          { transform: [{ translateY }] }
        ]}
      >
        <TouchableOpacity style={styles.closeBtn} onPress={handleClose}>
          <AntDesign name="close" size={24} color="#333" />
        </TouchableOpacity>

        <Text style={styles.title}>¡Comencemos!</Text>

        <View style={styles.inputContainer}>
          <Feather name="mail" size={20} color="#333" />
          <TextInput
            placeholder='Correo'
            style={styles.input}
            value={correo}
            onChangeText={setCorreo}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        <View style={styles.inputContainer}>
          <Feather name="user" size={20} color="#333" />
          <TextInput
            placeholder='Usuario'
            style={styles.input}
            value={usuario}
            onChangeText={setUsuario}
            autoCapitalize="none"
          />
        </View>

        <View style={styles.inputContainer}>
          <MaterialIcons name="lock-outline" size={20} color="#333" />
          <TextInput
            placeholder='Contraseña'
            style={styles.input}
            secureTextEntry
            value={contraseña}
            onChangeText={setContraseña}
          />
        </View>

        <Text style={styles.passwordHint}>
          Al menos 8 caracteres, 1 letra mayúscula, 1 número, 1 símbolo
        </Text>

        <TouchableOpacity style={styles.signupButton} onPress={handleRegistro}>
          <Text style={styles.signupText}>Registrarse</Text>
        </TouchableOpacity>
      </Animated.View>
    </SafeAreaView>
  );
}

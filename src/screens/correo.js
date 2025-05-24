import React, { useState, useEffect, useRef } from 'react';
import {
  View, Text, TextInput, TouchableOpacity,
  StyleSheet, Image
} from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import { AntDesign, Feather, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import { SafeAreaView } from 'react-native-safe-area-context';

// ¡IMPORTANTE! Tus imports de Firebase
import { auth, db } from '../config/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';

import { correoStyle as styles } from './style/correoStyle';

WebBrowser.maybeCompleteAuthSession();

export default function Correo() {
  const navigation = useNavigation();
  const loginRef  = useRef(null);

  const [email, setEmail]           = useState('');
  const [username, setUsername]     = useState('');
  const [password, setPassword]     = useState('');

  // Google Auth 
  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: 'TU_CLIENT_ID_ANDROID',
    iosClientId:     'TU_CLIENT_ID_IOS',
    webClientId:     'TU_CLIENT_ID_WEB',
  });

  useEffect(() => {
    if (response?.type === 'success') {
      const { authentication } = response;
      console.log('Token Google:', authentication.accessToken);
      // crear o actualizar usuario 
    }
  }, [response]);

  //  Función que maneja el registro en Firebase
  const handleSignUp = async () => {
    try {
      // 1) Crear usuario 
      const userCred = await createUserWithEmailAndPassword(auth, email, password);
      const { uid }  = userCred.user;

      // 2) Guardar nombre de usuario 
      await setDoc(doc(db, 'usuarios', uid), {
        correo:       email,
        nombreUsuario: username,
        cartas:       []  
      });

      // 3) Navegar a Home
      navigation.replace('home');
    } catch (error) {
      console.error('Error al registrarse:', error.message);
      alert('Error: ' + error.message);
    }
  };

  const handleClose = async () => {
    if (loginRef.current) {
      await loginRef.current.animate('slideOutDown', 400);
    }
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.outerContainer}>
      <TouchableOpacity 
        style={styles.background} 
        activeOpacity={1} 
        onPress={handleClose}
      />
      
      <Animatable.View
        animation="slideInUp"
        duration={500}
        ref={loginRef}
        style={styles.container}
      >
        <TouchableOpacity style={styles.closeBtn} onPress={handleClose}>
          <AntDesign name="close" size={24} color="#333" />
        </TouchableOpacity>

        <Text style={styles.title}>¡Comencemos!</Text>

        <TouchableOpacity style={styles.googleButton} onPress={() => promptAsync()}>
          <Image
            source={{
              uri: 'https://imagepng.org/wp-content/uploads/2019/08/google-icon.png',
            }}
            style={styles.googleIcon}
          />
        </TouchableOpacity>

        {/* ➤ Input Correo */}
        <View style={styles.inputContainer}>
          <Feather name="mail" size={20} color="#333" />
          <TextInput
            placeholder="Correo"
            style={styles.input}
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />
        </View>

        {/* ➤ Input Nombre de usuario */}
        <View style={styles.inputContainer}>
          <Feather name="user" size={20} color="#333" />
          <TextInput
            placeholder="Nombre de usuario"
            style={styles.input}
            autoCapitalize="none"
            value={username}
            onChangeText={setUsername}
          />
        </View>

        {/* Contraseña */}
        <View style={styles.inputContainer}>
          <MaterialIcons name="lock-outline" size={20} color="#333" />
          <TextInput
            placeholder="Contraseña"
            secureTextEntry
            style={styles.input}
            value={password}
            onChangeText={setPassword}
          />
        </View>

        <Text style={styles.passwordHint}>
          Al menos 8 caracteres, 1 letra mayúscula, 1 número, 1 símbolo
        </Text>

        {/*  Botón Registrarse */}
        <TouchableOpacity style={styles.signupButton} onPress={handleSignUp}>
          <Text style={styles.signupText}>Sign Up</Text>
        </TouchableOpacity>
      </Animatable.View>
    </SafeAreaView>
  );
}

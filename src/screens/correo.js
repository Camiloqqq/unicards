import React, { useEffect, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import { AntDesign, Feather, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import { SafeAreaView } from 'react-native-safe-area-context';import home from './home';
import { correoStyle as styles } from './style/correoStyle';

WebBrowser.maybeCompleteAuthSession();

export default function login() {
  const navigation = useNavigation();
  const loginRef = useRef(null);

  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: 'TU_CLIENT_ID_ANDROID',
    iosClientId: 'TU_CLIENT_ID_IOS',
    webClientId: 'TU_CLIENT_ID_WEB',
  });

  useEffect(() => {
    if (response?.type === 'success') {
      const { authentication } = response;
      console.log('Token:', authentication?.accessToken);
    }
  }, [response]);

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

        <View style={styles.inputContainer}>
          <Feather name="mail" size={20} color="#333" />
          <TextInput placeholder="Correo" style={styles.input} />
        </View>

        <View style={styles.inputContainer}>
          <Feather name="user" size={20} color="#333" />
          <TextInput placeholder="Nombre de usuario" style={styles.input} />
        </View>

        <View style={styles.inputContainer}>
          <MaterialIcons name="lock-outline" size={20} color="#333" />
          <TextInput placeholder="Contraseña" secureTextEntry style={styles.input} />
        </View>

        <Text style={styles.passwordHint}>
          Al menos 8 caracteres, 1 letra mayúscula, 1 número, 1 símbolo
        </Text>

        <TouchableOpacity style={styles.signupButton} onPress={() => navigation.navigate('home') } >
          <Text style={styles.signupText}>Sign Up</Text>
        </TouchableOpacity>


      </Animatable.View>
    </SafeAreaView>
  );
}


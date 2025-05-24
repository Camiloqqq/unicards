import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity,} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar, Platform } from 'react-native';
import { loginStyle as styles } from '../screens/style/loginStyle';



export default function login({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/logo.png')} style={styles.logo} />
      <Text style={styles.title}>UNIPAZ</Text>
      <Text style={styles.subtitle}>LEGENDS</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('correo')}>
        <Text style={styles.buttonText}>INICIAR</Text>
      </TouchableOpacity>
      
    </View>
  );
}


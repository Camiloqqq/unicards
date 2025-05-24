import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { inicioStyle as styles } from '../screens/style/inicioStyle';

export default function inicio({ navigation }) {
  return (
    <ImageBackground 
      source={require('../../assets/fondocampus.jpg')} 
      style={styles.background}
      resizeMode="cover"
    >
      <Image source={require('../../assets/logo.png')} style={styles.logo} />
      <Text style={styles.title}>UNIPAZ</Text>
      <Text style={styles.subtitle}>LEGENDS</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('login')}>
        <Text style={styles.buttonText}>JUGAR</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
<<<<<<< HEAD
}






=======
}
>>>>>>> 588989c82d6fc0297a1cc1908a468767922b4dde

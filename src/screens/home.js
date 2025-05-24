import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';
import { StatusBar, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { homeStyle as styles } from '../screens/style/homeStyle';

export default function home({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('perfil')}>
          <View style={styles.avatarContainer}>
            <Image
              source={require('../../assets/jaguar.jpeg')} 
              style={styles.avatar}
            />
          </View>
        </TouchableOpacity>

        <View style={styles.centerTitle}>
          <Text style={styles.title}>UNIPAZ</Text>
          <Text style={styles.subtitle}>LEGENDS</Text>
        </View>

      </View>

      <View style={styles.tabBar}>
  <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('home')}>
    <Ionicons name="home" size={20} color="#fff" style={styles.icon} />
    <Text style={styles.tabActive}>Home</Text>
  </TouchableOpacity>

  <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('tematicas')}>
    <Ionicons name="book" size={20} color="#9b9b9b" style={styles.icon} />
    <Text style={styles.tab}>Temáticas</Text>
  </TouchableOpacity>

  <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('coleccion')}>
    <Ionicons name="albums" size={20} color="#9b9b9b" style={styles.icon} />
    <Text style={styles.tab}>Colección</Text>
  </TouchableOpacity>
</View>

    </SafeAreaView>
  );
}

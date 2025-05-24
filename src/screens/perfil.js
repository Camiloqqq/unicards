import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

import { perfilStyle as styles } from '../screens/style/perflStyle';

export default function Perfil() {
const navigation = useNavigation(); 

return (
      <SafeAreaView style={styles.container}>
  
<View style={styles.container}>
<Text style={styles.title}>Perfil del Usuario</Text>
<Text style={styles.text}>tamo en desarrollo. acá va la info del player</Text>
<TouchableOpacity
style={styles.contactButton}
onPress={() => navigation.navigate('contacto')}
>
<Text style={styles.contactButtonText}>Contacto</Text>
</TouchableOpacity>
</View>

 <View style={styles.tabBar}>
  <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('home')}>
    <Ionicons name="home" size={20} color="#9b9b9b" style={styles.icon} />
    <Text style={styles.tab}>Home</Text>
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
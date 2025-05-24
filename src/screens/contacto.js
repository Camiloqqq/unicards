import React from 'react';
import { View, Text, StyleSheet, Linking, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

import { Ionicons } from '@expo/vector-icons';

import { contactoStyle as styles } from '../screens/style/contactoStyle';

export default function contacto() {
    const navigation = useNavigation(); 
    
  return (
    
    <View style={styles.container}>
      <Text style={styles.title}>Contáctanos</Text>
      <TouchableOpacity onPress={() => Linking.openURL('mailto:camilo.valdes@unipaz.edu.co?subject=Error en la aplicación UNIPAZ Legends&body=Encontré un error en la aplicación y quiero comentarlo.')}>
      <Text style={styles.info}>camilo.valdes@unipaz.edu.co</Text>
    </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('mailto:laurent.gomez@unipaz.edu.co?subject=Error en la aplicación UNIPAZ Legends&body=Encontré un error en la aplicación y quiero comentarlo.')}>
      <Text style={styles.info}>laurent.gomez@unipaz.edu.co</Text>
      </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL('mailto:adriel.ocampo@unipaz.edu.co?subject=Error en la aplicación UNIPAZ Legends&body=Encontré un error en la aplicación y quiero comentarlo.')}>
      <Text style={styles.info}>adriel.ocampo@unipaz.edu.co</Text>
     </TouchableOpacity>
   


<TouchableOpacity
style={styles.perfilButton}
onPress={() => navigation.navigate('perfil')}>
<Text style={styles.perfilButtonText}>Perfil</Text>s
</TouchableOpacity>

    </View>



  );

}
    

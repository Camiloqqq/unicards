// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import inicio from './src/screens/inicio';
import login from './src/screens/login';
import correo from './src/screens/correo';
import home from './src/screens/home';
import tematicas from './src/screens/tematicas';
import coleccion from './src/screens/coleccion';
import perfil from './src/screens/perfil'; 
import contacto from './src/screens/contacto';
import { Ionicons } from '@expo/vector-icons';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="inicio" component={inicio} />
        <Stack.Screen name="login" component={login} />
        <Stack.Screen name="correo" component={correo} />
        <Stack.Screen name="home" component={home} />
        <Stack.Screen name="tematicas" component={tematicas} />
        <Stack.Screen name="coleccion" component={coleccion} />
        <Stack.Screen name="perfil" component={perfil} />
        <Stack.Screen name="contacto" component={contacto} />
      </Stack.Navigator>
    </NavigationContainer>
  );
 
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            switch (route.name) {
              case 'Inicio':
                iconName = 'home-outline';
                break;
              case 'Temáticas':
                iconName = 'book-outline';
                break;
              case 'Colección':
                iconName = 'albums-outline';
                break;
              case 'Perfil':
                iconName = 'person-circle-outline';
                break;
              default:
                iconName = 'ellipse-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#3b82f6',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
        })}
      >
        <Tab.Screen name="Inicio" component={home} />
        <Tab.Screen name="Temáticas" component={tematicas} />
        <Tab.Screen name="Colección" component={coleccion} />
        <Tab.Screen name="Perfil" component={perfil} />
        <Tab.Screen name="contacto" component={contacto} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

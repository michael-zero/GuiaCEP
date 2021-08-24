import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';

//Componentes
import Screen from './src/components/Screen';

//Rotas
import TabScreen from './src/routes/routes'

export default function App() {
  return (
   <NavigationContainer>
     <TabScreen/>
   </NavigationContainer>
  );
}

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';

//Componentes
import Screen from './src/components/Screen';

//Rotas
import TabScreen from './src/routes/routes'

//Contexto para compartilhar os dados entre as telas filhas ..
import {DadosContext} from './src/DadosContext'

export default function App() {
  
  // Vetor de CEPS favoritados 
  const [CEPS, setCEPS] = React.useState([])
  const [coordFavoritados, setCoordFavoritados] = React.useState([])
  const [coordenadaDoFavoritado, setCoordenadaDoFavoritado] = React.useState(null)

  const [regiaoFavorito, setRegiaoFavorito] = React.useState(null)

  
  return (
  <DadosContext.Provider value={{CEPS, setCEPS, coordFavoritados, setCoordFavoritados, coordenadaDoFavoritado, setCoordenadaDoFavoritado, regiaoFavorito, setRegiaoFavorito}}>
      <NavigationContainer>
        <TabScreen/>
      </NavigationContainer>
  </DadosContext.Provider>

  );
}

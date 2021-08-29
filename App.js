import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';

// Fontes
import AppLoading from 'expo-app-loading';
import {useFonts ,Montserrat_400Regular, Montserrat_100Thin_Italic, 
  Montserrat_600SemiBold,
  Montserrat_500Medium,
  Montserrat_300Light,
  Montserrat_700Bold, 
  Montserrat_100Thin
} from '@expo-google-fonts/montserrat'



//Rotas
import TabScreen from './src/routes/routes'

//Contexto para compartilhar os dados entre as telas filhas ..
import {DadosContext} from './src/DadosContext'

export default function App() {
  
  // Vetor de CEPS favoritados 
  const [CEPS, setCEPS] = React.useState([])
  const [regiaoFavorito, setRegiaoFavorito] = React.useState(null)

  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_600SemiBold,
    Montserrat_100Thin_Italic,
    Montserrat_500Medium,
    Montserrat_300Light,
    Montserrat_700Bold,
    Montserrat_100Thin
  }) 

  if(!fontsLoaded){
    return <AppLoading/>
  }
  
  return (
  <DadosContext.Provider value={{CEPS, setCEPS,regiaoFavorito, setRegiaoFavorito}}>
      <NavigationContainer>
        <TabScreen/>
      </NavigationContainer>
  </DadosContext.Provider>

  );
}

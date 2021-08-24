import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Screen from '../../components/Screen'

//Imports para usar MAPA do Google
import MapView from 'react-native-maps';
import * as Location from 'expo-location'


const index = () => {

    const [location, setLocation] = React.useState({//Região inicial -Antes de carregar a localizacao do usuario - Centro de Teresina
        latitude: -5.0903678,
        longitude: -42.8105988,
        latitudeDelta: 0.014,
        longitudeDelta: 0.014
      })

    const obterLocalizacao = async () => {
        try {
            const { granted } = await Location.requestForegroundPermissionsAsync();
            
            if (!granted) {
                alert('Precisamos da sua localização!');
                return
            }

            const { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync()
            setLocation({ latitude, longitude, latitudeDelta: 0.014, longitudeDelta: 0.014 })
        } catch (e) {
            console.log(e)
        }

    }

    return (
        <Screen>
           <View>

           </View>
        </Screen>
    )
}

export default index

const styles = StyleSheet.create({})

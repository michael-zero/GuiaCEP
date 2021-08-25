import React from 'react'
import { StyleSheet, Text, View, Dimensions, Button} from 'react-native'

//Componentes
import Screen from '../../components/Screen'
//CSS
import {styles} from './styles'
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

    // Função para pedir ao usuário permissão para acessar a localização
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
           alert(e.message)
        }

    }

    React.useEffect(() => {
        obterLocalizacao()
    },[])

    const obterCoordenada = async (Logradouro) => {
       const resposta = await Location.geocodeAsync(Logradouro)
       console.log(resposta)
    }

    return (
        <Screen>
            {location && <MapView showsUserLocation={true} initialRegion={location} style={styles.map} /> }
            
            {/* Botões em cima do mapa */}
            <View style={{position: 'absolute', bottom: 100, right: 20}}>
                    <Button title='Buscar' onPress={() => obterCoordenada("Avenida Teresina")}/>
            </View>
        </Screen>
    )
}

export default index


import React from 'react'
import { StyleSheet, Text, View, Dimensions, Button} from 'react-native'

//Componentes
import Screen from '../../components/Screen'
//CSS
import {styles} from './styles'
//Imports para usar MAPA do Google
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location'

//Contexto
import { DadosContext } from '../../DadosContext';

import { obterCoordenada } from '../../configs/permissoes';


const index = () => {

    const {CEPS, setCEPS,coordFavoritados, setCoordFavoritados} = React.useContext(DadosContext)

    const [location, setLocation] = React.useState()

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

    console.log(coordFavoritados);

    return (
        <Screen>
            {location && <MapView showsUserLocation={true} initialRegion={location} style={styles.map}>

               

                 { coordFavoritados &&  coordFavoritados.map(coordenada => {
                    console.log(coordenada)
                 return <Marker key={coordenada.latitude} coordinate={coordenada}/>}) 
                 }
            </MapView> }
            
            {/* Botões em cima do mapa */}
            <View style={{position: 'absolute', bottom: 100, right: 20}}>
                    <Button title='Buscar' onPress={() => obterCoordenada("Avenida Teresina")}/>
            </View>
        </Screen>
    )
}

export default index


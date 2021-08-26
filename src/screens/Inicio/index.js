import React from 'react'
import { StyleSheet, Text, View, Dimensions, Button, TouchableOpacity} from 'react-native'

//Componentes
import Screen from '../../components/Screen'
//CSS
import {styles} from './styles'
//Imports para usar MAPA do Google
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location'

//Contexto
import { DadosContext } from '../../DadosContext';

//Icones
import { MaterialIcons } from '@expo/vector-icons';

import { obterCoordenada } from '../../configs/permissoes';
import colors from '../../configs/colors';


const index = ({navigation}) => {

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

    // console.log(coordFavoritados);

    return (
        <Screen>
            {location && <MapView showsUserLocation={true} initialRegion={location} style={styles.map}>

               

                 { coordFavoritados &&  coordFavoritados.map(coordenada => {
                    console.log(coordenada)
                 return <Marker pinColor={colors.azul} key={coordenada.latitude} coordinate={coordenada}/>}) 
                 }
            </MapView> }
            
            {/* Botões em cima do mapa */}
                <View style={{position: 'absolute', alignItems: 'center', justifyContent: 'center', backgroundColor: '#252525', bottom: 80, right: 20, width: 50, height: 50, borderRadius: 25}}>
                        <MaterialIcons onPress={() => navigation.navigate("Listagem")} name="list" size={40} color={colors.azul} />
                </View>

            

        </Screen>
    )
}

export default index


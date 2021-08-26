import React from 'react'
import { StyleSheet, Text, View, Dimensions, Button, TouchableOpacity, ActivityIndicator} from 'react-native'

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
        <Screen style={{ backgroundColor: colors.azul}}>
            {location ? <MapView showsUserLocation={true} initialRegion={location} style={styles.map}>

               

                 { coordFavoritados &&  coordFavoritados.map(coordenada => {
                    console.log(coordenada)
                 return <Marker pinColor={colors.azul} key={coordenada.latitude} coordinate={coordenada}/>}) 
                 }
            </MapView> : 
            
            
            (<View style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
                      <ActivityIndicator size="large" color={"#252525"} />
                    </View>)
            }
            
               {/* Botão em cima do mapa */}
              { location &&  <View style={{position: 'absolute', alignItems: 'center', justifyContent: 'center', backgroundColor: '#252525', bottom: 80, right: 20, width: 45, height: 45, borderRadius: 25}}>
                        <MaterialIcons onPress={() => navigation.navigate("Listagem")} name="list" size={40} color={colors.azul} />
                </View>}

            

        </Screen>
    )
}

export default index


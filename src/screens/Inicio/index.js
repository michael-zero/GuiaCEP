import React from 'react'
import { StyleSheet, Text, View, Dimensions, Button, TouchableOpacity, Alert, ActivityIndicator} from 'react-native'

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

import Header from '../../components/Header'

const index = ({navigation}) => {

    const {CEPS, regiaoFavorito, } = React.useContext(DadosContext)

    const [location, setLocation] = React.useState({latitude: -5.0985376,longitude: -42.8324029, latitudeDelta: 0.014, longitudeDelta: 0.014 })

    // Função para pedir ao usuário permissão para acessar a localização
    const obterPermissao = async () => {
        try {

            const habilitado = await Location.hasServicesEnabledAsync()

            if(!habilitado){
                Alert.alert("GPS","Ative sua localização😎")
                return 
            }

            const { status } = await Location.requestForegroundPermissionsAsync();
            
            if (status !== 'granted') {
                alert('Precisamos da sua localização!');
                return
            }

        } catch (e) {
           alert(e.message)
        }

    }

    const obterLocalizacao = async () => {
        try {
            await Location.getLastKnownPositionAsync({accuracy: 1,  enableHighAccuracy: false}).then((res) => {
               
                if(res){
                    const {coords} = res
                    setLocation({latitude: coords.latitude, longitude: coords.longitude, latitudeDelta: 0.014, longitudeDelta: 0.014})
                }else{
                    return
                }
            })
        } catch (error) {
            console.log("error = ", error.message)
        }
      
    }

    React.useEffect(() => {
       obterPermissao().then(obterLocalizacao()).catch(e => console.log(e.message))
    },[])


   

    return (
        <Screen style={{ backgroundColor: colors.azul}}>

            <Header titulo='Guia me' querIconeVoltar={false}/>

            {location ? <MapView showsUserLocation={true}
            region={regiaoFavorito ? regiaoFavorito : location}
            initialRegion={location} style={styles.map}>

               

                 { CEPS &&  CEPS.map(obj => {
                 if(obj.coordenada){
                     console.log(obj.coordenada)
                    return <Marker title={obj.local.logradouro} pinColor={colors.azul} key={obj.local.logradouro} coordinate={obj.coordenada}/>
                 }
                
                }) 
                 }
            </MapView> : 
            
            
            (<View style={styles.containerLoading}>
                      <ActivityIndicator size="large" color={"#252525"} />
                    </View>)
            }
            
               {/* Botão em cima do mapa */}
              { location &&  <View style={styles.containerBTN}>
                        <MaterialIcons onPress={() => navigation.navigate("Listagem")} name="list" size={40} color={colors.azul} />
                </View>}

            

        </Screen>
    )
}

export default index


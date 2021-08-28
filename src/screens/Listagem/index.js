import React from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Screen from '../../components/Screen'

//Contexto
import {DadosContext} from '../../DadosContext'

//Compoentes
import Informacoes from '../../components/Informacoes'
import colors from '../../configs/colors'
import Header from '../../components/Header'

//Icones
import { MaterialIcons } from '@expo/vector-icons';

const index = ({navigation}) => {

    const {CEPS,setRegiaoFavorito} = React.useContext(DadosContext)
    
    const irParaMapaComOFavorito = (coordenada) => {
        setRegiaoFavorito({...coordenada,latitudeDelta: 0.014, longitudeDelta: 0.014 })
        navigation.navigate('Inicio')
    }

    return (
        <Screen style={{backgroundColor: colors.azul}}>

            <Header titulo='Locais Favoritos' navigation={navigation}/>

            <ScrollView>
            {
                CEPS && CEPS.map(local => {
                return <TouchableOpacity  key={local.local.cep}  onPress={() => irParaMapaComOFavorito(local.coordenada)}>
                     <Informacoes jaFavoritou={true} local={local.local} containerStyle={{marginTop: 20, marginBottom: 10}}/>
                </TouchableOpacity> 
            
            })
            }
           </ScrollView>

           {CEPS.length === 0 &&  <View style={[styles.container,{height: '100%', flex: 0, justifyContent: 'center', alignItems: 'center'}]}>
                    <View>
                        <Text style={{fontSize: 20, textAlign: 'justify'}}>Nenhum item favoritado</Text>
                        <MaterialIcons style={{alignSelf: 'center', marginTop: 20}} name="error-outline" size={60} color="#252525" />
                    </View>
                </View>}

        </Screen>
    )
}

export default index

const styles = StyleSheet.create({})

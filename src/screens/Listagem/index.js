import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import Screen from '../../components/Screen'

//Contexto
import {DadosContext} from '../../DadosContext'

//Compoentes
import Informacoes from '../../components/Informacoes'
import colors from '../../configs/colors'
import Header from '../../components/Header'

const index = ({navigation}) => {

    const {CEPS, setCEPS, coordFavoritados, setCoordFavoritados} = React.useContext(DadosContext)

    return (
        <Screen style={{backgroundColor: colors.azul}}>

            <Header titulo='Locais Favoritos' navigation={navigation}/>

            <ScrollView>
           {
               CEPS && CEPS.map(local => <Informacoes key={local.cep} jaFavoritou={true} local={local} containerStyle={{marginVertical: 10}}/>)
           }
           </ScrollView>
        </Screen>
    )
}

export default index

const styles = StyleSheet.create({})

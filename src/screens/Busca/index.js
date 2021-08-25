import React from 'react'
import { Button, Dimensions, StyleSheet, Text, View, Alert } from 'react-native'
import axios from 'axios'

//Componentes
import Botao from '../../components/Botao'
import Input from '../../components/Input'
import Screen from '../../components/Screen'
import colors from '../../configs/colors'

const index = () => {

    const [cepBuscado, setCepBuscado] = React.useState(null)

    const buscarCEP = async (CEP) => {
        try {
             if(CEP){

                let url = `https://viacep.com.br/ws/${CEP}/json/`
                const {data} = await axios.get(url)
                
                if(data){
                    setCepBuscado(data)
                }
            }else{
                Alert.alert("Erro","Por favor, digite um CEP")
            }

        } catch (error) {
            Alert.alert("Erro", error.message)
        }
    }

    return (
        <Screen style={{backgroundColor: "#252525"}}>
            <View style={{height: '100%', justifyContent: 'space-between'}}>
                <Input value={cepBuscado} placeholder='Digite o CEP' setCepBuscado={setCepBuscado}/>
                
                
                
                {/* Componente Botão */}
                <Botao titulo="Buscar" onPress={() => buscarCEP(cepBuscado)} containerStyle={{marginBottom: 32}}/> 
            </View>
        </Screen>
    )
}

export default index

const styles = StyleSheet.create({})

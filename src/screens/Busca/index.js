import React from 'react'
import { Button, Dimensions, StyleSheet, Text, View, Alert } from 'react-native'
import axios from 'axios'

//Componentes
import Botao from '../../components/Botao'
import Input from '../../components/Input'
import Screen from '../../components/Screen'
import Informacoes from '../../components/Informacoes'


const index = () => {

    const [cepBuscado, setCepBuscado] = React.useState(null)
    const [local, setLocal] = React.useState(null)

    const buscarCEP = async (CEP) => {
        try {
             if(CEP){

                let url = `https://viacep.com.br/ws/${CEP}/json/`
                const {data} = await axios.get(url)
                
                if(data){
                    setLocal(data)
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
            <View style={{height: '100%'}}>
                <Input value={cepBuscado} placeholder='Digite o CEP' setCepBuscado={setCepBuscado}/>
                
                {
                 local && <Informacoes local={local}/>
                }

                
                {/* Componente Botão */}
                <Botao titulo="Buscar" onPress={() => buscarCEP(cepBuscado)} containerStyle={{position: 'absolute', bottom: 24, alignSelf: 'center'}}/> 
            </View>
        </Screen>
    )
}

export default index

const styles = StyleSheet.create({
   
})

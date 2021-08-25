import React from 'react'
import { Button, Dimensions, StyleSheet, Text, View, Alert } from 'react-native'
import axios from 'axios'

//Componentes
import Botao from '../../components/Botao'
import Input from '../../components/Input'
import Screen from '../../components/Screen'
import Informacoes from '../../components/Informacoes'

//Contexto
import { DadosContext } from '../../DadosContext'
import colors from '../../configs/colors'

const index = () => {

    const [cepBuscado, setCepBuscado] = React.useState(null)
    const {CEPS, setCEPS} = React.useContext(DadosContext)
    const [local, setLocal] = React.useState(null)
    
    // Exemplo
    // {
    //     "bairro": "Parque Piauí I",
    //     "cep": "65631-205",
    //     "complemento": "de 2 a 2988 - lado par",
    //     "ddd": "99",
    //     "gia": "",
    //     "ibge": "2112209",
    //     "localidade": "Timon",
    //     "logradouro": "Avenida Teresina",
    //     "siafi": "0937",
    //     "uf": "MA",
    //   }

    const buscarCEP = async (CEP) => {
        try {
             if(CEP){

                let url = `https://viacep.com.br/ws/${CEP}/json/`
                const {data} = await axios.get(url)
                const {erro} = data 

                if(erro){
                    Alert.alert("Erro", "CEP inválido ou não encontrado")
                    return
                }

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
               
                <View style={{ marginHorizontal: 20, height: 35, justifyContent: 'center'}}>
                    <Text style={{fontSize: 16, color: colors.amarelo}}>CEPS favoritados {CEPS.length} </Text>
                </View>
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

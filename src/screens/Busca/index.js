import React from 'react'
import { Button, Dimensions, StyleSheet, Text, View, Alert, TouchableOpacity } from 'react-native'
import axios from 'axios'

//Componentes
import Botao from '../../components/Botao'
import Input from '../../components/Input'
import Screen from '../../components/Screen'
import Informacoes from '../../components/Informacoes'
import Header from '../../components/Header'

//Contexto
import { DadosContext } from '../../DadosContext'
import colors from '../../configs/colors'


const index = ({navigation}) => {

    const [cepBuscado, setCepBuscado] = React.useState(null)
    const {CEPS} = React.useContext(DadosContext)
    const [local, setLocal] = React.useState(null)
    const [jaFavoritou, setJaFavoritou] = React.useState(null)
   

    const verificarSeJaEstaFavoritado = (cep) => {
        if(CEPS.length === 0) return false

        let resposta = CEPS.find(local => {
            let limpaCEP = local.local.cep.replace("-","")
            return limpaCEP === cep
        })
        
        if(resposta){
            setLocal(resposta)
            setJaFavoritou(true)
            return true
        }
    }

    const buscarCEP = async (CEP) => {
        try {

            if(verificarSeJaEstaFavoritado(CEP)){
                setJaFavoritou(true)
                return
            }else{
                setJaFavoritou(false)
            }

             if(CEP){

                let url = `https://viacep.com.br/ws/${CEP}/json/`
                const {data} = await axios.get(url)
                const {erro} = data 

                if(erro){
                    Alert.alert("Erro", "CEP inválido ou não encontrado")
                    return
                }

                if(data){
                    setLocal({local: data, coordenada: null})
                }
            }else{
                Alert.alert("Erro","Por favor, digite um CEP")
            }

        } catch (error) {
            Alert.alert("Erro", error.message)
        }
    }


    // Evento ao sair da tela
    React.useEffect(() => navigation.addListener('blur', (e) => {
        setLocal(null)
        setCepBuscado(null)
    }),[])

    React.useEffect(() => {
    
    }, [local])



    return (
        <Screen style={{backgroundColor: colors.azul }}>
            <Header titulo='Buscar CEP' navigation={navigation}/>
            <View style={{height: '100%'}}>
                <Input querIconeLimpeza={true} setLocal={setLocal} value={cepBuscado} placeholder='Digite um CEP' setCepBuscado={setCepBuscado}/>
               
               {/* Botão do favoritado */}
               <TouchableOpacity onPress={() => navigation.navigate("Listagem")}>
                    <View style={{ marginHorizontal: 22, height: 35, justifyContent: 'center'}}>
                        <Text style={{fontSize: 16, color: "#252525"}}>Favoritados({CEPS.length})</Text>
                    </View>
               </TouchableOpacity>

                {console.log("local", local)}
                {
                 local && <Informacoes local={local?.local} jaFavoritou={jaFavoritou}/>
                }

                {/* Componente Botão */}
                <Botao titulo="Buscar" onPress={() => buscarCEP(cepBuscado)} containerStyle={{position: 'absolute', bottom: 100, alignSelf: 'center'}}/> 
            </View>
        </Screen>
    )
}

export default index

const styles = StyleSheet.create({
   
})

import React from 'react'
import { Alert, Pressable, StyleSheet, Text, View } from 'react-native'

//Cor
import colors from '../configs/colors'

//Icones
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
//Contexto
import {DadosContext} from '../DadosContext'

import { obterCoordenada } from '../configs/permissoes';
import fonts from '../configs/fonts';

const Informacoes = ({local, jaFavoritou, containerStyle}) => {

    const [favoritou, setFavoritou] = React.useState(jaFavoritou)

    const {CEPS, setCEPS} = React.useContext(DadosContext)

    const agirSobreOLocal = () => {

        // setFavoritou(!favoritou)
        
        // Estou favoritando
        if(!favoritou){
            obterCoordenada(local.logradouro).then(res => {
                if(!res){
                    Alert.alert("Erro", "Não foi possível obter a coordenada, mas o local foi salvo!")
                }
                setCEPS([...CEPS, {local: local, coordenada: res}])
                setFavoritou(!favoritou)


            })
        }else{ //Processo de desfavoritar e remover do contexto
            Alert.alert('Deletar','Tem certeza que deseja remover dos favoritos?', [
                {text: 'Não'}, 
                {text: 'Sim', onPress: () =>  { 
                    setFavoritou(!favoritou)
                    
                    setCEPS([...CEPS.filter(lugar => lugar.local !== local)])}} 
            ])
           
           
        }
    }

    

    React.useEffect(() => {
        setFavoritou(jaFavoritou)
    }, [local])

    return (
        <View style={[{marginHorizontal: 18, marginVertical: '20%', borderRadius: 10, overflow: 'hidden'}, containerStyle]}>


                       <View style={{alignItems: 'center', backgroundColor: 'white', flexDirection: 'row', justifyContent: 'space-around', height: 40}}>
                            <Text style={[styles.titulo, {fontSize: 20}]}>Informações do Local</Text>
                            <Pressable onPress={() => agirSobreOLocal()}>
                                {
                                    !favoritou ? 
                                        // <Ionicons name="save-outline" size={24} color="black" />
                                        <AntDesign name="hearto" size={24} color="black" />
                                        :
                                        // <Ionicons name="save" size={24} color={colors.azul} />
                                        <AntDesign name="heart" size={24} color="red" />



                                }
                            </Pressable>
                        </View>

                        <View style={styles.container}>


                        {/* Coluna CHAVES */}
                            <View style={{ width: '40%'}}>
                                <View style={[styles.subContainer, {backgroundColor: colors.azulClaro}]}>
                                    <Text style={styles.titulo}>Estado</Text>
                                </View>

                                <View style={[styles.subContainer]}>
                                    <Text style={styles.titulo}>Cidade</Text>
                                </View>

                                <View style={[styles.subContainer,{backgroundColor: colors.azulClaro}]}>
                                    <Text style={styles.titulo}>Bairro</Text>
                                </View>

                                <View style={[styles.subContainer]}>
                                    <Text style={styles.titulo}>Logradouro</Text>
                                </View>
                            </View>

                            {/* COLUNA VALORES */}
                            <View style={{flex: 1}}>
                                <View style={[styles.subContainer, {backgroundColor: colors.azulClaro}]}>
                                    <Text style={styles.texto}>{local.uf}</Text>
                                </View>

                                <View style={[styles.subContainer]}>
                                    <Text style={styles.texto}>{local.localidade}</Text>
                                </View>
                                <View style={[styles.subContainer,{backgroundColor: colors.azulClaro}]}>
                                    <Text style={styles.texto}>{local.bairro}</Text>
                                </View>

                                <View style={[styles.subContainer]}>
                                    <Text style={styles.texto}>{local.logradouro}</Text>
                                </View>
                            </View>

                    </View>
              
                </View>
    )
}

export default Informacoes

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: 'white',
        flexDirection: 'row',
    },
    titulo: {
        fontSize: 16,
        color: 'black',
        fontFamily: fonts.Montserrat_500Medium
    },
    texto: {
        fontSize: 16,
        color: 'black',
        fontFamily: fonts.texto
    },
    subContainer: {
        flexDirection: 'row', 
        justifyContent: 'space-around',
        height: 38, 
        marginTop: 6,
        alignItems: 'center',
        
}
})

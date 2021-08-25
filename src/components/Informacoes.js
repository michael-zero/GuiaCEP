import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

//Cor
import colors from '../configs/colors'

//Icones
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const Informacoes = ({local}) => {

    const [favoritou, setFavoritou] = React.useState(false)

    return (
        <View style={{marginHorizontal: 18, marginVertical: '20%', borderRadius: 10, overflow: 'hidden'}}>

                        <View style={{alignItems: 'center', backgroundColor: 'white', flexDirection: 'row', justifyContent: 'space-around', height: 40}}>
                            <Text style={[styles.titulo, {fontSize: 20}]}>Informações do Local</Text>
                            <Pressable onPress={() => setFavoritou(!favoritou)}>
                                {
                                    favoritou ? 
                                        <Ionicons name="save" size={24} color={colors.amarelo} />
                                        :
                                        <Ionicons name="save-outline" size={24} color="black" />


                                }
                            </Pressable>
                        </View>

                        <View style={styles.container}>


                        {/* Coluna CHAVES */}
                            <View style={{ width: '40%'}}>
                                <View style={[styles.subContainer, {backgroundColor: "lightgray"}]}>
                                    <Text style={styles.titulo}>Estado</Text>
                                </View>

                                <View style={[styles.subContainer]}>
                                    <Text style={styles.titulo}>Cidade</Text>
                                </View>

                                <View style={[styles.subContainer,{backgroundColor: "lightgray"}]}>
                                    <Text style={styles.titulo}>Bairro</Text>
                                </View>

                                <View style={[styles.subContainer]}>
                                    <Text style={styles.titulo}>Logradouro</Text>
                                </View>
                            </View>

                            {/* COLUNA VALORES */}
                            <View style={{flex: 1}}>
                                <View style={[styles.subContainer, {backgroundColor: "lightgray"}]}>
                                    <Text style={styles.texto}>{local.uf}</Text>
                                </View>

                                <View style={[styles.subContainer]}>
                                    <Text style={styles.titulo}>{local.localidade}</Text>
                                </View>
                                <View style={[styles.subContainer,{backgroundColor: "lightgray"}]}>
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
        fontSize: 18,
        color: 'black',
    },
    texto: {
        fontSize: 16,
        color: 'black'
    },
    subContainer: {
        flexDirection: 'row', 
        justifyContent: 'space-around',
        height: 38, 
        marginTop: 6,
        alignItems: 'center',
        
}
})

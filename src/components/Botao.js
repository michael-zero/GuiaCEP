import React from 'react'
import {  StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import colors from '../configs/colors'
import fonts from '../configs/fonts'

const Botao = ({titulo, onPress, containerStyle, textStyle, ...outrasProps}) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.container, containerStyle]}>
            <View>
                <Text style={[{fontSize: 18, color: "#252525", fontFamily: fonts.Montserrat_500Medium}, textStyle]}>{titulo}</Text>
            </View>
         </TouchableOpacity>
    )
}

export default Botao

const styles = StyleSheet.create({
    container: {
        width: 120, 
        backgroundColor: 'white', 
        height: 40, 
        justifyContent: 'center', 
        alignItems: 'center',
        borderRadius: 7,    
    }
})

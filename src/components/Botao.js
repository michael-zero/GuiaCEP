import React from 'react'
import {  StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import colors from '../configs/colors'

const Botao = ({titulo, onPress, containerStyle, textStyle, ...outrasProps}) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.container, containerStyle]}>
            <View>
                <Text style={[{fontSize: 18, color: "#252525"}, textStyle]}>{titulo}</Text>
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

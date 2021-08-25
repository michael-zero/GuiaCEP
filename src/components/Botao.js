import React from 'react'
import {  StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import colors from '../configs/colors'

const Botao = ({titulo, onPress, containerStyle, textStyle, ...outrasProps}) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={[styles.container, containerStyle]}>
                <Text style={[{fontSize: 16, color: '#000'}, textStyle]}>{titulo}</Text>
            </View>
         </TouchableOpacity>
    )
}

export default Botao

const styles = StyleSheet.create({
    container: {width: 120, backgroundColor: colors.amarelo, height: 40, alignSelf: 'center', justifyContent: 'center', alignItems: 'center', borderRadius: 7}
})

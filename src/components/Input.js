import React from 'react'
import { StyleSheet, Text, View, TextInput} from 'react-native'

//Icones
import { MaterialIcons } from '@expo/vector-icons';
import colors from '../configs/colors';

const Input = ({value, setCepBuscado, placeholder, ...outrasProps}) => {
    return (
        <View style={styles.container}>
            {/* <MaterialIcons name="search" size={28} color={colors.amarelo} /> */}
            <TextInput 
            { ...outrasProps}
             keyboardType='numeric'
             onChangeText={cep => setCepBuscado(cep)}
             placeholderTextColor={colors.medium} style={styles.input} placeholder={placeholder} value={value}/>
        </View>
    )
}

export default Input

const styles = StyleSheet.create({
    container: {
        width: '70%',
        height: 45,
        borderWidth: 1,
        borderRadius: 7,
        alignItems: 'center',
        flexDirection: 'row',
        alignSelf: 'center',
        marginVertical: 16,
        paddingHorizontal: 6,
        backgroundColor: 'white'
    },
    input: {
        flex: 1,
        marginLeft: 8,
        fontSize: 16
    }
})

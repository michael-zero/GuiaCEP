import React from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native'

//Icones
import { MaterialIcons } from '@expo/vector-icons';
import colors from '../configs/colors';

const Input = ({value, setCepBuscado, placeholder, setLocal, querIconeLimpeza=false, ...outrasProps}) => {
    return (
        <View style={styles.container}>
            <MaterialIcons name="search" size={28} color={"#252525"} />
            <TextInput 
            { ...outrasProps}
             keyboardType='numeric'
             onChangeText={cep => setCepBuscado(cep)}
             placeholderTextColor={colors.medium} style={styles.input} placeholder={placeholder} value={value}/>
            
            { (querIconeLimpeza && (value !== "" || value === null)) && <TouchableOpacity onPress={() =>{ 
                setCepBuscado("")
                setLocal(null)
                }}>
                 <MaterialIcons name="close" size={20} color={"#252525"} style={{marginRight: 4}} />
            </TouchableOpacity>}    
        
        </View>
    )
}

export default Input

const styles = StyleSheet.create({
    container: {
        width: '90%',
        height: 45,
        borderRadius: 7,
        alignItems: 'center',
        flexDirection: 'row',
        alignSelf: 'center',
        marginVertical: 16,
        paddingHorizontal: 6,
        backgroundColor: 'white',

        elevation: 35,
        
    },
    input: {
        flex: 1,
        marginLeft: 8,
        fontSize: 16
    }
})

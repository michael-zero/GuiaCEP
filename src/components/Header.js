import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import colors from '../configs/colors'


const Header = ({ titulo, navigation }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <View style={styles.subcontainer}>
                    <MaterialIcons name="keyboard-arrow-left" size={30} color={colors.azul} />
                    <View style={{ alignItems: 'center', width: '100%', marginLeft: -25 }}>
                        <Text style={styles.texto}>{titulo}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        width: '100%',
        borderWidth: 1,
        backgroundColor: '#252525',
        height: 40,
        alignItems: 'center', 
        justifyContent: 'center'
    },
    subcontainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    texto: {
        // fontFamily: fonts.Montserrat_500Medium,
        color: "white",
        fontSize: 20,
    }
})
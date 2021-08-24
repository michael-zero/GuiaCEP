import React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import Constants from 'expo-constants'
import colors from '../configs/colors'

const Screen = ({children, style }) => {
    return (
       <SafeAreaView style={[styles.screen, style]}>
           <View>{children}</View>
       </SafeAreaView>
    )
}

export default Screen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
        backgroundColor: colors.white,
    },
})
import { StyleSheet, Dimensions } from 'react-native'

export const styles = StyleSheet.create({
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
      },
    containerBTN: {
      position: 'absolute', 
      alignItems: 'center', 
      justifyContent: 'center',
       backgroundColor: '#252525', 
      bottom: 120, 
      right: 20, 
      width: 45, 
      height: 45, 
      borderRadius: 25
    },
    containerLoading: { 
      width: '100%', 
      height: '100%', 
      justifyContent: 'center', 
      alignItems: 'center'
  }
})
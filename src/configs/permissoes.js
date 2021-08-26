import * as Location from 'expo-location'

export const obterCoordenada = async (Logradouro) => {
   const resposta = await Location.geocodeAsync(Logradouro)
   return resposta[0]
 }
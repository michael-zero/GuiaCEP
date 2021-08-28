import * as Location from 'expo-location'

export const obterCoordenada = async (Logradouro) => {
  try {
    console.log(Logradouro)
    const resposta = await Location.geocodeAsync(Logradouro)
    return resposta[0] 
  } catch (error) {
    console.log(error.message)
    alert("Erro")
  }
  
 }
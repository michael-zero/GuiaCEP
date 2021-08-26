import * as React from 'react';
import { Text, View } from 'react-native';

//Navegadores
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//Telas 
import Inicio from '../screens/Inicio/index'
import Busca from '../screens/Busca/index'
import Listagem from '../screens/Listagem/index'

//Icones
import { MaterialIcons } from '@expo/vector-icons'
import Ionicons from 'react-native-vector-icons/Ionicons'

//Configs
import colors from '../configs/colors';

//Criando navegadores
const Stack = createStackNavigator()
const Tab = createBottomTabNavigator();


const StackScreen = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name='Inicio' component={Inicio}/>
    <Stack.Screen name='Listagem' component={Listagem}/>
  </Stack.Navigator>
)

const TabScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        tabBarStyle: {backgroundColor: "#000", opacity: 0.9},
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Mapa') {
            iconName = focused
              ? 'map'
              : 'map-outline';
          }
           else if (route.name === 'Busca') {
            iconName = focused ? 'search' : 'search-outline';
           }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: colors.azul,
        tabBarInactiveTintColor: "white",
      })}
    >

      <Tab.Screen name="Mapa" component={StackScreen} />
      <Tab.Screen name="Busca" component={Busca} />
    </Tab.Navigator>

  );
}

export default TabScreen
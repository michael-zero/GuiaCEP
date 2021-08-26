import * as React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//Telas 
import Inicio from '../screens/Inicio/index'
import Listagem from '../screens/Busca/index'

//Icones
import { MaterialIcons } from '@expo/vector-icons'
import Ionicons from 'react-native-vector-icons/Ionicons'

//Configs
import colors from '../configs/colors';
const Tab = createBottomTabNavigator();


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
           else if (route.name === 'Listagem') {
            iconName = focused ? 'list-circle' : 'list-circle-outline';
           }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: colors.azul,
        tabBarInactiveTintColor: "white",
      })}
    >

      <Tab.Screen name="Mapa" component={Inicio} />
      <Tab.Screen name="Listagem" component={Listagem} />
    </Tab.Navigator>

  );
}

export default TabScreen
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Search from '../screens/Search';
import List from '../screens/List';

const Tab = createMaterialBottomTabNavigator();

export default function TabNavigation() {
    return (
        <NavigationContainer>
          <Tab.Navigator 
            initialRouteName='Buscar'
            activeColor='#EEEDFF'
            inactiveColor='#454555'
            barStyle={{ backgroundColor: '#999FEC' }}
          >
          <Tab.Screen 
            name="Buscar"
            component={Search}
            options={{
              tabBarColor: 'red',
              tabBarLabel: 'Realizar buscas',
              tabBarIcon: ({ color }) => (
                <Ionicons name="search" color={color} size={25}/>
              )
            }}
          />
          <Tab.Screen 
            name="Listar" 
            component={List}
            options={{
              tabBarLabel: 'Realizar consultas',
              tabBarColor: 'red',
              tabBarIcon: ({ color }) => (
                <Ionicons name="list" color={color} size={25}/>
              )
            }} 
          />
        </Tab.Navigator>
        </NavigationContainer>
    );
  }
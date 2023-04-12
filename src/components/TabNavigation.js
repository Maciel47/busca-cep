import * as React from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Search from '../screens/Search';
import List from '../screens/List';

const Tab = createMaterialBottomTabNavigator();

export default function TabNavigation() {
  return (
    <NavigationContainer style={styles.container}>
      <Tab.Navigator 
        initialRouteName='Buscar'
        activeColor='#000'
        inactiveColor='#FFF'
        barStyle={{ backgroundColor: '#999FEC' }}
      >
      <Tab.Screen 
        name="Buscar"
        component={Search}
        options={{
          tabBarLabel: 'Realizar buscas',
          tabBarIcon: ({ color }) => (
            <Ionicons name="search" color={color} size={22}/>
          )
        }}
      />
      <Tab.Screen 
        name="Listar" 
        component={List}
        options={{
          tabBarLabel: 'Realizar consultas',
          tabBarIcon: ({ color }) => (
            <Ionicons name="list" color={color} size={22}/>
          )
        }} 
      />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: StatusBar.currentHeight || 0,
    }
});
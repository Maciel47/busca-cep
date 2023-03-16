import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Search from '../screens/Search';
import List from '../screens/List';

const Tab = createMaterialBottomTabNavigator();

function ScreenRoutesTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName='Buscar'>
      <Tab.Screen 
        name="Buscar"
        component={Search}
        screenOptions={{}} 
      />
      <Tab.Screen 
        name="Listar" 
        component={List} 
      />
    </Tab.Navigator>
    </NavigationContainer>
  );
}

export default ScreenRoutesTabs;
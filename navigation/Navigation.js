import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from '../screens/Home/HomeScreen';
import DetailsScreen from '../screens/Dashboard/DetailsScreen';


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerScreens() {
  return (
    <Drawer.Navigator>
    <Drawer.Screen name="Home" component={HomeScreen} />
    <Drawer.Screen name="Details" component={DetailsScreen} />
  </Drawer.Navigator>
  );
}

function Navigation() {
  return (

    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="HomeStack"
        component={DrawerScreens}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

export default Navigation;

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen.js';


const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
        name="Home" 
        component={HomeScreen}
        options={{title:"Home"}} />

        <Stack.Screen 
        name="Details" 
        component={DetailsScreen} 
        options={{title:"Details"}}/>

        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation

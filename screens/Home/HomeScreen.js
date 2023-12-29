import React from 'react';
import { View, Text, Button } from 'react-native';

import useUserController from '../../controllers/UserControler';


const HomeScreen = ({navigation}) => {
  const { user } = useUserController(1);

  return (
    <View>
      <Text>Welcome to the Home Screen</Text>
      <Text>Thank you for visiting</Text>
    </View>
  );
};

export default HomeScreen;

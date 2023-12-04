// screens/HomeScreen.js
import React from 'react';
import { View, Text } from 'react-native';
// import useUserController from '../controllers/UserController';

const DetailsScreen = () => {
//   const { user } = useUserController(1);

  return (
    <View>
      <Text>Welcome to the DetailsScreen Screen</Text>
      {user && <Text>User: {user.name}</Text>}
    </View>
  );
};

export default DetailsScreen;

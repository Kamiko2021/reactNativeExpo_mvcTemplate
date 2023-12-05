import React from 'react';
import { View, Text, Button } from 'react-native';

import useUserController from '../controllers/UserControler';


const HomeScreen = ({navigation}) => {
  const { user } = useUserController(1);

  return (
    <View>
      <Text>Welcome to the Home Screen</Text>
      {/* {user && <Text>User: {user.name}</Text>} */}

      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
};

export default HomeScreen;

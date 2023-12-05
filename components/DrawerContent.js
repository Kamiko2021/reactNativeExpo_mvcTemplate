// components/DrawerContent.js

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const DrawerContent = ({ navigation }) => {
  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigateToScreen('Home')}>
        <Text style={styles.drawerItem}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigateToScreen('Details')}>
        <Text style={styles.drawerItem}>Details</Text>
      </TouchableOpacity>
      
      {/* Add more TouchableOpacity items for other screens */}

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  drawerItem: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default DrawerContent;

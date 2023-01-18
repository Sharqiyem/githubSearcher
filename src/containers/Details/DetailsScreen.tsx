import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './DetailsScreenStyles';

const HomeScreen: React.FC<{}> = () => {
  return (
    <View style={styles.container}>
      <Text>Details Screen</Text>
    </View>
  );
};

export default HomeScreen;

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeStackNavigator from './HomeStackNavigation';

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <HomeStackNavigator />
    </NavigationContainer>
  );
};
export default RootNavigator;

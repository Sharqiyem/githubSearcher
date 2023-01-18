import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// import HomeScreen from '@containers/Home';
import HomeScreen from '../containers/Home';
import ListScreen from '../containers/List';
import ProfileScreen from '../containers/Profile';

import {HomeStackNavigatorParamList} from './types';

const Stack = createNativeStackNavigator<HomeStackNavigatorParamList>();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="List"
        component={ListScreen}
        options={({route}) => ({
          title: route.params.userName + "'s " + route.params.listType,
        })}
      />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={({route}) => ({
          title: route.params.userName,
        })}
      />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;

import {RouteProp} from '@react-navigation/native';
import {ListType} from '../types';

export type HomeStackNavigatorParamList = {
  Home: undefined;
  Profile: {
    userName: string;
  };
  List: {
    userName: string;
    listType: ListType;
  };
};

export type ProfileScreenRouteProp = RouteProp<
  HomeStackNavigatorParamList,
  'Profile'
>;

export type ListScreenRouteProp = RouteProp<
  HomeStackNavigatorParamList,
  'List'
>;

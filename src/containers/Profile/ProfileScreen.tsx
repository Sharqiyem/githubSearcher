import React from 'react';
import {useRoute} from '@react-navigation/native';
import {Text, View, ActivityIndicator} from 'react-native';
import UserCard from 'src/components/UserCard';
import {ProfileScreenRouteProp} from '../../navigation/types';
import {useFetch} from 'src/hooks';
import {globalStyles} from 'src/utils/globalStyles';
import {User} from 'src/types';
import {BASE_URL} from 'src/utils/constants';

import {styles} from './ProfileStyles';

const url = `${BASE_URL}/users/`;

const ProfileScreen: React.FC<{}> = () => {
  const route = useRoute<ProfileScreenRouteProp>();
  const {userName} = route.params;

  const {data, error, loading} = useFetch<User>(`${url}${userName}`);

  return (
    <View style={styles.container}>
      {error && <Text style={globalStyles.error}>Not found.</Text>}
      {loading && <ActivityIndicator color="blue" />}
      {data && <UserCard data={data} withDetails />}
    </View>
  );
};

export default ProfileScreen;

import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Text, TextInput, View, ActivityIndicator} from 'react-native';
// import UserCard from '@components/UserCard';
import {globalStyles} from 'src/utils/globalStyles';
import {BASE_URL} from 'src/utils/constants';
import {User} from 'src/types';
import {useDebounce, useFetch} from 'src/hooks';
import {styles} from './HomeScreenStyles';
import UserCard from 'src/components/UserCard';
import UserPlaceholder from 'src/components/Placeholder/UserPlaceholder';

const HomeScreen: React.FC<{}> = () => {
  const [userName, setUserName] = useState('');
  const debouncedValue = useDebounce<string>(userName, 500);

  const url = `${BASE_URL}/users/${debouncedValue}`;
  const {data, error, loading} = useFetch<User>(debouncedValue ? url : '');

  return (
    <SafeAreaView style={globalStyles.flex1}>
      <Text style={styles.title}>Search github users</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter user name"
        value={userName}
        onChangeText={setUserName}
      />

      <View style={styles.resultContainer}>
        {error && userName && (
          <Text style={globalStyles.error}>Not found.</Text>
        )}
        {loading && (
          <View>
            <UserPlaceholder />
          </View>
        )}
        {data && <UserCard data={data} withDetails />}
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

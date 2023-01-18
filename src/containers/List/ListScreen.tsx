/* eslint-disable react/no-unstable-nested-components */
import {StackActions, useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';
import {View, Text, ActivityIndicator, FlatList} from 'react-native';
import {User} from 'src/types';
import UserCard from 'src/components/UserCard';
import {globalStyles} from 'src/utils/globalStyles';
import {BASE_URL} from 'src/utils/constants';
import {ListScreenRouteProp} from 'src/navigation/types';
import {useFetch} from 'src/hooks';

import {styles} from './ListStyles';
import UsersPlaceholder from 'src/components/Placeholder/UsersPlaceholder';

const url = `${BASE_URL}/users/`;

const ListScreen: React.FC<{}> = () => {
  const route = useRoute<ListScreenRouteProp>();
  const navigation = useNavigation();
  const {listType, userName} = route.params;

  const {data, error, loading} = useFetch<User[]>(
    `${url}${userName}/${listType}`,
  );

  const openProfile = (username: string) => {
    const pushAction = StackActions.push('Profile', {
      userName: username,
    });
    navigation.dispatch(pushAction);
  };

  const renderListItems = ({item}: {item: User}) => {
    return (
      <UserCard
        onPress={() => openProfile(item.login)}
        data={item}
        withDetails={false}
      />
    );
  };

  return (
    <View style={styles.container}>
      {error && <Text style={globalStyles.error}>Not found.</Text>}
      {loading && (
        <View>
          <UsersPlaceholder />
        </View>
      )}
      {data && (
        <FlatList
          data={data}
          keyExtractor={item => item.login}
          renderItem={renderListItems}
          contentContainerStyle={styles.flatListContentContainer}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          ListEmptyComponent={
            <View style={styles.resultContainer}>
              <Text>Empty list.</Text>
            </View>
          }
        />
      )}
    </View>
  );
};

export default ListScreen;

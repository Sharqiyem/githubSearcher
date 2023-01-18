import {useNavigation, StackActions} from '@react-navigation/native';
import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import {ListType, User} from 'src/types';

import {styles} from './UserCardStyles';

const UserCard = ({
  data,
  onPress,
  withDetails = false,
}: {
  data: User;
  onPress?: () => void;
  withDetails?: boolean;
}) => {
  const navigation = useNavigation();

  const goToList = (listType: ListType) => {
    const pushAction = StackActions.push('List', {
      userName: data.login,
      listType: listType,
    });
    navigation.dispatch(pushAction);
  };

  const renderDetails = () => {
    return (
      <>
        <View style={styles.row}>
          <Text style={styles.title}>Name</Text>
          <Text style={styles.value}>{data.name}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.title}>Description</Text>
          <Text style={styles.value}>{data.bio}</Text>
        </View>

        <View style={styles.row}>
          <TouchableOpacity onPress={() => goToList(ListType.followers)}>
            <Text>
              <Text style={styles.title}>{data.followers}</Text> followers
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => goToList(ListType.following)}>
            <Text>
              <Text style={styles.title}>{data.following}</Text> following
            </Text>
          </TouchableOpacity>
        </View>
      </>
    );
  };
  return (
    <TouchableOpacity
      onPress={() => onPress?.()}
      activeOpacity={1}
      style={styles.container}>
      <Image style={styles.avatar} source={{uri: data.avatar_url}} />
      <View style={styles.row}>
        <Text style={styles.title}>Username</Text>
        <Text style={styles.value}>{data.login}</Text>
      </View>
      {withDetails ? renderDetails() : null}
    </TouchableOpacity>
  );
};

export default UserCard;

import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {View} from 'react-native';
import {styles} from './PlaceholderStyles';

const UserPlaceholder = ({short = false}: {short?: boolean}) => {
  return (
    <View style={{}}>
      <SkeletonPlaceholder borderRadius={10}>
        <View style={styles.center}>
          <View style={styles.avatar} />
          <View style={styles.row}>
            <View style={styles.item1} />
            <View style={styles.item2} />
          </View>
          {!short ? (
            <>
              <View style={styles.row}>
                <View style={styles.item1} />
                <View style={styles.item2} />
              </View>
              <View style={styles.row}>
                <View style={styles.item1} />
                <View style={styles.item2} />
              </View>
              <View style={styles.row}>
                <View style={styles.item1} />
                <View style={styles.item2} />
              </View>
              <View style={styles.row}>
                <View style={styles.item1} />
                <View style={styles.item2} />
              </View>
            </>
          ) : null}
        </View>
      </SkeletonPlaceholder>
    </View>
  );
};

export default UserPlaceholder;

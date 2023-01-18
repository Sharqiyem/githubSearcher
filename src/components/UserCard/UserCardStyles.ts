import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    width: '100%',
  },
  avatar: {
    height: 100,
    width: 100,
    alignSelf: 'center',
    borderRadius: 100,
    borderColor: '#e7e7e7',
    borderWidth: 1,
    resizeMode: 'contain',
  },
  title: {
    fontWeight: '700',
    fontSize: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    borderBottomColor: '#e7e7e7',
    borderBottomWidth: 1,
  },
});

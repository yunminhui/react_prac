import React from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';

import UserProducts from './UserProducts';

const User = () => (
  <View style={styles.userContainer}>
    <View style={styles.faceContainer}>
      <Image style={{width: 80, height: 80}} source={require('./face.png')} />
    </View>
    <UserProducts />
  </View>
);

const styles = StyleSheet.create({
  userContainer: {
    width: '100%',
    height: 150,
    borderBottomWidth: 2,
    borderBottomColor: '#1d8830',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  faceContainer: {
    width: 100,
    height: 100,
    borderRadius: 100,
    backgroundColor: '#b1d7cd',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default User;

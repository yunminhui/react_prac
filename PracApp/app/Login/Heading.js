import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const Heading = () => (
  <View style={styles.header}>
    <Image style={{height: 70, width: 280}} source={require('./name.png')} />
  </View>
);

const styles = StyleSheet.create({
  header: {
    marginTop: 250,
    marginBottom: 100,
    alignItems: 'center',
  },
});

export default Heading;

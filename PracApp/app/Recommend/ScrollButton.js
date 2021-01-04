import React from 'react';
import {Image, TouchableOpacity, StyleSheet} from 'react-native';

const ScrollButton = () => (
  <TouchableOpacity>
    <Image style={styles.button} source={require('./img/다각형2.png')} />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    margin: 10,
    height: 30,
    alignItems: 'center',
  },
});

export default ScrollButton;

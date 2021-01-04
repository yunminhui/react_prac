import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Text, TouchableHighlight, StyleSheet} from 'react-native';

const AddButton = () => {
  const navigation = useNavigation();
  return (
    <TouchableHighlight
      style={styles.plusButton}
      onPress={() => navigation.navigate('Registration')}>
      <Text style={styles.plus}>+</Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  plusButton: {
    width: 70,
    height: 70,
    backgroundColor: '#FFCF44',
    borderRadius: 100,
    alignItems: 'center',
    position: 'absolute',
    right: 30,
    bottom: 50,
  },
  plus: {
    fontSize: 55,
    color: 'white',
  },
});

export default AddButton;

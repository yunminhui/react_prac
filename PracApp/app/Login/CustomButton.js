import React from 'react';
import {View, TouchableHighlight, Text, StyleSheet, Button} from 'react-native';

const CustomButton = ({navigation}) => {
  return (
    <View style={styles.buttonContainer}>
      <TouchableHighlight
        navigation={{navigation}}
        onPress={() => navigation.navigate('Choice')}
        style={styles.button}>
        <Text style={styles.login}>Login</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    //alignItems: 'flex-end',
    //paddingTop: 50,
  },
  button: {
    height: 50,
    backgroundColor: '#277e27',
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  login: {
    color: '#f1eeee',
    fontWeight: '300',
    fontSize: 24,
  },
});

export default CustomButton;

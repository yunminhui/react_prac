import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import TextInputNativeCommands from 'react-native/Libraries/Components/TextInput/TextInputNativeCommands';

const Input = ({inputId, placeholder, isSecure}) => (
  <View style={styles.inputContainer}>
    <TextInput
      value={inputId}
      style={styles.input}
      placeholder={placeholder}
      placeholderTextColor="#CACACA"
      selectionColor="#666666"
      secureTextEntry={isSecure}
    />
  </View>
);

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 10,
    marginLeft: 30,
    marginRight: 30,
    shadowOpacity: 0.2,
    shadowColor: '#000000',
    shadowOffset: {width: 2, height: 2},
  },
  input: {
    height: 60,
    backgroundColor: '#ffffff',
    paddingLeft: 10,
    paddingRight: 10,
  },
});

export default Input;

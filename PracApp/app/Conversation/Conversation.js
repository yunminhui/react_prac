import * as React from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  Button,
  TouchableOpacity,
} from 'react-native';

const Conversation = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header} />
      <View style={styles.conversationContainer}>
        <Text>Conversation</Text>
      </View>
      <View style={styles.textContainer}>
        <TextInput
          style={styles.textInput}
          placeholder={'메시지를 입력하세요'}
          placeholderTextColor="#666666"
        />
        <TouchableOpacity style={styles.submitBtn}>
          <Text>^</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: 'white',
    height: 100,
    width: '100%',
  },
  conversationContainer: {
    backgroundColor: '#F0FFFF',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '80%',
    marginBottom: 10,
  },
  textContainer: {
    borderWidth: 1,
    borderColor: '#277e27',
    borderRadius: 10,
    height: 50,
    width: '90%',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    padding: 10,
  },
  textInput: {
    width: '90%',
    padding: 5,
  },
  submitBtn: {
    backgroundColor: '#277e20',
    width: 40,
    height: 40,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Conversation;

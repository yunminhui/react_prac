import React from 'react';
import {StyleSheet, View} from 'react-native';
import Heading from './Heading';
import Input from './Input';
import CustomButton from './CustomButton';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Heading />
      <Input isSecure={false} placeholder="ID를 입력하세요." />
      <Input isSecure={true} placeholder="비밀번호를 입력하세요." />
      <CustomButton navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingTop: 30,
  },
});

export default HomeScreen;

import React from 'react';
// import {useNavigation} from '@react-navigation/native';
import {Image, Text, TouchableOpacity, View, StyleSheet} from 'react-native';

const EnrollButton = ({navigation}) => {
  // const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate('Feed')}>
      <View style={styles.completeButton}>
        <Image
          style={{width: 80, height: 80}}
          source={require('./img/shopping_cart.png')}
        />
        <Text style={styles.textStyle}>등록</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  completeButton: {
    marginTop: 15,
    width: 80,
    height: 80,
    alignItems: 'center',
  },
  textStyle: {
    color: 'white',
    fontSize: 20,
    marginTop: 8,
  },
});

export default EnrollButton;

import React, {useState} from 'react';
import {View, StyleSheet, Image, Text, TouchableHighlight} from 'react-native';

import Card from '../Feed/card';
import {useSelector} from 'react-redux';

// const ProfileImage = () => (
// 	<Image style={style.}>)

const Seller = ({navigation}) => {
  const products = useSelector((state) => state.productReducer.products);

  return (
    <View style={styles.container}>
      <View style={styles.userContainer}>
        <Image style={styles.profileImage} source={require('./face.png')} />
        <View style={styles.itemInformation}>
          <Text style={styles.informationText}>5</Text>
          <Text style={styles.informationText}>상품수량</Text>
        </View>
        <View style={styles.itemInformation}>
          <Text style={styles.informationText}>10</Text>
          <Text style={styles.informationText}>거래량</Text>
        </View>
      </View>
      <View style={styles.productContainer}>
        {products.map((product, index) => (
          <Card
            productName={product.name}
            price={product.price}
            dDay={product.dDay}
            key={index}
          />
        ))}
      </View>
      <TouchableHighlight
        style={styles.plusButton}
        onPress={() => navigation.navigate('Registration')}>
        <Text style={styles.plus}>+</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userContainer: {
    height: 150,
    borderBottomWidth: 2,
    borderBottomColor: '#1d8830',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 100,
    backgroundColor: '#b1d7cd',
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemInformation: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  informationText: {
    fontSize: 23,
    marginTop: 10,
    color: '#045D56',
  },
  productContainer: {
    alignItems: 'center',
    paddingTop: 20,
  },
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

export default Seller;

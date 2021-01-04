import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const Card = ({dDay, productName, price}) => {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.heading}>
          <Text style={[styles.headingText, {position: 'absolute', left: 10}]}>
            판매자
          </Text>
          <Text style={[styles.headingText, {position: 'absolute', right: 20}]}>
            D-day : {dDay}
          </Text>
        </View>
        <View style={styles.ImgContainer}>
          <Image source={require('../Recommend/img/potato.png')} />
          <View>
            <Text style={styles.ProductContent}>상품명 : {productName}</Text>
            <Text style={styles.ProductContent}>₩ {price} (kg)</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '95%',
    height: 140,
    margin: 10,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#666262',
    borderRadius: 5,
    backgroundColor: '#fefefe',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.5,
  },
  heading: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headingText: {
    fontSize: 20,
    alignContent: 'space-between',
  },
  ImgContainer: {
    flexDirection: 'row',
    margin: 5,
  },
  ProductContent: {
    fontSize: 20,
    alignItems: 'center',
    paddingLeft: 20,
    marginTop: 6,
  },
});

export default Card;

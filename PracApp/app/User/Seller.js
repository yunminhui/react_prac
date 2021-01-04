import React, {useState} from 'react';
import {View, StyleSheet, Image, Text, TouchableHighlight} from 'react-native';
import {connect, useSelector} from 'react-redux';

import Card from '../feed/card';
import AddButton from './AddButton';
import User from './User';

const Seller = ({navigation}) => {
  const products = useSelector((state) => state.productReducer.products);

  return (
    <View style={styles.container}>
      <User />
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
      <AddButton />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  productContainer: {
    alignItems: 'center',
    paddingTop: 20,
  },
});

const mapStateToProps = (state) => ({
  products: state.productReducer.products, // Book 컴포넌트는 props.books를 통해 리덕스 스토어의 books에 접근할 수 있다.
});

// export default Seller;
export default connect(mapStateToProps)(Seller);

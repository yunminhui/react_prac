import React, {Component} from 'react';
import {View, StyleSheet, TouchableHighlight, ScrollView} from 'react-native';

import Card from './card';
import Heading from './Heading';
import {connect} from 'react-redux';

class Feed extends Component {
  render() {
    const {products} = this.props;
    return (
      <View style={styles.container}>
        {/*<Heading />*/}
        <View style={styles.cardbox}>
          {products.map((product) => (
            <Card
              productName={product.name}
              price={product.price}
              dDay={product.dDay}
            />
          ))}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  cardbox: {
    alignSelf: 'center',
    height: '80%',
    width: '90%',
    paddingTop: 20,
  },
});

const mapStateToProps = (state) => ({
  products: state.productReducer.products,
});

export default connect(mapStateToProps)(Feed);

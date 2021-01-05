import {Component} from 'react';
import * as React from 'react';
import {
  View,
  TextInput,
  Button,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  TouchableHighlight,
} from 'react-native';
import {addProduct, removeProduct} from '../reducers/action';
import {connect} from 'react-redux';

import productReducer from '../reducers/productReducer';
import Card from '../Feed/card';

const initialState = {
  name: '',
  price: '',
  dDay: '',
};

class Registration extends Component {
  state = initialState;
  navigation = this.props.navigation;

  updateInput = (key, value) => {
    this.setState({
      ...this.state,
      [key]: value,
    });
  };

  addProduct = () => {
    this.props.dispatchAddProduct(this.state);
    this.setState(initialState);
  };

  removeProduct = (product) => {
    this.props.dispatchRemoveProduct(product);
  };

  render() {
    const {products} = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>상품 정보 입력</Text>
        <TextInput
          value={this.state.name}
          onChangeText={(value) => this.updateInput('name', value)}
          style={styles.inputContainer}
          placeholder="상품을 입력하세요"
        />
        <TextInput
          value={this.state.price}
          onChangeText={(value) => this.updateInput('price', value)}
          style={styles.inputContainer}
          placeholder="가격을 입력하세요"
        />
        <TextInput
          value={this.state.dDay}
          onChangeText={(value) => this.updateInput('dDay', value)}
          style={styles.inputContainer}
          placeholder="유통기한을 입력하세요"
        />
        <TouchableOpacity style={styles.photoButton}>
          <Text style={styles.photoText}>사진 등록하기</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.registerButton}
          onPress={() => {
            this.addProduct();
            this.navigation.goBack();
          }}>
          <Text style={styles.registerText}>등록하기</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

// const Registration = ({navigation}) => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.headerText}>상품 정보 입력</Text>
//       <TextInput
//         value={this.state.name}
//         onChangeText={(value) => this.updateInput('name', value)}
//         style={styles.inputContainer}
//         placeholder="상품을 입력하세요"
//       />
//       <TextInput
//         value={this.state.price}
//         onChangeText={(value) => this.updateInput('price', value)}
//         style={styles.inputContainer}
//         placeholder="가격을 입력하세요"
//       />
//       <TextInput
//         value={this.state.dDay}
//         onChangeText={(value) => this.updateInput('dDay', value)}
//         style={styles.inputContainer}
//         placeholder="유통기한을 입력하세요"
//       />
//       <TouchableOpacity style={styles.photoButton}>
//         <Text style={styles.photoText}>사진 등록하기</Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.registerButton} onPress={this.addProduct}>
//         <Text style={styles.registerText}>등록하기</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 35,
    margin: 50,
    fontWeight: '500',
    color: '#605e5e',
  },
  photoButton: {
    width: 300,
    height: 50,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 10,
    borderColor: '#918f8f',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },
  photoText: {
    fontSize: 25,
    fontWeight: '500',
    color: '#888888',
  },
  inputContainer: {
    width: 300,
    height: 80,
    alignItems: 'center',
    borderBottomWidth: 1,
    marginTop: 5,
    fontSize: 20,
    shadowOpacity: 0.2,
    shadowColor: '#000000',
    shadowOffset: {width: 2, height: 2},
  },
  registerButton: {
    width: 300,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1d8830',
    borderRadius: 5,
    marginTop: 130,
  },
  registerText: {
    fontSize: 25,
    fontWeight: '500',
    color: 'white',
  },
});

const mapDispatchToProps = {
  dispatchAddProduct: (product) => addProduct(product),
  dispatchRemoveProduct: (product) => removeProduct(product),
};

const mapStateToProps = (state) => ({
  products: state.productReducer.products,
});

export default connect(mapStateToProps, mapDispatchToProps)(Registration);

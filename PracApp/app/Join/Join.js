import {Component} from 'react';
// JSX, component, useState
import * as React from 'react';
// mobile component
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
// handle global state
import {connect, useSelector} from 'react-redux';
import {addUser, authUser} from '../UserReducer/actions';

const initialState = {
  name: '',
  id: '',
  pw: '',
};

class Join extends Component {
  state = initialState;
  navigation = this.props.navigation;

  updateInput = (key, value) => {
    this.setState({
      ...this.state,
      [key]: value,
    });
  };

  addUser = () => {
    this.props.dispatchAddUser(this.state);
    this.setState(initialState);
  };
  authUser = () => {
    this.props.dispatchAuthUser(this.state);
    this.setState(initialState);
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>회원가입</Text>
        <TextInput
          value={this.state.name}
          onChangeText={(value) => this.updateInput('name', value)}
          style={styles.inputContainer}
          placeholder="이름을 입력하세요"
        />
        <TextInput
          value={this.state.price}
          onChangeText={(value) => this.updateInput('id', value)}
          style={styles.inputContainer}
          placeholder="아이디을 입력하세요"
        />
        <TextInput
          value={this.state.pw}
          onChangeText={(value) => this.updateInput('pw', value)}
          style={styles.inputContainer}
          placeholder="비밀번호를 입력하세요"
        />
        <View style={styles.infoContainer}>
          <TouchableOpacity style={styles.infoButton}>
            <Text style={styles.infoText}>구매자</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.infoButton}>
            <Text style={styles.infoText}>판매자</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.registerButton}
          onPress={() => {
            this.addUser();
            this.navigation.navigate('HomeScreen');
          }}>
          <Text style={styles.registerText}>등록하기</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

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
  infoContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  infoButton: {
    width: 140,
    height: 50,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 10,
    borderColor: '#918f8f',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  infoText: {
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

const mapStateToProps = (state) => ({
  users: state.userReducer.users,
});

const mapDispatchToProps = {
  dispatchAddUser: (user) => addUser(user),
  dispatchAuthUser: (user) => authUser(user),
};

export default connect(mapStateToProps, mapDispatchToProps)(Join);

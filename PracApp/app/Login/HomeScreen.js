import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableHighlight} from 'react-native';
import Heading from './Heading';
import Input from './Input';
import CustomButton from './CustomButton';

import {connect} from 'react-redux';
// import {useSelector} from 'react-native';

const initialState = {
  id: '',
  pw: '',
};

class HomeScreen extends Component {
  state = initialState;
  navigation = this.props.navigation;

  dispatch = this.props.dispatch;
  //onPress = {() => dispatch(aMethod)

  render() {
    return (
      <View style={styles.container}>
        <Heading />
        <Input isSecure={false} placeholder="ID를 입력하세요." />
        <Input isSecure={true} placeholder="비밀번호를 입력하세요." />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <TouchableHighlight
              navigation={this.navigation}
              onPress={() => this.navigation.navigate('Join')}>
              <Text style={styles.join}>Join</Text>
            </TouchableHighlight>
          </View>
          <CustomButton navigation={this.navigation} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingTop: 30,
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingLeft: 170,
    paddingTop: 20,
  },
  button: {
    height: 50,
    borderColor: '#277e27',
    borderWidth: 1,
    width: 100,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  join: {
    color: '#277e27',
    fontWeight: '300',
    fontSize: 24,
  },
});

const mapStateToProps = (state) => ({
  users: state.productReducer.users,
});

export default connect(mapStateToProps)(HomeScreen);

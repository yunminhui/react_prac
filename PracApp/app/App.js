import {Component} from 'react';
import * as React from 'react';
import HomeScreen from './Login/HomeScreen';
import Recommend from './Recommend/Recommend';
import Feed from './feed/feed';
import Choice from './Choice/Choice';
import Registration from './Registration/Registration';
import Seller from './User/Seller';
import Join from './Join/Join';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from './reducers';

const Stack = createStackNavigator();
const store = createStore(rootReducer);

class App extends Component {
  // state = {
  //   id: '',
  //   password: '',
  // };
  //
  // submit = () => {
  //   if (this.state.id === '' || this.state.password === '') {
  //     alert('Please complete form!');
  //     return;
  //   }
  //   const user = {
  //     id: this.state.id,
  //     password: this.state.password,
  //   };
  //
  //   // this.props.screenProps.addUser(user);
  //   this.setState(
  //     {
  //       id: '',
  //       password: '',
  //       isLogin: false,
  //     },
  //     () => {
  //       this.props.navigation.navigate('Recommend');
  //     },
  //   );
  // };

  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="HomeScreen">
            <Stack.Screen
              name="HomeScreen"
              component={HomeScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Join"
              component={Join}
              options={{headerShown: false}}
            />
            <Stack.Screen name="Choice" component={Choice} />
            <Stack.Screen
              name="Recommend"
              component={Recommend}
              options={{
                headerTransparent: true,
                headerTitle: false,
                headerTintColor: 'white',
              }}
            />
            <Stack.Screen name="Registration" component={Registration} />
            <Stack.Screen
              name="Feed"
              component={Feed}
              options={{
                headerStyle: {backgroundColor: '#1d8830'},
                headerTintColor: 'white',
                headerTitle: '잉여상품',
              }}
            />
            <Stack.Screen
              name="Seller"
              component={Seller}
              options={{headerTitle: '판매자'}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}

export default App;

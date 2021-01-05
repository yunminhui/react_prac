import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import Choice from './Choice/Choice';
import Feed from './Feed/feed';
import HomeScreen from './Login/HomeScreen';
import Recommend from './Recommend/Recommend';
import Registration from './Registration/Registration';
import Seller from './User/Seller';

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
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
  );
};

export default Navigator;

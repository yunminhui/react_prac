import 'react-native-get-random-values';
import {v4 as uuidV4} from 'uuid';

export const ADD_USER = 'ADD_USER';
export const AUTH_USER = 'AUTH_USER';

export const addUser = (user) => {
  return {
    type: ADD_USER,
    user: {
      ...user,
      id: uuidV4,
    },
  };
};

export const authUser = (user) => {
  return {
    type: AUTH_USER,
    user,
  };
};

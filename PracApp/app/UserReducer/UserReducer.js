import 'react-native-get-random-values';
import {v4 as uuidV4} from 'uuid';

import {ADD_USER, AUTH_USER} from './actions.js';

const initialState = {
  users: [
    {id: 'user', pw: '1234', name: 'mini', info: 'buyer', auth: uuidV4()},
  ],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        users: [...state.users, action.user],
      };
    case AUTH_USER:
      return {
        users: [action.user],
      };
    default:
      return state;
  }
};

export default userReducer;

import {combineReducers} from 'redux';
import productReducer from './productReducer';
import userReducer from '../UserReducer/UserReducer';

const rootReducer = combineReducers({
  productReducer,
  userReducer,
});

export default rootReducer;

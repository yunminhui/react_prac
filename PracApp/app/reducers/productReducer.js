import 'react-native-get-random-values';
import {v4 as uuidV4} from 'uuid';

import {ADD_PRODUCT, REMOVE_PRODUCT} from './action';

const initialState = {
  products: [{name: 'potato', price: '5,000', dDay: '5', id: uuidV4()}],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        products: [...state.products, action.product],
      };
    case REMOVE_PRODUCT:
      const index = state.products.findIndex(
        (product) => product.id === action.id,
      );
      return {
        products: [
          ...state.products.slice(0, index),
          ...state.products.slice(index + 1),
        ],
      };
    default:
      return state;
  }
};

export default productReducer;

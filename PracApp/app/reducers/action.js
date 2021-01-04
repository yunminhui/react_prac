import 'react-native-get-random-values';
import {v4 as uuidV4} from 'uuid';

export const ADD_PRODUCT = 'ADD_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';

export const addProduct = (product) => {
  return {
    type: ADD_PRODUCT,
    product: {
      ...product,
      id: uuidV4,
    },
  };
};

export const removeProduct = (product) => {
  return {
    type: REMOVE_PRODUCT,
    product,
  };
};

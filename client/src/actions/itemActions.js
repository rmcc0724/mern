// import axios from 'axios';
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from './types';
// import { tokenConfig } from './authActions';
// import { returnErrors } from './errorActions';

export const getItems = () => {
  return {
        type: GET_ITEMS
  }      
};       
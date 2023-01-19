import * as types from "./actionTypeS";

import axios from "axios";

const getProductsRequest = () => {
  return {
    type: types.GET_PRODUCTS_REQUEST,
  };
};

const getProductsSuccess = (payload) => {
  return {
    type: types.GET_PRODUCTS_SUCCESS,
    payload,
  };
};

const getProductssError = () => {
  return {
    type: types.GET_PRODUCTS_FAILURE,
  };
};

const getProducts = (name) => (dispatch) => {
  dispatch(getProductsRequest());
  return axios
    .get(`https://brainy-goat-shoulder-pads.cyclic.app/${name}`)
    .then((r) => {
      dispatch(getProductsSuccess(r.data));
    })
    .catch((e) => {
      dispatch(getProductssError());
    });
};

export { getProducts };

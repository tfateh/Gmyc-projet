import {
    ADD_PRODUCT,
    ADD_PRODUCT_FAILED,
    ADD_PRODUCT_SUCCESS,
    DELETE_PRODUCT,
    DELETE_PRODUCT_FAILED,
    DELETE_PRODUCT_SUCCESS,
    GET_PRODUCTS,
    GET_PRODUCTS_FAILED,
    GET_PRODUCTS_SUCCESS,
    UPDATE_PRODUCT,
    UPDATE_PRODUCT_FAILED,
    UPDATE_PRODUCT_SUCCESS,
  } from "../actiontypes/productstypes";
  
  const initialState = {
    loading: false,
    products: [],
    errors: [],
  };
  
  const productsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case GET_PRODUCTS:
      case UPDATE_PRODUCT:
      case ADD_PRODUCT:
      case DELETE_PRODUCT:
        return {
          ...state,
          loading: true,
        };
  
      case GET_PRODUCTS_SUCCESS:
        return {
          ...state,
          loading: false,
          products: payload.allProducts,
          msg: payload.msg,
        };
  
      case UPDATE_PRODUCT_SUCCESS:
      case DELETE_PRODUCT_SUCCESS:
      case ADD_PRODUCT_SUCCESS:
        return {
          ...state,
          loading: false,
          msg: payload.msg,
        };
  
      case GET_PRODUCTS_FAILED:
      case UPDATE_PRODUCT_FAILED:
      case ADD_PRODUCT_FAILED:
      case DELETE_PRODUCT_FAILED:
        return {
          ...state,
          loading: false,
          errors: payload,
        };
  
      default:
        return state;
    }
  };
  
  export default productsReducer;
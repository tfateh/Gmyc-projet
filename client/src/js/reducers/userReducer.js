import {
    GET_USER_BY_ID,
    GET_USER_BY_ID_FAILED,
    GET_USER_BY_ID_SUCCESS,
  } from "../actiontypes/usertypes";
  
  const initialState = {
    user: {},
    products: [],
    loading: false,
    errors: [],
  };
  
  const userReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case GET_USER_BY_ID:
        return {
          ...state,
          loading: true,
        };
  
      case GET_USER_BY_ID_SUCCESS:
        return {
          ...state,
          loading: false,
          user: payload.user,
          products: payload.user.products,
        };
  
      case GET_USER_BY_ID_FAILED:
        return {
          ...state,
          loading: false,
          errors: payload.errors,
        };
  
      default:
        return state;
    }
  };
  
  export default userReducer;
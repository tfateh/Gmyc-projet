import axios from "axios";
import { GET_AUTH_USER, GET_AUTH_USER_FAILED, GET_AUTH_USER_SUCCESS, LOG_OUT, SIGN_IN, SIGN_IN_FAILED, SIGN_IN_SUCCESS, SIGN_UP, SIGN_UP_FAILED, SIGN_UP_SUCCESS } from "../actiontypes/authTypes";
  
  export const signUp = (newUser) => async (dispatch) => {
    dispatch({ type: SIGN_UP });
  
    try {
      const response = await axios.post("/auth/register", newUser);
  
      localStorage.setItem("token", response.data.token);
  
      dispatch({ type: SIGN_UP_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: SIGN_UP_FAILED, payload: error.response.data });
    }
  };
  export const signIn = (userCred) => async (dispatch) => {
    dispatch({ type: SIGN_IN });
  
    try {
      const response = await axios.post("/auth/login", userCred);
  
      localStorage.setItem("token", response.data.token);
  
      dispatch({ type: SIGN_IN_SUCCESS, payload: response.data.token });
    } catch (error) {
      console.log(error);
      dispatch({ type: SIGN_IN_FAILED, payload: error.response.data });
    }
  };
  
  /*****************************  get auth user action creator ***************** */
  
  export const getAuthUser = () => async (dispatch) => {
    dispatch({ type: GET_AUTH_USER });
  
    try {
      const config = {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      };
  
      const response = await axios.get("/auth/currentUser", config);
  
      dispatch({ type: GET_AUTH_USER_SUCCESS, payload: response.data });
    } catch (error) {
      // console.log(error);
      // localStorage.removeItem("token");
      dispatch({ type: GET_AUTH_USER_FAILED, payload: error.response.data });
    }
  };
  
  // Log out
  
  export const logout = () => async (dispatch) => {
    dispatch({ type: LOG_OUT });
    localStorage.removeItem("token");
  };
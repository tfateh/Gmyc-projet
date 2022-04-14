import { combineReducers } from "redux";
import productsReducer from "./productReducer";
import authReducer from "./authReducer";
import userReducer from "../reducers/userReducer";

const rootReducer=combineReducers({
    authReducer, productsReducer, userReducer
});

export default rootReducer;
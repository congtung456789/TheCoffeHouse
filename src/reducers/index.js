import { combineReducers } from "redux";
import authReducer from "./authReducer";
// định nghĩa các reducer khác ...
import cartReducer from "./cartReducer";

const rootReducer = combineReducers({
  authReducer,
  cartReducer,
  // add Reducer
});

export default rootReducer;

import { combineReducers } from "redux";
import userReducer from "./user";
import contentReducer from "./content";

export default combineReducers({
  user: userReducer,
  content: contentReducer,
});

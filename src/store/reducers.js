import { combineReducers } from "redux";
import { dogReducer } from "./dogs/reducer";

export default combineReducers({
  dogs: dogReducer
});

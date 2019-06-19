/*
 src/reducers/rootReducer.js
*/

import { combineReducers } from "redux";
import quoteReducer from "./quoteReducer";

export default combineReducers({
  quoteReducer
});

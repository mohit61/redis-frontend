import { combineReducers } from "redux";
import {
  setResult,
  getResult,
  expResult,
  delResult,
  remResult,
  zaddResult,
  zrangeResult,
  checkResult,
  zrankResult,
} from "./keyValue";

const rootReducer = combineReducers({
  setResult,
  getResult,
  expResult,
  delResult,
  remResult,
  zaddResult,
  zrangeResult,
  checkResult,
  zrankResult,
});

export default rootReducer;

import UpdateReducer from "./update";
import { combineReducers } from "redux";

const allRed =  combineReducers({
    update: UpdateReducer})
export default allRed
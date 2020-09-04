import { combineReducers } from "redux";
import databaseReducer from './databaseReducer';
import scrapperReducer from './scrapperReducer';

export default combineReducers({ databaseReducer, scrapperReducer });
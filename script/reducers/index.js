import databaseReducer from './databaseReducer';
import scrapperReducer from './scrapperReducer';
import socketReducer from './socketReducer';
import { combineReducers } from 'redux';

export const reducers = combineReducers({
    db: databaseReducer,
    scrapper: scrapperReducer,
    socket: socketReducer
});
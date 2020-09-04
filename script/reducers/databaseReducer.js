import { CONNECT_DB, DUMP_DB, CLOSE_DB } from '../constants/actionTypes';

export default databaseReducer = (state = {}, action) => {
    switch (action.type) {
        case CONNECT_DB || DUMP_DB || CLOSE_DB:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}
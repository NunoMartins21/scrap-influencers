import { CONNECT_DB, DUMP_DB, CLOSE_DB } from '../constants/actionTypes';

const initialState = {
    connected: false,
    dumped: false
}

const databaseReducer = (state = initialState, action) => {
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

export default databaseReducer;
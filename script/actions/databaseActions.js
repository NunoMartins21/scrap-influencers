import * as actionTypes from '../constants/actionTypes';

export const connect_db = () => {
    return {
        type: actionTypes.CONNECT_DB,
        payload: {
            db: {
                connected: true
            }
        }
    }
}

export const close_db = () => {
    return {
        type: actionTypes.CONNECT_DB,
        payload: {
            db: {
                connected: false
            }
        }
    }
}

export const dump_db = () => {
    return {
        type: actionTypes.CONNECT_DB,
        payload: {
            db: {
                dumped: true
            }
        }
    }
}
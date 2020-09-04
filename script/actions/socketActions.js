import * as actionTypes from '../constants/actionTypes';

export const start_socket = () => {
    return {
        type: actionTypes.START_SOCKET,
        payload: {
            socket: {
                connected: true
            }
        }
    }
}

export const close_socket = () => {
    return {
        type: actionTypes.CLOSE_SOCKET,
        payload: {
            socket: {
                connected: false
            }
        }
    }
}
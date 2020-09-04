import { START_SOCKET, CLOSE_SOCKET } from '../constants/actionTypes'

const initialState = {
    connected: false,
    clients: 0
}

const socketReducer = (state = initialState, action) => {
    switch (action.type) {
        case START_SOCKET || CLOSE_SOCKET:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

export default socketReducer;
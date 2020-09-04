import { START_SOCKET, CLOSE_SOCKET } from '../constants/actionTypes'

export default scrapperReducer = (state = {}, action) => {
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
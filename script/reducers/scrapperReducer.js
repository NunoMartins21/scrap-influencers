import { START_SCRAPPING, STOP_SCRAPPING } from '../constants/actionTypes'

export default scrapperReducer = (state = {}, action) => {
    switch (action.type) {
        case START_SCRAPPING || STOP_SCRAPPING:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}
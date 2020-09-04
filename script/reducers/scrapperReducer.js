import { START_SCRAPPING, STOP_SCRAPPING, SCRAPPING_ERROR } from '../constants/actionTypes'

const initialState = {
    isScrapping: false,
    scrapped: 0,
    influencers: {}
};

const scrapperReducer = (state = initialState, action) => {
    switch (action.type) {
        case START_SCRAPPING:
        case STOP_SCRAPPING:
        case SCRAPPING_ERROR:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

export default scrapperReducer;
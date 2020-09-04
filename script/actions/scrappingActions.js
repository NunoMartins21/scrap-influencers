import * as actionTypes from '../constants/actionTypes';

export const start_scrapping = () => {
    return {
        type: actionTypes.START_SCRAPPING,
        payload: {
            scrapper: {
                started: true
            }
        }
    }
}

export const stop_scrapping = (data) => {
    return {
        type: actionTypes.STOP_SCRAPPING,
        payload: {
            scrapper: {
                started: false,
                scrapped: data.scrapped,
                influencers: data.influencers
            }
        }
    }
}
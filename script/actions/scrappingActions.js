import * as actionTypes from '../constants/actionTypes';

export const start_scrapping = () => {
    return {
        type: actionTypes.START_SCRAPPING,
        payload: {
            isScrapping: true,
            startedAt: new Date().toLocaleString()
        }
    }
}

export const stop_scrapping = (data) => {
    return {
        type: actionTypes.STOP_SCRAPPING,
        payload: {
            isScrapping: false,
            endedAt: new Date().toLocaleString(),
            scrapped: data.scrapped,
            influencers: data.influencers,
            data: data
        }
    }
}

export const scrapping_error = (error) => {
    return {
        type: actionTypes.SCRAPPING_ERROR,
        payload: {
            isScrapping: false,
            endedAt: new Date().toLocaleString(),
            error: error
        }
    }
}

export const scrapping = (scrapper) => {
    return dispatch => {
        dispatch(start_scrapping());
        return scrapper.startScrapping()
            .then(res => {
                dispatch(stop_scrapping(res));
            });
    }
}
import * as actionTypes from '../constants/actionTypes';

export const start_scrapping = () => {
    return {
        type: actionTypes.START_SCRAPPING,
        payload: {
            scrapper: {
                isScrapping: true,
                startedAt: Date.now().toLocaleString()
            }
        }
    }
}

export const stop_scrapping = (data) => {
    return {
        type: actionTypes.STOP_SCRAPPING,
        payload: {
            scrapper: {
                isScrapping: false,
                endedAt: Date.now().toLocaleString(),
                scrapped: data.scrapped,
                influencers: data.influencers
            }
        }
    }
}

export const scrapping_error = (error) => {
    return {
        type: actionTypes.SCRAPPING_ERROR,
        payload: {
            scrapper: {
                isScrapping: false,
                endedAt: Date.now().toLocaleString(),
                error: error
            }
        }
    }
}

export const scrapping = (scrapper) => {
    return dispatch => {
        dispatch(start_scrapping());
        return scrapper.startScrapping()
            .then(res => {
                dispatch(stop_scrapping());
            })
            .catch(err => {
                dispatch(scrapping_error(err));
            });
    }
}
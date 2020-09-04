import * as actionTypes from '../constants/actionTypes';

export const add_hashtags = (hashtags) => {
    return {
        type: actionTypes.ADD_HASHTAGS,
        payload: {
            hashtags: hashtags
        }
    }
}

export const edit_hashtags = (hashtags) => {
    return {
        type: actionTypes.EDIT_HASHTAGS,
        payload: {
            hashtags: hashtags
        }
    }
}

export const delete_hashtags = (hashtags) => {
    return {
        type: actionTypes.DELETE_HASHTAGS,
        payload: {
            hashtags: hashtags
        }
    }
}
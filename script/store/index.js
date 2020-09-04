import { createStore, applyMiddleware } from 'redux';
import { reducers } from '../reducers/index';
import thunk from 'redux-thunk';

const initialState = {
    scrapper: {
        isScrapping: false,
        scrapped: 0,
        influencers: {}
    },
    db: {
        connected: false,
        dumped: false
    },
    socket: {
        connected: false,
        clients: 0
    }
}

const store = createStore(reducers, initialState, applyMiddleware(thunk));

export default store;
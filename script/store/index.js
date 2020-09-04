import { createStore } from 'redux';
import reducers from '../reducers/index';

const initialState = {
    scrapper: {
        started: false,
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

export default store = createStore(reducers, initialState);
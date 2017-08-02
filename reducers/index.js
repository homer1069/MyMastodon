import { combineReducers } from 'redux'

import { initAPIReducer } from './init-api-reducer';

const rootReducer = combineReducers({
    initAPI: initAPIReducer
});

export default rootReducer;

import { combineReducers } from 'redux'

import { APIReducer } from './api-reducer';

const rootReducer = combineReducers({
    api: APIReducer
});

export default rootReducer;

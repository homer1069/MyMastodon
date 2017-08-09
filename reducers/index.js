import { combineReducers } from 'redux'

import { APIReducer } from './api-reducer';

const rootReducer = combineReducers({
    API: APIReducer
});

export default rootReducer;

import { INIT_API } from '../actions/init-api';

export const initAPIReducer = (state = [], action) => {
    switch(action.type) {
        case INIT_API:
            return Object.assign({}, action.api);
        default:
            return state;
    }
}
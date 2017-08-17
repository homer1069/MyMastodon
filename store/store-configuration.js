import { createStore, compose } from 'redux';
import rootReducer from '../reducers';

/* eslint-disable */
// add redux debug dev tools
export const configureStore = () => {
    return createStore(rootReducer, {}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
};
/* eslint-enable */



import { createStore, compose } from 'redux';
import rootReducer from '../reducers';

/* eslint-disable */
// add redux debug dev tools
const enhancers = compose(
    window.devToolsExtension ? window.devToolsExtension() : foo => foo
);
/* eslint-enable */

export const configureStore = () => {
    return createStore(rootReducer, {}, enhancers);
};



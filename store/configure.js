import { createStore, applyMiddleware, compose } from 'redux';
import modules from './modules';
import {composeWithDevTools} from "redux-devtools-extension";

const isDev = process.env.NODE_ENV === 'development';



const configureStore = (initialState) => {
    const enhancers = [
        composeWithDevTools(applyMiddleware())
    ];

    const store = createStore(modules, initialState, compose(...enhancers));

    if(module.hot) {
        // module.hot.accept('./modules', () => {
        //   const nextReducer = require('./modules').default;
        //   store.replaceReducer(nextReducer);
        // });
    }
    if(module.hot) {
        module.hot.accept('./modules', () => store.replaceReducer(modules));
    }

    return store;
};

export default configureStore;
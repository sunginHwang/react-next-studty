import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import modules from './modules';


export const initStore = (initialState) => {
    return createStore(modules, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)))
};
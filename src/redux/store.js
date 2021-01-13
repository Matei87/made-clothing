import { createStore, applyMiddleware } from 'redux';
//logger is used for debugging our redux code
import logger from 'redux-logger';
import rootReducer from './root-reducer';


const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
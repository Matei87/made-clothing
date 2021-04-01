import { createStore, applyMiddleware } from 'redux';

import rootReducer from './root-reducer';
import { persistStore } from 'redux-persist';


export const store = createStore(rootReducer, applyMiddleware());

export const persistor = persistStore(store);
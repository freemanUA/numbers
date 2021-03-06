import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducerCombiner';

const middlewares = [];

if (__DEV__) {
  const createDebugger = require('redux-flipper').default;

  middlewares.push(createDebugger());
}

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;

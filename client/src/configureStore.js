import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import rootReducer from './reducers/index'

const loggerMiddleware = createLogger();

const middleware = () => (
  applyMiddleware(
    thunkMiddleware,  //  lets us dispatch() functions
    loggerMiddleware,  //  logs actions
  )
);

const store = createStore(
  rootReducer,
  middleware(),
);

export default store;

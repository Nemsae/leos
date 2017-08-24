import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers/index';
import { loadState, saveState } from './localStorage';

//  SAGA
// import createSagaMiddleware from 'redux-saga';
// import rootSaga from './sagas/saga';
// const sagaMiddleware = createSagaMiddleware();
// sagaMiddleware.run(rootSaga);

const persistedState = loadState();
const loggerMiddleware = createLogger();

const middleware = () => (
  applyMiddleware(
    thunkMiddleware,  //  lets us dispatch() functions
    loggerMiddleware,  //  logs actions
  )
);

const store = createStore(
  rootReducer,
  persistedState,
  middleware(),
);

store.subscribe(() => {
  saveState(store.getState());
});

export default store;

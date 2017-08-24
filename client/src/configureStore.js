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
console.log('persistedState: ', persistedState);  //  loads correct state

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

console.log('store.getState() ', store.getState());  //  loads initial state

store.subscribe(() => {
  saveState(store.getState());
});

export default store;

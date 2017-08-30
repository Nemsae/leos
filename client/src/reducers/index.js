import { combineReducers } from 'redux';

import currencyReducer from './currencyReducer';
import { counterReducer } from './counterReducer';
import { todosReducer } from './todosReducer';
import { visibilityReducer } from './visibilityReducer';

// console.log('currencyReducer: ', currencyReducer);

const rootReducer = combineReducers({
  currencyRate: currencyReducer,
  testCounter: counterReducer,
  todos: todosReducer,
  visibilityFilter: visibilityReducer,
});

// console.log('rootReducer: ', rootReducer);

export default rootReducer;
// export default currencyReducer;

import { combineReducers } from 'redux';

import currencyReducer from './currencyReducer';
import { counterReducer } from './testReducer';

// console.log('currencyReducer: ', currencyReducer);

const rootReducer = combineReducers({
  currencyRate: currencyReducer,
  testCounter: counterReducer,
});

// console.log('rootReducer: ', rootReducer);

export default rootReducer;
// export default currencyReducer;

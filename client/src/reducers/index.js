import { combineReducers } from 'redux';

import currencyReducer from './currencyReducer';
import testReducer from './testReducer';

// console.log('currencyReducer: ', currencyReducer);

const rootReducer = combineReducers({
  currencyRate: currencyReducer,
  testCounter: testReducer,
});

// console.log('rootReducer: ', rootReducer);

export default rootReducer;
// export default currencyReducer;

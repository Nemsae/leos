import { combineReducers } from 'redux';

import currencyReducer from './currencyReducer';

const rootReducer = combineReducers({
  currencyRate: currencyReducer,
});

export default rootReducer;

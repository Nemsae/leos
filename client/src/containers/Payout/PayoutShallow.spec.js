import React from 'react';
import expect from 'expect';
import { createMockStore } from 'redux-test-utils';
import { shallow } from 'enzyme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

// import thunk from 'redux-thunk';

// import TestUtils from 'react-dom/test-utils';

import PayoutRedux, { Payout } from './Payout';
// import shallowWithStore from '../../__tests__/shallowWithStore';
import store from '../../configureStore';

// const middlewares = [
//   thunk,
// ];


const shallowWithStore = (component, store) => {
  const context = {
    store,
  };
  console.log('\ncontext: ', context);
  return shallow(component, context);
};

// describe('<Payout /> Shallow', () => {
//   it('should render', () => {
//     // const testState = {
//     //   currencyRate: {},
//     // };
//     const testState = {
//       currencyRate: {
//         symbol: 'ETHUSD',
//         rate: null,
//         isFetching: false,
//       },
//     };
//     const mockStore = createMockStore(testState);
//     console.log('\nmockStore: ', mockStore);
//     const state = mockStore.getState();
//     console.log('\nstate: ', state);
//     const component = shallowWithStore(<PayoutRedux />, state);
//     console.log('\ncomponent: ', component);
//     expect(component).to.be.a('object');
//   });
// });

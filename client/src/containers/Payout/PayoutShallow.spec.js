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

describe('<Payout /> Shallow', () => {
  it('should render', () => {
    // const testState = {
    //   currencyRate: {},
    // };
    const testState = {
      currencyRate: {
        symbol: 'ETHUSD',
        rate: null,
        isFetching: false,
      },
    };
    const mockStore = createMockStore(testState);
    console.log('\nmockStore: ', mockStore);
    const state = mockStore.getState();
    console.log('\nstate: ', state);
    const component = shallowWithStore(<PayoutRedux />, state);
    console.log('\ncomponent: ', component);
    expect(component).to.be.a('object');
  });
});

// const setup = () => {
//   const props = {
//     store,
//     currency: {
//       symbol: 'EOSETH',
//       rate: '.0045',
//     },
//     // getCurrentRate: jest.fn(),
//   };
//
//   const enzymeWrapper = mount(<Payout {...props} />, {
//     context: {
//       muiTheme: getMuiTheme(),
//     },
//     childContextTypes: {
//       muiTheme: React.PropTypes.object.isRequired,
//     },
//   });
//
//   console.log('enzymeWrapper.html(): ', enzymeWrapper.html());
//
//   return {
//     enzymeWrapper,
//     props,
//   };
// };
//
// describe('PayoutRedux container', () => {
//   it('should render <h1>Trades</h1>', () => {
//     const { enzymeWrapper } = setup();
//     expect(enzymeWrapper.find('h1').first().text()).toEqual('Trades');
//   });
//
//   it('should render with initial state symbol of EOSETH', () => {
//     const renderer = TestUtils.createRenderer();
//     renderer.render(<PayoutRedux store={store} />);  //  shallow rendering
//     const actual = renderer.getRenderOutput().props.currency.symbol;
//     const expected = 'EOSETH';
//     // console.log('actual: ', actual);
//     // console.log('expected: ', expected);
//     expect(actual).toEqual(expected);
//   });
//   // it('should render title', () => {
//   //   const renderer = TestUtils.createRenderer();
//   //   renderer.render(<PayoutRedux store={store} />);
//   //   const actual = renderer.getRenderOutput();
//   //   const expected = <h1>Trades</h1>;
//   //   console.log('actual: ', actual);
//   //   console.log('expected: ', expected);
//   //   expect(actual).toIncludeJSX(expected);
//   // });
// });

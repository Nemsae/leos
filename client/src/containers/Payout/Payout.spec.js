import React from 'react';
import { mount, shallow } from 'enzyme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import expect from 'expect';

import TestUtils from 'react-dom/test-utils';
import expectJSX from 'expect-jsx';   //  toIncludeJSX()

import PayoutRedux, { Payout } from './Payout';
//  PayoutRedux is the HOC component of Payout
//  Payout is the component without the Redux connect()

import store from '../../configureStore';

expect.extend(expectJSX);

const setup = () => {
  const props = {
    store,
    currency: {
      symbol: 'EOSETH',
      rate: '.0045',
    },
    getCurrentRate: jest.fn(),
  };

  const enzymeWrapper = mount(<Payout {...props} />, {
    context: {
      muiTheme: getMuiTheme(),
    },
    childContextTypes: {
      muiTheme: React.PropTypes.object.isRequired,
    },
  });

  console.log('enzymeWrapper.html(): ', enzymeWrapper.html());

  return {
    enzymeWrapper,
    props,
  };
};

describe('PayoutRedux container', () => {
  it('should render <h1>Trades</h1>', () => {
    const { enzymeWrapper } = setup();
    expect(enzymeWrapper.find('h1').first().text()).toEqual('Trades');
  });

  it('should render <h1>Trades</h1>', () => {
    const { enzymeWrapper } = setup();

    expect(enzymeWrapper.find('h1').first().text()).toEqual('Trades');
  });

  it('should render with initial state symbol of EOSETH', () => {
    const renderer = TestUtils.createRenderer();
    renderer.render(<PayoutRedux store={store} />);  //  shallow rendering
    const actual = renderer.getRenderOutput().props.currency.symbol;
    const expected = 'EOSETH';
    // console.log('actual: ', actual);
    // console.log('expected: ', expected);
    expect(actual).toEqual(expected);
  });
  // it('should render title', () => {
  //   const renderer = TestUtils.createRenderer();
  //   renderer.render(<PayoutRedux store={store} />);
  //   const actual = renderer.getRenderOutput();
  //   const expected = <h1>Trades</h1>;
  //   console.log('actual: ', actual);
  //   console.log('expected: ', expected);
  //   expect(actual).toIncludeJSX(expected);
  // });
});

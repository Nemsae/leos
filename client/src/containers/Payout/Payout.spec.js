import React from 'react';
import TestUtils from 'react-dom/test-utils';
import expect from 'expect';
import expectJSX from 'expect-jsx';   //  toIncludeJSX()
expect.extend(expectJSX);

import Payout from './Payout';
import store from '../../configureStore'

/* ENZYME */
import { mount } from 'enzyme';

function setup() {
  const props = {
    
  }
}

describe('Payout container', () => {
  it('should render the title', () => {

  });

  it('should render with initial state symbol of EOSETH', () => {
    const renderer = TestUtils.createRenderer();
    renderer.render(<Payout store={store} />);  //  shallow rendering
    const actual = renderer.getRenderOutput().props.currency.symbol;
    const expected = 'EOSETH';
    // console.log('actual: ', actual);
    // console.log('expected: ', expected);
    expect(actual).toEqual(expected);
  });
  // it('should render title', () => {
  //   const renderer = TestUtils.createRenderer();
  //   renderer.render(<Payout store={store} />);
  //   const actual = renderer.getRenderOutput();
  //   const expected = <h1>Trades</h1>;
  //   console.log('actual: ', actual);
  //   console.log('expected: ', expected);
  //   expect(actual).toIncludeJSX(expected);
  // });
});

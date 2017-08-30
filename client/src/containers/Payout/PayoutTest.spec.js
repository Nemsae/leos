import React from 'react';
import expect from 'expect';
import sinon from 'sinon';
import { shallow } from 'enzyme';

import { Payout } from './Payout';

const setup = () => {
  const props = {
    currency: {
      symbol: 'EOSETH',
      rate: '.0045',
      getCurrentRate: function getCurrentRate() {},
      // getCurrentRate: () => {},
    },
  };

  console.log('props: ', props);

  const enzymeWrapper = shallow(<Payout {...props} />);

  return {
    enzymeWrapper,
    props,
  };
};

describe('<Payout/>', () => {
  it('should trigger method', () => {
    const refreshCurrencyRate = sinon.spy(Payout.prototype, 'refreshCurrencyRate');
    const { enzymeWrapper } = setup();
    const instance = enzymeWrapper.instance();
    const IconButton = enzymeWrapper.find('IconButton');
    console.log('IconButton: ', IconButton);

  });
});

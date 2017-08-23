import React from 'react';
import { mount } from 'enzyme';
import expect from 'expect';
import CurrencyLoader from './CurrencyLoader';

function setup() {
  const props = {
    rate: 0.0045,
    isFetching: false,
  };

  const enzymeWrapper = mount(<CurrencyLoader {...props} />);

  return {
    props,
    enzymeWrapper,
  };
}

describe('CurrencyLoader component', () => {
  it('should render self and subcomponents', () => {
    const { enzymeWrapper } = setup();
    expect(enzymeWrapper.find('div').hasClass('currency-rate')).toBe(true);
    expect(enzymeWrapper.find('p').hasClass('currency-rate__text')).toBe(true);
  });
});

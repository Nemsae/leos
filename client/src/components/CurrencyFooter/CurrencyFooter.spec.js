import React from 'react';
import expect from 'expect';
import { mount } from 'enzyme';
import CurrencyFooter from './CurrencyFooter';

const setup = () => {
  const props = {
    refreshCurrencyRate: jest.fn(),
  };

  const enzymeWrapper = mount(<CurrencyFooter {...props} />);

  return {
    enzymeWrapper,
    props,
  };
};

describe('<CurrencyFooter />', () => {
  it('should render self and its subcomponents', () => {
    const { enzymeWrapper, props } = setup();

    const html = enzymeWrapper.html();
    console.log('html: ', html);

    expect(enzymeWrapper.find('div').first().hasClass('button-footer')).toBe(true);
    const button = enzymeWrapper.find('IconButton');

    // expect(props.refreshCurrencyRate.mock.calls)
  });
});

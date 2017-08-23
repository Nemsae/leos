import React from 'react';
import expect from 'expect';
// import jest from 'jest';
import { mount } from 'enzyme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import { CurrencyFooter } from './CurrencyFooter';

const setup = () => {
  const props = {
    // refreshCurrencyRate: jest.fn(),
  };

  const enzymeWrapper = mount(<CurrencyFooter {...props} />, {
    context: {
      muiTheme: getMuiTheme(),
    },
    childContextTypes: {
      muiTheme: React.PropTypes.object.isRequired,
    },
  });

  return {
    enzymeWrapper,
    props,
  };
};

describe('<CurrencyFooter />', () => {
  it('should render self and its subcomponents with the correct props', () => {
    const { enzymeWrapper, props } = setup();

    expect(enzymeWrapper.find('div').first().hasClass('button-footer')).toBe(true);
    const IconButtonProps = enzymeWrapper.find('IconButton').props();

    // onClick={props.refreshCurrencyRate}
    console.log('IconButtonProps.onClick: ', IconButtonProps.onClick);
    console.log('typeof IconButtonProps.onClick: ', typeof IconButtonProps.onClick);

    expect(IconButtonProps.tooltip).toBe('REFRESH');
    expect(IconButtonProps.tooltipPosition).toBe('top-center');
    expect(IconButtonProps.tooltipStyles).toEqual({ fontSize: '18px' });
    // expect(typeof IconButtonProps.onClick).toEqual('object');

    // const button = enzymeWrapper.find('IconButton');

    // expect(props.refreshCurrencyRate.mock.calls)
  });
});

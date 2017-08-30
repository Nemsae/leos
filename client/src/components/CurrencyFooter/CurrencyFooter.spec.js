import React from 'react';
import expect, { createSpy } from 'expect';
// import jasmine from 'jasmine';
// import sinon from 'sinon';
import { mount } from 'enzyme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import { CurrencyFooter } from './CurrencyFooter';

// const refreshCurrencyRate = () => {};

const refreshCurrencyRateSpy = createSpy();
// const refreshCurrencyRateSpy = jasmine.createSpy('refreshCurrencyRate');

const setup = () => {
  const props = {
    refreshCurrencyRate: refreshCurrencyRateSpy,
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

    expect(IconButtonProps.tooltip).toBe('REFRESH');
    expect(IconButtonProps.tooltipPosition).toBe('top-center');
    expect(IconButtonProps.tooltipStyles).toEqual({ fontSize: '18px' });
    // expect(typeof IconButtonProps.onClick).toEqual('object');

    // const button = enzymeWrapper.find('IconButton');

    // expect(props.refreshCurrencyRate.mock.calls)
  });
  it('should call refreshCurrencyRate when clicked', () => {
    const { enzymeWrapper } = setup();
    const IconButton = enzymeWrapper.find('IconButton')
    IconButton.simulate('click');
    console.log('IconButton:<CurrencyFooter/> ', IconButton);
    expect(refreshCurrencyRateSpy).toHaveBeenCalled();
  });
});

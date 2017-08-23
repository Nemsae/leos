import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { mount, shallow } from 'enzyme';
import expect from 'expect';

import CurrencyLoader from './CurrencyLoader';

function setup(bool) {
  const props = {
    rate: 0.0045,
    isFetching: bool,
  };

  const enzymeWrapper = mount(<CurrencyLoader {...props} />, {
    context: {
      muiTheme: getMuiTheme(),
    },
    childContextTypes: {
      muiTheme: React.PropTypes.object.isRequired,
    },
  });

  return {
    props,
    enzymeWrapper,
  };
}

describe('<CurrencyLoader />', () => {
  it('should render <p> with rate when isFetching is false', () => {
    const { enzymeWrapper } = setup(false);
    expect(enzymeWrapper.find('div').hasClass('currency-rate')).toBe(true);
    expect(enzymeWrapper.find('p').hasClass('currency-rate__text')).toBe(true);
  });

  it('should render the spinner when isFetching is true', () => {
    const { enzymeWrapper } = setup(true);
    const html = enzymeWrapper.html();
    expect(enzymeWrapper.find('div').first().hasClass('currency-rate')).toBe(true);

    //  Props check
    const CircularProgressProps = enzymeWrapper.find('CircularProgress').props();
    expect(CircularProgressProps.color).toBe('white');
    expect(CircularProgressProps.size).toBe(30);
    // expect(enzymeWrapper.find('CircularProgress').hasClass('currency-rate__text')).toBe(true);
  });
});

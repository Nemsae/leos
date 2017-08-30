import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import CurrencySelector from './CurrencySelector';

// const CurrencySelector = props => (
//   <SelectField
//     floatingLabelText='CURRENCY'
//     value={props.symbol}
//     onChange={props.handleCurrencyChange}
//   >
//     <MenuItem value='EOSETH' primaryText='EOSETH' />
//     <MenuItem value='EOSUSD' primaryText='EOSUSD' />
//     <MenuItem value='ETHUSD' primaryText='ETHUSD' />
//     <MenuItem value='ETHBTC' primaryText='ETHBTC' />
//   </SelectField>
// );

const setup = () => {
  const props = {
    symbol: 'EOSETH',
  };

  const enzymeWrapper = shallow(<CurrencySelector {...props} />, {
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

describe('<CurrencySelector>', () => {
  it('should render correct props', () => {
    const { enzymeWrapper, props } = setup();
    // console.log('enzymeWrapper: ', enzymeWrapper);
    const selectFieldProps = enzymeWrapper.find('SelectField').props();

    const expectedValue = props.symbol;
    const actualValue = selectFieldProps.value;
    expect(actualValue).toBe(expectedValue);

    const expectedFloatingLabelText = 'CURRENCY';
    const actualFloatingLabelText = selectFieldProps.floatingLabelText;
    expect(expectedFloatingLabelText).toBe(actualFloatingLabelText);
  });
});

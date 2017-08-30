import React from 'react';
import expect, { createSpy } from 'expect';
import { mount } from 'enzyme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import { Payout } from './Payout';

const getCurrentRateSpy = createSpy();

const setup = () => {
  const props = {
    currency: {
      symbol: 'EOSETH',
      rate: '.0045',
    },
    getCurrentRate: getCurrentRateSpy,
  };

  const enzymeWrapper = mount(<Payout {...props} />, {
    context: {
      muiTheme: getMuiTheme(),
      // history: {},
    },
    childContextTypes: {
      muiTheme: React.PropTypes.object.isRequired,
      // history: React.PropTypes.object.isRequired,
    },
  });

  return {
    enzymeWrapper,
    props,
  };
};

describe('<Payout/>', () => {
  it('should trigger method', () => {
    const { enzymeWrapper } = setup();
    // const instance = enzymeWrapper.instance();
    const IconButton = enzymeWrapper.find('.MyIconButton');  //  just 'IconButton' will not be found
    // console.log('IconButton:<Payout/> ', IconButton);
    IconButton.simulate('click');
    expect(getCurrentRateSpy).toHaveBeenCalled();
  });
});

// REFERENCE https://github.com/airbnb/enzyme/issues/697
// class SomeComponent extends Component {
//     constructor(props) {
//         super(props);
//         this.handleClick = this.handleClick.bind(this);
//     }
//
//     handleClick() {
//         console.log('foo');
//     }
//
//     render() {
//         return <a onClick={this.handleClick}>foo</a>
//     }
// }

// import React from 'react';
// import {mount, shallow} from 'enzyme';
// import sinon from 'sinon';
// import {expect} from 'chai';
// import SomeComonent from '../../src/some-component';
//
//
// describe('some component', () => {
//     it('should call handleClick', () => {
//         let component = shallow(<SomeComonent/>); // tried with both shallow and mount
//         const instance = component.instance();
//         const handleClickSpy = sinon.spy(instance, 'handleClick');
//         // instance.forceUpdate(); // this is required for test to pass
//         component.find('a').simulate('click');
//
//         expect(handleClickSpy.called).to.equal(true);
//     });
// });

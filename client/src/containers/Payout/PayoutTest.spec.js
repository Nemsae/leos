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

// describe('<Payout/>', () => {
//   it('should trigger method', () => {
//     const refreshCurrencyRate = sinon.spy(Payout.prototype, 'refreshCurrencyRate');
//     const { enzymeWrapper } = setup();
//     const instance = enzymeWrapper.instance();
//     const IconButton = enzymeWrapper.find('IconButton');
//     console.log('IconButton: ', IconButton);
//
//   });
// });

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

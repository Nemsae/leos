import React from 'react';
import expect from 'expect';
// import sinon from 'sinon';
import { shallow } from 'enzyme';
import { Link } from 'react-router-dom';

import NavLink from './NavLink';

const setup = () => {
  const props = {
    router: {
      history: {
      },
    },
  };

  const context = {
    router: {
      history: {
        // createHref:
      },
    },
  };

  // const enzymeWrapperLink = shallow(<NavLink {...props} />);
  const enzymeWrapper = shallow(<NavLink {...props}>Foo Bar</NavLink>, { context });

  return {
    enzymeWrapper,
    props,
  };
};

describe('<NavLink/>', () => {
  it('should render self and subcomponents', () => {
    // sinon.spy(NavLink.prototype, '')
    const { enzymeWrapper, props } = setup();
    console.log('props: ', props);
    console.log('enzymeWrapper: ', enzymeWrapper);
    // let x = enzymeWrapper.dive();
    // console.log('x: ', x);

    // let y = x.text();
    // console.log('y: ', y);

    // const html = enzymeWrapper.html();
    // console.log('html: ', html);
  });
});

import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import TestUtils from 'react-dom/test-utils';

import Icon from './Icon';

function setup(name) {
  const props = {
    name,
  };

  const enzymeWrapper = shallow(<Icon {...props} />);

  return {
    props,
    enzymeWrapper,
  };
}

describe('<Icon />', () => {
  it('should render self and its subcomponents', () => {
    const { enzymeWrapper } = setup('facebook');

    expect(enzymeWrapper.find('i').hasClass('fa fa-facebook'));
  });

  it('should render the icon (TestUtils)', () => {
    const renderer = TestUtils.createRenderer();
    renderer.render(<Icon name='facebook' />);
    const actual = renderer.getRenderOutput().props.className.includes('facebook');
    const expected = true;
    expect(actual).toEqual(expected);
  });
});

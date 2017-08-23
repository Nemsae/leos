import React from 'react';
import TestUtils from 'react-dom/test-utils';
import expect from 'expect';

import { mount, shallow } from 'enzyme';

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
});

describe('Icon reusable component', () => {
  it('should render the icon', () => {
    const renderer = TestUtils.createRenderer();
    renderer.render(<Icon name='facebook' />);
    const actual = renderer.getRenderOutput().props.className.includes('facebook');
    console.log('actual: ', actual);
    const expected = true;
    expect(actual).toEqual(expected);
  });
});

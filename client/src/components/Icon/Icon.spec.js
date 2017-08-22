import React from 'react';
import TestUtils from 'react-dom/test-utils';
import expect from 'expect';
import Icon from './Icon';

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

import React from 'react';
import TestUtils from 'react-dom/test-utils';
import expect from 'expect';
import Payout from './Payout';

import store from ''

describe('Payout', () => {

  it('should render something', () => {
    const renderer = TestUtils.createRenderer();
    renderer.render(<Payout />);  //  shallow rendering
    console.log('renderer.getRenderOutput(): ', renderer.getRenderOutput());
    expect(actual).toIncludeJSX(expected);
  });
});

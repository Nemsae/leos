import React from 'react';
import TestUtils from 'react-dom/test-utils';
import expect from 'expect';
import expectJSX from 'expect-jsx';   //  toIncludeJSX()
expect.extend(expectJSX);

import Payout from './Payout';

const myComponent = ({ title }) => (
  <div>
    <h1>
      {title}
    </h1>
  </div>
);

describe('myComponent', () => {
  // it('should render title', () => {
  //   const renderer = TestUtils.createRenderer();
  //   renderer.render(<myComponent title='Foobar' />)
  //   const actual = renderer.getRenderOutput();
  //   const expected = (
  //     <h1>
  //       Foobar
  //     </h1>
  //   );
  //
  //   expect(actual).toIncludeJSX(expected);
  // });
});

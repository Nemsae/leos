import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';

import FilterLink from './FilterLink';
import * as types from '../../constants';

// const FilterLink = props => (
//   props.filter === props.filterType ?
//     <span className='active-link'>{props.children}</span>
//     :
//     <a id={props.filterType} className='link' href='' onClick={props.setFilter}>
//       {props.children}
//     </a>
// );

const setup = (filterType, filter, children) => {
  const props = {
    filterType,
    filter,
    children,
  };

  const enzymeWrapper = shallow(<FilterLink {...props} />);

  return {
    enzymeWrapper,
    props,
  };
}

describe('<FilterLink />', () => {
  it('should render props.children', () => {
    const text = 'ALL';
    const { enzymeWrapper } = setup(types.SHOW_ALL, undefined, text);
    console.log('enzymeWrapper: ', enzymeWrapper);
    const actual = enzymeWrapper.find('a').text();
    console.log('actual: ', actual);
    const expected = text;
    expect(actual).toBe(expected);
  });
  it('should render an <span> when filterType and filter match', () => {
    const { enzymeWrapper } = setup(types.SHOW_ALL, types.SHOW_ALL);
    const actual = enzymeWrapper.find('span').length;
    const expected = 1;
    expect(actual).toBe(expected);
  });
  it('should render an <a> when filterType and filter match', () => {
    const { enzymeWrapper } = setup(types.SHOW_ALL, types.SHOW_COMPLETED);
    const actual = enzymeWrapper.find('a').length;
    const expected = 1;
    expect(actual).toBe(expected);
  });
  it('should render with the className, \'active-link\' when filters match', () => {
    const { enzymeWrapper } = setup(types.SHOW_ALL, types.SHOW_ALL);
    const actual = enzymeWrapper.find('span').hasClass('active-link');
    const expected = true;
    expect(actual).toBe(expected);
  });
  it('should render with the className, \'link\' when filters don\'t match', () => {
    const { enzymeWrapper } = setup(types.SHOW_ALL, types.SHOW_COMPLETED);
    const actual = enzymeWrapper.find('a').hasClass('link');
    const expected = true;
    expect(actual).toBe(expected);
  });
});

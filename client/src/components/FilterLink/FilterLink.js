import React from 'react';

const FilterLink = props => (
  <a id={props.filterType} className='link' href='' onClick={props.setFilter}>{props.children}</a>
);

export default FilterLink;

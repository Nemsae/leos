import React from 'react';

const FilterLink = props => ({
  render() {
    if (props.filter)
    return (
      <a id={props.filterType} className='link' href='' onClick={props.setFilter}>
        {props.children}
      </a>
    );
  },
});

export default FilterLink;

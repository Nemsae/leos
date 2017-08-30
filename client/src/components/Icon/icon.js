import React from 'react';

const Icon = (props) => {
  return (
    <i className={`fa fa-${props.name}`} />
  );
};

export default Icon;

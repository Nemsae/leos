import React from 'react';

const Icon = (props) => {
  return (
    <div className={`fa fa-${props.icon}`} />
  );
};

export default Icon;

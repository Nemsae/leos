import React from 'react';
import { Link } from 'react-router-dom';

const NavLink = props => (
  <Link className='button' to={props.to}>
    {props.children}
  </Link>
);

export default NavLink;

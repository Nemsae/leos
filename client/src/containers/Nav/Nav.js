import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './styles.css';

const Nav = () => (
  <ul className='nav'>
    <li>
      <NavLink exact activeClassName='active' to='/'>
        Home
      </NavLink>
    </li>
    <li>
      <NavLink activeClassName='active' to='/help'>
        Help
      </NavLink>
    </li>
    <li>
      <NavLink activeClassName='active' to='/payout'>
        4cast
      </NavLink>
    </li>
    <li>
      <NavLink activeClassName='active' to='/leos'>
        Leos
      </NavLink>
    </li>
  </ul>
);

export default Nav;

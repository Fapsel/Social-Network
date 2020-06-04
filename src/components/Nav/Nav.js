import React from 'react';
import s from './Nav.module.css';
import { NavLink } from 'react-router-dom';

function Nav() {
  return (<nav className={s.navigation}>
    <NavLink to='/profile' activeClassName={s.activeLink}>Profile</NavLink>
    <NavLink to='/dialogs' activeClassName={s.activeLink}>Dialogs</NavLink>
  </nav>)
};

export default Nav;
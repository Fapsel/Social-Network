import React from 'react';
import s from './Header.module.css';

function Header() {
  return (
    <header className={s.header}>
      <img src='https://static.rfstat.com/renderforest/images/v2/logo-homepage/flat_3.png' alt='img'></img>
      <h1>Header Text</h1>
    </header>
  );
}
export default Header;
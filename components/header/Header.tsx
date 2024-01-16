import React from 'react';
import Logo from '../logo/Logo';
import Nav from '../nav/Nav';
import ScrollTop from '../scrollTop/ScrollTop';
import styles from './header.module.css';
const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <Logo />
        <Nav />
      </div>
    </header>
  );
};

export default Header;

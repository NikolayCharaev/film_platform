import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import search from '@/public/icons/search.svg';
import home from '@/public/icons/home.svg';
import films from '@/public/icons/films.svg';
import series from '@/public/icons/series.svg';
import favorites from '@/public/icons/favorites.svg';
import user from '@/public/icons/user.svg';


import styles from './nav.module.css';
import ScrollTop from '../scrollTop/ScrollTop';

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li>
          <Link href="/">
            <Image src={search} width={44} height={44} alt="search" />
          </Link>
        </li>
        <li>
          <Link href="/">
            <Image src={home} width={44} height={44} alt="home" />
          </Link>
        </li>
        <li>
          <Link href="/">
            <Image src={films} width={44} height={44} alt="films" />
          </Link>
        </li>
        <li>
          <Link href="/">
            <Image src={series} width={44} height={44} alt="series" />
          </Link>
        </li>
        <li>
          <Link href="/">
            <Image src={favorites} width={44} height={44} alt="favorites" />
          </Link>
        </li>
        <li>
          <Link href="/">
            <Image src={user} width={44} height={44} alt="user" />
          </Link>
        </li>
      </ul>

      <ScrollTop/>
    </nav>
  );
};

export default Nav;

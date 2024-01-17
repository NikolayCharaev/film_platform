import React from 'react';
import logo from '@/public/Logo.svg';
import Image from 'next/image';
import Link from 'next/link';
// import Test from '@/public/icons/Test';
import styles from './logo.module.css';
const Logo = () => {
  return (
    <div className={styles.logo}>
      <Link href="/">
        <Image src={logo} width={33} height={50} alt="logo" />
      </Link>
    </div>
  );
};

export default Logo;

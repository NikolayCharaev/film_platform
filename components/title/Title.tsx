import React from 'react';
import styles from './title.module.css';

interface ITitleProps {
  children: React.ReactNode;
}
const Title = ({ children }: ITitleProps) => {
  return <h1 className={styles.title}>{children}</h1>;
};

export default Title;

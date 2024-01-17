import React, { ReactNode } from 'react';
import styles from './button.module.css';
interface IButtonProps {
  watch?: boolean;
  children: ReactNode;
}

const Button = ({ watch, children }: IButtonProps) => {
  return <button className={styles.button + ` ${watch && styles.buttonWatch}`}>{children}</button>;
};

export default Button;

import React, { ReactNode } from 'react';
import styles from './filmRating.module.css'
interface IFilmRating {
  children: ReactNode;
}
const FilmRating = ({ children }: IFilmRating) => {
  return <div className={styles.rating}>{children}</div>;
};

export default FilmRating;

import React, { ReactNode } from 'react';
import styles from './filmRating.module.css'
interface IFilmRating {
  children: ReactNode;
  selectedPage?: boolean
}
const FilmRating = ({ children,selectedPage }: IFilmRating) => {
  return <div className={selectedPage ? styles.selectedPageRating :  styles.rating}>{children}</div>;
};

export default FilmRating;

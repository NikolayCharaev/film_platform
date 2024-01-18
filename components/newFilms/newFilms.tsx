import React from 'react';
import Title from '../title/Title';
import Image from 'next/image';
import { newFilms } from '@/data/newFilms';

import styles from './newFilms.module.css';
import FilmRating from '../filmRating/FilmRating';
import Link from 'next/link';

const NewFilms = () => {
  return (
    <div className={styles.newFilms}>
      <Title>Новинки</Title>

      <div className={styles.posters}>
        {newFilms.map((elem, index) => {
          const { rating, title, imageUrl } = elem;
          return (
            <div key={index} className={styles.poster}>
              <Link href="/selectedFilm">
                <Image
                  className={styles.posterImage}
                  src={imageUrl}
                  width={398}
                  height={597}
                  alt="poster"
                />

                <h3 className={styles.title}>{title}</h3>
                <FilmRating>{rating}</FilmRating>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NewFilms;

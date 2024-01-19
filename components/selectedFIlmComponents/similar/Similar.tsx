import React from 'react';
import Title from '@/components/title/Title';

import Image from 'next/image';
import Link from 'next/link'
import FilmRating from '@/components/filmRating/FilmRating';
import { StaticImageData } from 'next/image';

import styles from './similar.module.css';



interface Film {
  imageUrl: StaticImageData;
  rating: number;
  title?: string; // Добавил опциональный тип для title, так как он не использовался в JSX
}

interface SimilarProps {
  arr: Film[];
}

const Similar: React.FC<SimilarProps> = ({ arr }) => {
  return (
    <div className={styles.similar}>
      <Title>Похожее</Title>

      <div className={styles.posters}>
        {arr.map((elem, index) => {
          const { rating, title, imageUrl } = elem;
          return (
            <div key={index} className={styles.poster}>
              <Link href="/selectedFilm">
                <Image
                  className={styles.posterImage}
                  src={imageUrl}
                  width={255}
                  height={382}
                  alt="poster"
                />

                <h3 className={styles.title}>{title}</h3>
                <FilmRating selectedPage={true}>{rating}</FilmRating>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Similar;

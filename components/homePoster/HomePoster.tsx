import React from 'react';
import Image from 'next/image';

import poster from '../../public/bigPoster.jpg';
import posterTitle from '../../public/bigPosterTitle.png';
import styles from './homePoster.module.css';
import Button from '../button/Button';
const HomePoster = () => {
  return (
    <div className={styles.poster}>
      <Image src={poster} width={1250} height={800} alt="poster" />
      <div className={styles.content}>
        <div className={styles.contentBottom}>
          <Image
            className={styles.posterTitle}
            src={posterTitle}
            width={576}
            height={228}
            alt="posterTitle"
          />

          <p className={styles.description}>
            Неувядающий авантюрист и пытливый археолог-исследователь по‑прежнему в седле.
          </p>

          <div className={styles.buttons}>
            <Button watch={true}>Смотреть</Button>
            <Button>О фильме</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePoster;

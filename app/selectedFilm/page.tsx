import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';

import poster from '@/public/selectedFilm/poster.jpg';
import posterTitle from '@/public/selectedFilm/posterTitle.png';
import favorites from '@/public/icons/favorites.svg';
import addFavotite from '@/public/icons/add-favofite.svg';


import Button from '@/components/button/Button';
import Title from '@/components/title/Title';
import Seasons from '@/components/selectedFIlmComponents/seasons/Seasons';
import { seasons } from '@/data/seasons';


const page = () => {
  return (
    <div>
      <div className={styles.top}>
        <div className={styles.topContent}>
          <Image className={styles.topTitle} src={posterTitle} alt="poster title" />

          <div className={styles.topInfo}>
            <span className={styles.topRating}>10</span>
            <p>2022 - ...</p>
            <p>1 сезон</p>
            <p>США</p>
            <p>Ужасы</p>
            <p>0+</p>
          </div>

          <p className={styles.topDescription}>
            Уэнсдэй предстоит освоить экстрасенсорные cпособности, чтобы остановить местного
            серийного убийцу и раскрыть тайну родителей.
          </p>
          <div className={styles.topButtons}>
            <Button watch={true}>Смотреть</Button>
            <Button >Трейлер</Button>
            <Button ><Image src={addFavotite}  alt='to favorive'/></Button>
            <Button ><Image src={favorites}  width={32} height={32} alt='like'/></Button>
          </div>
        </div>
        <Image className={styles.poster} src={poster} width={1400} height={780} alt="poster" />
      </div>

        <Seasons arr={seasons}/>
    </div>  
  );
};

export default page;

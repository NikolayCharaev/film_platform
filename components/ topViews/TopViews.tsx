import React from 'react';
import Title from '../title/Title';
import styles from './topViews.module.css';

import Link from 'next/link';
import Image from 'next/image';

import { topWeek } from '@/data/topWeek';
const TopViews = () => {
  return (
    <div className={styles.topViews}>
      <div className={styles.top}>
        <span>ТОП-10</span>
        <Title>просмотров за неделю</Title>
      </div>

      <ol className={styles.topWeekList}>
        {topWeek.map((elem, index) => {
          const { imageUrl } = elem;
          return (
            <li key={index} className={styles.topWeekItem}>
              <h1 className={styles.topWeekCount}>{index + 1}</h1>

              <Link href="/">
                <Image
                  className={styles.topWeekPoster}
                  src={imageUrl}
                  width={398}
                  height={597}
                  alt="poster"
                />
              </Link>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default TopViews;

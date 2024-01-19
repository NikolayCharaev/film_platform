'use client';
import { useState, useEffect } from 'react';
import { StaticImageData } from 'next/image';
import Image from 'next/image';
import Title from '@/components/title/Title';
import styles from './seasons.module.css';

interface Season {
  imageUrl: StaticImageData;
  season: number;
  series: number;
  duration: number;
}

interface SeasonsProps {
  arr: Season[];
}

const Seasons: React.FC<SeasonsProps> = ({ arr }) => {
  const [season, setSeason] = useState(1);
  const [sesonList, setSeasonList] = useState<Season[]>([]);

  function countSeasons(arr: Season[]): number[] {
    //@ts-ignore
    const uniqueSeasons = [...new Set(arr.map((item) => item.season))];
    return uniqueSeasons;
  }

  function seasonItemsList(arr: Season[], count: number): Season[] {
    return arr.filter((elem) => elem.season === +count);
  }

  function formatDuration(duration: number) {
    const lastDigit = duration % 10;
    const minutesText =
      lastDigit === 1 ? 'минута' : lastDigit < 5 && lastDigit !== 0 ? 'минуты' : 'минут';

    return `${duration} ${minutesText}`;
  }

  useEffect(() => {
    const filteredSeasonList = seasonItemsList(arr, season);

    setSeasonList(filteredSeasonList);
  }, [season]);

  console.log(sesonList);
  return (
    <div>
      <div className={styles.seasonTop}>
        <Title>Сезоны</Title>
        <div className={styles.seasonCountWrapper}>
          {countSeasons(arr).map((elem, index) => {
            return (
              <p
                style={{
                  backgroundColor: season === index + 1 ? 'white' : '#232326',
                  color: season === index + 1 ? 'black' : 'white',
                }}
                onClick={() => {
                  setSeason(index + 1);
                }}
                key={index}>
                {index + 1}
              </p>
            );
          })}
        </div>
      </div>
      <div className={styles.seasonList}>
        {sesonList?.map((elem, index) => {
          const { imageUrl, duration, series } = elem;
          return (
            <div key={index}>
              <Image
                className={styles.seasonPoster}
                width={544}
                height={306}
                src={imageUrl}
                alt="poster"
              />
              <p className={styles.seasonSeries}>{series} серия</p>
              <p className={styles.seasonDuration}>{formatDuration(duration)}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Seasons;

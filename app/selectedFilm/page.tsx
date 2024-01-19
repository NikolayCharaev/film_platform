import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';

import poster from '@/public/selectedFilm/poster.jpg';
import posterTitle from '@/public/selectedFilm/posterTitle.png';
import favorites from '@/public/icons/favorites.svg';
import addFavotite from '@/public/icons/add-favofite.svg';
import warningIcon from '@/public/warning.svg';

import Button from '@/components/button/Button';
import Title from '@/components/title/Title';
import Seasons from '@/components/selectedFIlmComponents/seasons/Seasons';
import { seasons } from '@/data/seasons';
import Similar from '@/components/selectedFIlmComponents/similar/Similar';
import { similar } from '@/data/similar';

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
            <Button>Трейлер</Button>
            <Button>
              <Image src={addFavotite} alt="to favorive" />
            </Button>
            <Button>
              <Image src={favorites} width={32} height={32} alt="like" />
            </Button>
          </div>
        </div>
        <Image className={styles.poster} src={poster} width={1400} height={780} alt="poster" />
      </div>

      <Seasons arr={seasons}/> 

      <Title>Описание</Title>

      <p className={styles.filmDescription}>
        Детективная история, наполненная сверхъестественными силами. Главная героиня сериала —
        Уэнздей Аддамс, одна из членов семейки Аддамс и единственная дочь Гомеса и Мортиши Аддамсов,
        которая становится студенткой академии «Невермор». Она пытается овладеть своими
        проявившимися экстрасенсорными способностями, помешать чудовищным убийствам монстра, что
        терроризирует местный городок Джерико, а также разгадать тайну, в которую были втянуты её
        родители 32 года назад, — и всё это на фоне её новых и очень запутанных отношений в
        академии.
      </p>

      <div className={styles.warning}>
        <Image src={warningIcon} width={47} height={48} alt="warning" />
        <p>
          Контент может содержать сцены курения и употребления спиртных напитков. Курение и
          чрезмерное употребление алкоголя вредит вашему здоровью.
        </p>
      </div>

      <Similar arr={similar} />

      <Title>Информация</Title>

      <div className={styles.information}>
        <div className={styles.firstCol}>
          <p>Премьера в мире</p>

          <p>31 октября 2022</p>

          <p>Оригинальное название</p>
          <p>Wednesday</p>
        </div>

        <div className={styles.middleCol}>
          <p>Страна</p>
          <p>США</p>
          <p>Жанры</p>
          <p>Фентези Комедия Криминал Детектив </p>
        </div>

        <div className={styles.lastCol}>
          <p>Язык аудиодорожки</p>
          <p>Rus, Eng</p>
          <p>Качество</p>
          <p>Full HD </p>
        </div>
      </div>
    </div>
  );
};

export default page;

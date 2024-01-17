import Image from 'next/image';
import styles from './page.module.css';
import Nav from '@/components/nav/Nav';
import Header from '@/components/header/Header';
import HomePoster from '@/components/homePoster/HomePoster';
import NewFilms from '@/components/newFilms/newFilms';
import TopViews from '@/components/ topViews/TopViews';
export default function Home() {
  return (
    <>
      <Header />

      <div className={styles.content}>
            <HomePoster/>
            <NewFilms/>
            <TopViews/>
      </div>
    </>
  );
}

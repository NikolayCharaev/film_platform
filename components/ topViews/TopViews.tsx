import React from 'react';
import Title from '../title/Title';
import styles from './topViews.module.css';
const TopViews = () => {
  return (
    <div className={styles.topViews}>
      <div className={styles.top}>
        <span>ТОП-10</span>
        <Title>просмотров за неделю</Title>
      </div>
    </div>
  );
};

export default TopViews;

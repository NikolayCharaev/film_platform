'use client'
import {useState, useEffect} from 'react';

import Title from '@/components/title/Title';
import styles from './seasons.module.css';

interface ISeasonsProps {
  arr: {};
}

const Seasons: React.FC<ISeasonsProps> = ({ arr }) => {

    console.log('ARR',arr)
  return <div>

    <div className="">
        <Title>Сезоны</Title>
    </div>
  </div>;
};

export default Seasons;

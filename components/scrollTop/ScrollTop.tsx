'use client'
import React from 'react';
import Image from 'next/image';
import scrollTopImg from '@/public/icons/arrow-top.svg';
const ScrollTop = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Добавляет плавность прокрутке
    });
  };
  return (
    <button className='scroll-top' onClick={scrollToTop}>
      <Image src={scrollTopImg} width={44} height={44} alt="to top" />
    </button>
  );
};

export default ScrollTop;

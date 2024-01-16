import React from 'react';
import Image from 'next/image';
import scrollTopImg from '@/public/icons/arrow-top.svg';
const ScrollTop = () => {
  return (
    <button className='scroll-top'>
      <Image src={scrollTopImg} width={44} height={44} alt="to top" />
    </button>
  );
};

export default ScrollTop;

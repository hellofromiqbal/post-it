import React from 'react';
import Navbar from './Navbar';
import TrendingList from './TrendingList';

const LeftSide = () => {
  return (
    <div className='flex flex-col gap-4'>
      <div className='fixed md:static w-full z-10 bottom-0'>
        <Navbar/>
      </div>
      <div className='hidden md:block lg:hidden'>
        <TrendingList/>
      </div>
    </div>
  )
};

export default LeftSide;
import React from 'react';
import Navbar from './Navbar';
import TrendingList from './TrendingList';

const LeftSide = () => {
  return (
    <div className='flex flex-col gap-4'>
      <Navbar/>
      <div className='lg:hidden'>
        <TrendingList/>
      </div>
    </div>
  )
};

export default LeftSide;
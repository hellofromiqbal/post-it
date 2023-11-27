import React from 'react';
import Link from 'next/link';

const TrendingList = () => {
  return (
    <ul className='flex flex-col'>
      <Link href="/dashboard/" className='p-4 hover:bg-green-400 text-light hover:text-black flex flex-col'>
        <small className='text-xs opacity-70'>Trending in England</small>
        <h3 className='text-lg font-bold'>Beer</h3>
        <small className='text-xs opacity-70'>31.3K posts</small>
      </Link>
      <Link href="/dashboard/" className='p-4 hover:bg-green-400 text-light hover:text-black flex flex-col'>
        <small className='text-xs opacity-70'>Trending in England</small>
        <h3 className='text-lg font-bold'>Football</h3>
        <small className='text-xs opacity-70'>31.3K posts</small>
      </Link>
      <Link href="/dashboard/" className='p-4 hover:bg-green-400 text-light hover:text-black flex flex-col'>
        <small className='text-xs opacity-70'>Trending in England</small>
        <h3 className='text-lg font-bold'>Manchester</h3>
        <small className='text-xs opacity-70'>31.3K posts</small>
      </Link>
    </ul>
  )
};

export default TrendingList;
import React from 'react';
import Link from 'next/link';
import staticData from '@/assets/data/staticData';

const TrendingList = () => {
  return (
    <div className='bg-softDark shadow-md rounded-md text-light overflow-hidden flex flex-col'>
      <ul className='flex flex-col'>
        {staticData.trendingList.map((trending) => (
          <Link key={trending.title} href={trending.url} className='p-4 hover:bg-green-500 text-light hover:text-black flex flex-col'>
            <small className='text-xs font-semibold opacity-70'>Trending in {trending.location}</small>
            <h3 className='text-lg font-bold'>{trending.title}</h3>
            <small className='text-xs font-semibold opacity-70'>{trending.postsQty}K posts</small>
          </Link>
        ))}
      </ul>
    </div>
  )
};

export default TrendingList;
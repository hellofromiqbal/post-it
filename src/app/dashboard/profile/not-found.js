import React from 'react';
import Link from 'next/link';

const NotFoundPage = () => {
  return (
    <div className='bg-softDark min-h-[61vh] rounded-md shadow-md text-light flex flex-col justify-center items-center gap-0 overflow-hidden'>
      <div className='flex flex-col p-4 text-center'>
        <h1 className='font-semibold'>User Not Found</h1>
        <Link href="/dashboard" className='opacity-70'>Go Back</Link>
      </div>
    </div>
  )
};

export default NotFoundPage;
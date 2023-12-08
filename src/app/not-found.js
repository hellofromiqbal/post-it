import React from 'react';
import Link from 'next/link';

const NotFoundPage = () => {
  return (
    <div className='bg-softDark min-h-[61vh] rounded-md shadow-md text-light flex flex-col gap-0 overflow-hidden'>
      <div className='flex flex-col p-4'>
        <h1 className='font-semibold'>Page Not Found</h1>
        <Link href="/dashboard" className='opacity-70'>Go Back</Link>
      </div>
    </div>
  )
};

export default NotFoundPage;
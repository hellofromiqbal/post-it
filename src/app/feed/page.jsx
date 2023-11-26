import React from 'react';
import CreatePostForm from '../ui/feed/CreatePostForm';

const FeedPage = () => {
  return (
    <main className='max-w-6xl mx-auto min-h-screen flex flex-col gap-4'>
      <div className='bg-softDark text-light shadow-md flex flex-col rounded-md p-4'>
        <CreatePostForm/>
      </div>
    </main>
  )
};

export default FeedPage;
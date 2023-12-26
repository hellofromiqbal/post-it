import React from 'react';
import CreatePostForm from '../ui/dashboard/CreatePostForm';
import Feeds from '../ui/dashboard/Feeds';

const FeedPage = () => {
  return (
    <div className='flex flex-col gap-4'>
      <div className='hidden md:block'>
        <CreatePostForm/>
      </div>
      <Feeds/>
    </div>
  )
};

export default FeedPage;
import React, { useState } from 'react';
import UserPosts from './UserPosts';

const ProfileOwnerContent = ({ profileOwner }) => {
  const [postContentFocused, setPostContentFocused] = useState(true);

  return (
    <>
      <div className='flex justify-evenly border-y border-gray-700'>
        <button className={`w-full p-4 ${postContentFocused && 'bg-green-500 text-black'} hover:bg-green-500 hover:text-black font-medium`} onClick={() => setPostContentFocused(true)}>Posts</button>
        <button className={`w-full p-4 ${!postContentFocused && 'bg-green-500 text-black'} hover:bg-green-500 hover:text-black font-medium`} onClick={() => setPostContentFocused(false)}>Likes</button>
      </div>
      {postContentFocused ?
        <UserPosts userId={profileOwner?._id}/>
        :
        <h1>Coming soon!</h1>
      }
    </>
  )
};

export default ProfileOwnerContent;
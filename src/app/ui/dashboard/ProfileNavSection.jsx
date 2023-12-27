import React from 'react';

const ProfileNavSection = ({ isPostsFocused, setIsPostsFocused }) => {
  return (
    <div className='flex justify-evenly border-y border-gray-700'>
      <button className={`w-full p-4 ${isPostsFocused && 'bg-green-500 text-black'} hover:bg-green-500 hover:text-black font-medium`} onClick={() => setIsPostsFocused(true)}>Posts</button>
      <button className={`w-full p-4 ${!isPostsFocused && 'bg-green-500 text-black'} hover:bg-green-500 hover:text-black font-medium`} onClick={() => setIsPostsFocused(false)}>Likes</button>
    </div>
  )
};

export default ProfileNavSection;
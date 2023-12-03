import React from 'react';
import { FaHeart } from "react-icons/fa6";
import { useSelector } from 'react-redux';

const LikeButton = ({ contentType }) => {
  const currentLikes = useSelector(state => state.currentLikes.value);
  const likesCount = currentLikes.filter(like => like.contentId === data._id);

  return (
    <button className='flex gap-2 items-center'>
      <FaHeart size={contentType === 'post' ? 20 : 15}/>
      <span className={`${contentType === 'post' ? 'text-sm' : ''} opacity-70`}>{likesCount.length}</span>
    </button>
  )
};

export default LikeButton;
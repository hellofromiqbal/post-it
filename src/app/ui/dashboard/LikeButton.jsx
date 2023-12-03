import { createLike } from '@/store/currentLikesSlicer';
import React from 'react';
import { FaHeart } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux';

const LikeButton = ({ id, contentType }) => {
  const currentUser = useSelector(state => state.currentUser.value);

  const currentLikes = useSelector(state => state.currentLikes.value);
  const likesCount = currentLikes.filter(like => like.contentId === id);

  const dispatch = useDispatch();

  const handleLike = async (e) =>{
    e.preventDefault();
    const newLike = {
      contentId: id,
      authorId: currentUser?._id,
      authorUsername: currentUser?.username,
      authorFullname: currentUser?.fullname
    };
    try {
      const res = await fetch('/api/likes', {
        cache: 'no-store',
        method: 'POST',
        headers: { 'Content-type' : 'application/json' },
        body: JSON.stringify(newLike)
      });
      if(!res.ok) {
        throw new Error("Failed to like the post.");
      } else {
        const result = await res.json();
        dispatch(createLike(result.data));
      };
    } catch (error) {
      console.log(error.message);
    };
  }

  return (
    <button className='flex gap-2 items-center' onClick={(e) => handleLike(e)}>
      <FaHeart size={contentType === 'post' ? 20 : 15}/>
      <span className={`${contentType === 'post' ? 'text-sm' : ''} opacity-70`}>{likesCount.length}</span>
    </button>
  )
};

export default LikeButton;
import { useRouter } from 'next/navigation';
import React from 'react';
import { FaComment } from "react-icons/fa";
import { useSelector } from 'react-redux';

const CommentButton = ({ id, contentType }) => {
  const currentComments = useSelector(state => state.currentComments.value);
  const commentsCount = currentComments.filter(comment => comment.postId === id);

  const router = useRouter();
  return (
    <button className='flex gap-2 items-center' onClick={() => router.push(`/dashboard/posts/${id}`)}>
      <FaComment size={contentType === 'post' ? 20 : 15}/>
      <span className={`${contentType === 'post' ? 'text-sm' : ''} opacity-70`}>{commentsCount.length}</span>
    </button>
  )
};

export default CommentButton;
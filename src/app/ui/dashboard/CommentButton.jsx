import React from 'react';
import { useRouter } from 'next/navigation';
import { FaComment } from "react-icons/fa";
import { useSelector } from 'react-redux';

const CommentButton = ({ id, contentType }) => {
  const currentComments = useSelector(state => state.currentComments.value);
  const commentsCount = currentComments.filter(comment => comment.postId === id);

  const router = useRouter();
  return (
    <button className='flex gap-2 items-center' onClick={() => router.push(`/dashboard/posts/${id}`)}>
      <FaComment size={contentType !== 'comment' ? 20 : 15} className='w-4 md:w-auto'/>
      <span className={`${contentType !== 'comment' ? 'text-sm' : ''} opacity-70`}>{commentsCount.length}</span>
    </button>
  )
};

export default CommentButton;
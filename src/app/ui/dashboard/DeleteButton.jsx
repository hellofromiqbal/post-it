import { deleteComment } from '@/store/currentCommentsSlicer';
import { deleteLike } from '@/store/currentLikesSlicer';
import { deletePost } from '@/store/currentPostsSlicer';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useDispatch } from 'react-redux';

const DeleteButton = ({id, contentType = 'post'}) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${contentType !== 'comment' ? '/api/posts/' : '/api/comments/'}${id}`, { method: 'DELETE' });
      if(!res.ok) {
        throw new Error("Failed to delete post.");
      } else {
        if(contentType === 'post' | contentType === 'profile') {
          dispatch(deletePost(id));
          dispatch(deleteComment(id));
          dispatch(deleteLike(id));
        } else if (contentType === 'detail') {
          router.back();
          dispatch(deletePost(id));
          dispatch(deleteComment(id));
          dispatch(deleteLike(id));
        } else {
          dispatch(deleteComment(id));
        };
        router.refresh();
      };
    } catch (error) {
      console.log(error.message);
    };
  };

  return (
    <button
      className='flex gap-2 items-center opacity-70'
      onClick={(e) => handleDelete(e)}
    >
      DELETE
    </button>
  )
};

export default DeleteButton;
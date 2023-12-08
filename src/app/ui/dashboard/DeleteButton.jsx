import { deleteComment } from '@/store/currentCommentsSlicer';
import { deleteLike } from '@/store/currentLikesSlicer';
import { deletePost } from '@/store/currentPostsSlicer';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';

const DeleteButton = ({id, contentType = 'post'}) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const notify = (message) => toast(`${message}`, {
    icon: '👏',
    style: {
      borderRadius: '10px',
      background: '#1b1f23',
      color: '#fff'
    }
  });
  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${contentType !== 'comment' ? '/api/posts/' : '/api/comments/'}${id}`, { method: 'DELETE' });
      if(!res.ok) {
        throw new Error("Failed to delete post.");
      } else {
        const result = await res.json();
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
        notify(result.message);
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
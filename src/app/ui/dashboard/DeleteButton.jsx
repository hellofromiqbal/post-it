import { deletePost } from '@/store/currentPostsSlicer';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useDispatch } from 'react-redux';

const DeleteButton = ({id}) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`/api/posts/${id}`, { method: 'DELETE' });
      if(!res.ok) {
        throw new Error("Failed to delete post.");
      } else {
        dispatch(deletePost(id));
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
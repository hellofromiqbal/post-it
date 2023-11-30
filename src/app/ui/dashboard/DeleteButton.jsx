import { useRouter } from 'next/navigation';
import React from 'react';

const DeleteButton = ({id}) => {
  const router = useRouter();
  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`/api/posts/${id}`, { method: 'DELETE' });
      if(!res.ok) {
        throw new Error("Failed to delete post.");
      } else {
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
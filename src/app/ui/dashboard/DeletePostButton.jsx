"use client";

import { useRouter } from 'next/navigation';
import React from 'react';
import { MdDelete } from "react-icons/md";

const DeletePostButton = ({ postId }) => {
  const router = useRouter();

  const handleDeletePost = async (postId) => {
    try {
      const res = await fetch(`/api/posts/delete/${postId}`, { method: 'DELETE' });
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
    <button className='flex gap-2 items-center' onClick={() => handleDeletePost(postId)}>
      <MdDelete size={20}/>
    </button>
  )
};

export default DeletePostButton;
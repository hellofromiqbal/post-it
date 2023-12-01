"use client"

import { useRouter } from 'next/navigation';
import React from 'react'
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';


const CreateCommentForm = ({ postId }) => {
  const router = useRouter();
  const currentUser = useSelector(state => state.currentUser.value);
  const { register, handleSubmit, reset } = useForm();
  const submittedData = async (data) => {
    const newComment = {
      authorId: currentUser._id,
      authorFullname: currentUser.fullname,
      authorUsername: currentUser.username,
      textContent: data.textContent
    };
    try {
      const res = await fetch(`/api/posts/${postId}`, {
        method: 'PUT',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(newComment)
      });
      if(!res.ok) {
        throw new Error("Failed to post.")
      } else {
        reset();
        router.refresh();
      };
    } catch (error) {
      console.log(error.message);
    };
  };

  return (
    <form
      className='flex flex-col gap-4 p-4'
      onSubmit={handleSubmit(submittedData)}
    >
      <textarea
        placeholder='Post your reply'
        className='px-4 py-2 bg-transparent border border-light rounded-md resize-none'
        {...register("textContent")}
      ></textarea>
      <button className='px-4 py-2 bg-green-500 hover:bg-green-600 text-black font-semibold rounded-full transition duration-150'>Reply</button>
    </form>
  )
};

export default CreateCommentForm;
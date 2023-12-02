"use client"

import { createComment } from '@/store/currentCommentsSlicer';
import { useRouter } from 'next/navigation';
import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';


const CreateCommentForm = ({ postId }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.currentUser.value);
  const { register, handleSubmit, reset } = useForm();
  const submittedData = async (data) => {
    const newComment = {
      postId: postId,
      authorId: currentUser._id,
      authorUsername: currentUser.username,
      authorFullname: currentUser.fullname,
      textContent: data.textContent
    };
    try {
      const res = await fetch(`/api/comments/`, {
        cache: 'no-store',
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(newComment)
      });
      if(!res.ok) {
        throw new Error("Failed to post.")
      } else {
        const result = await res.json();
        dispatch(createComment(result.data));
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
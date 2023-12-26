"use client"

import React from 'react';
import { createPost } from '@/store/currentPostsSlicer';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { zodResolver } from '@hookform/resolvers/zod';
import { notifyFailed, notifySuccess } from '@/helpers/toaster';
import { createPostFormSchema } from '@/helpers/zodSchema';

const CreatePostForm = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.currentUser.value);
  const { register, handleSubmit, reset } = useForm({resolver: zodResolver(createPostFormSchema)});
  const submittedData = async (data) => {
    const newPost = {
      authorId: currentUser?._id,
      authorFullname: currentUser?.fullname,
      authorUsername: currentUser?.username,
      authorProfilePictureUrl: currentUser?.profilePictureUrl,
      textContent: data.textContent
    };
    try {
      const res = await fetch("/api/posts/", {
        cache: 'no-store',
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(newPost)
      });
      if(!res.ok) {
        throw new Error("Failed creating a post.");
      } else {
        const result = await res.json();
        dispatch(createPost(result.data));
        notifySuccess(result.message);
        reset();
        router.refresh();
      };
    } catch (error) {
      notifyFailed(error.message);
    };
  };

  return (
    <div className='bg-softDark text-light shadow-md rounded-md flex flex-col gap-2 p-4'>
      <form
        className='flex flex-col gap-4'
        onSubmit={handleSubmit(submittedData)}
      >
        <textarea
          cols="30"
          rows="3"
          placeholder='What is happening?!'
          className='px-4 py-2 bg-transparent border border-light rounded-md resize-none'
          {...register("textContent")}
        ></textarea>
        <button className='px-4 py-2 bg-green-500 hover:bg-green-600 text-black font-semibold rounded-full transition duration-150'>Post</button>
      </form>
    </div>
  )
};

export default CreatePostForm;
"use client"

import { useRouter } from 'next/navigation';
import React from 'react';
import { useForm } from 'react-hook-form';

const CreatePostForm = () => {
  const router = useRouter();
  const { register, handleSubmit, reset } = useForm();
  const submittedData = async (data) => {
    try {
      const res = await fetch("/api/posts/create", {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(data)
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
      className='bg-softDark text-light shadow-md rounded-md flex flex-col gap-4 p-4'
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
  )
};

export default CreatePostForm;
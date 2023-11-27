"use client"

import React from 'react';
import { useForm } from 'react-hook-form';

const CreatePostForm = () => {
  const { register, handleSubmit } = useForm();
  const submittedData = (data) => {
    console.log(data);
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
        {...register("text")}
      ></textarea>
      <button className='px-4 py-2 bg-green-500 hover:bg-green-600 text-black font-semibold rounded-full transition duration-150'>Post</button>
    </form>
  )
};

export default CreatePostForm;
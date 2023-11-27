import React from 'react';

const CreatePostForm = () => {
  return (
    <form action="" className='bg-softDark text-light shadow-md rounded-md flex flex-col gap-4 p-4'>
      <textarea
        cols="30"
        rows="3"
        placeholder='What is happening?!'
        className='px-4 py-2 bg-transparent border border-light rounded-md resize-none'
      ></textarea>
      <button className='px-4 py-2 bg-green-500 hover:bg-green-600 text-black font-semibold rounded-full transition duration-150'>Post</button>
    </form>
  )
};

export default CreatePostForm;
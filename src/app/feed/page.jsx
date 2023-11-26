import React from 'react';

const FeedPage = () => {
  return (
    <main className='max-w-6xl mx-auto min-h-screen flex flex-col gap-4'>
      <div className='bg-softDark text-light shadow-md flex flex-col rounded-md p-4'>
        <form action="" className='flex flex-col gap-4'>
          <input
            type="text"
            placeholder='Post title'
            className='px-4 py-2 bg-transparent border rounded-md'
          />
          <textarea
            cols="30"
            rows="10"
            placeholder='Post description'
            className='px-4 py-2 bg-transparent border rounded-md resize-none'
          ></textarea>
          <button className='px-4 py-2 bg-green-500 hover:bg-green-400 text-black font-semibold rounded-full transition duration-150'>Post</button>
        </form>
      </div>
    </main>
  )
};

export default FeedPage;
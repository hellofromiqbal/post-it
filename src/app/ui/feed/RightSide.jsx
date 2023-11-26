import React from 'react';

const RightSide = () => {
  return (
    <div className='flex flex-col gap-4'>
      <div className='bg-softDark text-light shadow-md flex flex-col rounded-md p-4'>
        <h1 className='font-bold'>This is Card 1</h1>
        <p className='opacity-80'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, odio!</p>
      </div>
      <div className='bg-softDark text-light shadow-md flex flex-col rounded-md p-4 sticky top-0'>
        <h1 className='font-bold'>This is Card 2</h1>
        <p className='opacity-80'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, odio!</p>
      </div>
    </div>
  )
};

export default RightSide;
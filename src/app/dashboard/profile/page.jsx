import React from 'react'
import Image from 'next/image';

const ProfilePage = () => {
  return (
    <div className='flex flex-col gap-4'>
      <div className='bg-softDark text-light shadow-md rounded-md flex flex-col gap-4 p-4'>
        <div className='w-[150px] h-[150px] rounded-full bg-light relative overflow-hidden place-self-center border-4 border-light'>
          <Image src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWFufGVufDB8fDB8fHww" alt='profpic' fill className='object-cover'/>
        </div>
      </div>
    </div>
  )
};

export default ProfilePage;
import React from 'react'
import Image from 'next/image';
import { IoLocation, IoCalendar } from "react-icons/io5";


const ProfilePage = () => {
  return (
    <div className='flex flex-col gap-4'>
      <div className='bg-softDark text-light shadow-md rounded-md flex flex-col gap-0'>
        <div className='bg-light min-h-[180px] relative rounded-t-md bg-[url("https://plus.unsplash.com/premium_photo-1665772800949-d16a87be214d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHdvb2RzfGVufDB8fDB8fHww")] bg-center bg-cover bg-no-repeat'>
          <div className='w-[150px] h-[150px] rounded-full bg-light absolute -bottom-[75px] right-4 z-10 overflow-hidden place-self-center border-4 border-softDark'>
            <Image src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWFufGVufDB8fDB8fHww" alt='profpic' fill className='object-cover'/>
          </div>
        </div>
        <div className='flex flex-col gap-2 p-4'>
          <div>
            <h2 className='font-bold text-xl'>Pedro Enrique Machado</h2>
            <p className='text-sm opacity-70'>@user$2a$</p>
          </div>
          <div className='flex items-center gap-4'>
            <span className='flex items-center gap-1 opacity-70'>
              <IoLocation size={15}/>
              <p className='text-sm'>Chicago, IL</p>
            </span>
            <span className='flex items-center gap-1 opacity-70'>
              <IoCalendar size={15}/>
              <p className='text-sm'>Joined June 2009</p>
            </span>
          </div>
          <div className='flex items-center gap-4'>
            <span className='flex items-center gap-1'>
              <p className='text-sm font-semibold'>582</p>
              <p className='text-sm opacity-70'>Following</p>
            </span>
            <span className='flex items-center gap-1'>
              <p className='text-sm font-semibold'>64.3M</p>
              <p className='text-sm opacity-70'>Followers</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
};

export default ProfilePage;
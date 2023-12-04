"use client"

import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { IoLocation, IoCalendar } from "react-icons/io5";
import BackButton from '@/app/ui/dashboard/BackButton';
import ContentCard from '@/app/ui/dashboard/ContentCard';
import UserPosts from '@/app/ui/dashboard/UserPosts';

const ProfilePage = ({params}) => {
  const [userDetails, setUserDetails] = useState({});
  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    fetch(`/api/users/profile/${params.username}`, { cache: 'no-store' })
      .then(res => res.json())
      .then(data => setUserDetails(data.data))
      .catch(err => err.message);

    fetch('/api/posts/', { cache: 'no-store' })
      .then(res => res.json())
      .then(data => setUserPosts(data.data))
      .catch(err => err.message);
  }, []);

  return (
    <div className='bg-softDark text-light shadow-md rounded-md flex flex-col gap-0'>
      <BackButton/>
      <div className='bg-light min-h-[180px] relative bg-center bg-cover bg-no-repeat'>
        <Image src={userDetails.bgProfilePictureUrl} alt='bgprofpic' fill className='object-cover'/>
        <div className='w-[150px] h-[150px] rounded-full bg-light absolute -bottom-[75px] right-4 z-10 overflow-hidden place-self-center border-4 border-softDark'>
          <Image src={userDetails.profilePictureUrl} alt='profpic' fill className='object-cover'/>
        </div>
      </div>
      <div className='flex flex-col gap-2 p-4'>
        <div>
          <h2 className='font-bold text-xl'>{userDetails.fullname}</h2>
          <p className='text-sm opacity-70'>{userDetails.username}</p>
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
      <div className='flex justify-evenly border-y border-gray-700'>
        <button className='w-full p-4 hover:bg-gray-700'>Posts</button>
        <button className='w-full p-4 hover:bg-gray-700'>Likes</button>
      </div>
      <UserPosts userId={userDetails?._id}/>
    </div>
  )
};

export default ProfilePage;
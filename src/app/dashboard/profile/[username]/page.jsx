"use client"

import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { IoLocation, IoCalendar } from "react-icons/io5";
import BackButton from '@/app/ui/dashboard/BackButton';
import UserPosts from '@/app/ui/dashboard/UserPosts';
import { useSelector } from 'react-redux';
import NotFoundPage from '../not-found';

const ProfilePage = ({params}) => {
  const [userDetails, setUserDetails] = useState({});
  const [isPostsFocused, setIsPostsFocused] = useState(true);
  const currentUser = useSelector(state => state.currentUser.value);

  useEffect(() => {
    const fetchData = async (apiUrl) => {
      const res = await fetch(apiUrl, { cache: 'no-store' });
      if(!res.ok) {
        throw new Error("Failed to fetch data");
      } else {
        return res.json();
      };
    };

    const apiUrls = [
      `/api/users/profile/${params.username}`,
    ];

    Promise.all(apiUrls.map(url => fetchData(url)))
      .then(([value1]) => {
        setUserDetails(value1.data);
      })
      .catch(error => error.message);
    
  }, []);

  if(!userDetails) {
    return NotFoundPage();
  } else {
    return (
      <div className='bg-softDark text-light shadow-md rounded-md flex flex-col gap-0'>
        <BackButton/>
        <div className='bg-light min-h-[180px] relative bg-center bg-cover bg-no-repeat'>
          <Image src={userDetails?.bgProfilePictureUrl} alt='bgprofpic' fill className='object-cover'/>
          <div className='w-[150px] h-[150px] rounded-full bg-light absolute -bottom-[50px] right-4 z-10 overflow-hidden place-self-center border-4 border-softDark'>
            <Image src={userDetails?.profilePictureUrl} alt='profpic' fill className='object-cover'/>
          </div>
        </div>
        <div className='flex flex-col gap-2 p-4'>
          <div>
            <h2 className='font-bold text-xl'>{userDetails?.fullname}</h2>
            <p className='text-sm opacity-70'>{userDetails?.username}</p>
          </div>
          {userDetails?.bio !== '' &&
            <div>
              <p>{userDetails?.bio}</p>
            </div>
          }
          {userDetails?.website !== '' &&
            <div>
              <Link href={`https://${userDetails?.website}`} className='underline text-sm' target='_blank'>{userDetails?.website}</Link>
            </div>
          }
          <div className='flex items-center gap-4'>
            <span className='flex items-center gap-1 opacity-70'>
              <IoLocation size={15}/>
              <p className='text-sm'>{userDetails?.location}</p>
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
          {userDetails?.username === currentUser?.username &&
            <div className='flex items-center gap-4'>
              <Link href={`/dashboard/profile/${userDetails?.username}/edit`} className='bg-green-500 text-black font-semibold rounded-full px-4 py-2 text-sm'>Edit Profile</Link>
            </div>
          }
        </div>
        <div className='flex justify-evenly border-y border-gray-700'>
          <button className={`w-full p-4 ${isPostsFocused && 'bg-green-500 text-black'} hover:bg-green-500 hover:text-black font-medium`} onClick={() => setIsPostsFocused(true)}>Posts</button>
          <button className={`w-full p-4 ${!isPostsFocused && 'bg-green-500 text-black'} hover:bg-green-500 hover:text-black font-medium`} onClick={() => setIsPostsFocused(false)}>Likes</button>
        </div>
        {isPostsFocused ?
          <UserPosts userId={userDetails?._id}/>
          :
          <h1>Coming soon!</h1>
        }
      </div>
    )
  }
};

export default ProfilePage;
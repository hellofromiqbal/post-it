import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import FollowButton from '@/app/ui/dashboard/FollowButton';
import { useSelector } from 'react-redux';
import { IoLocation, IoCalendar } from "react-icons/io5";

const ProfileOwnerDetails = ({ profileOwner }) => {
  const currentUser = useSelector(state => state.currentUser.value);

  return (
    <>
      <div className='bg-light min-h-[180px] relative bg-center bg-cover bg-no-repeat'>
        {profileOwner?.bgProfilePictureUrl &&
          <Image src={profileOwner?.bgProfilePictureUrl} alt='bgprofpic' fill className='object-cover'/>
        }
        <div className='w-[150px] h-[150px] rounded-full bg-light absolute -bottom-[50px] right-4 z-10 overflow-hidden place-self-center border-4 border-softDark'>
          <Image src={profileOwner?.profilePictureUrl} alt='profpic' fill className='object-cover'/>
        </div>
      </div>
      <div className='flex flex-col gap-2 p-4'>
        <div>
          <h2 className='font-bold text-xl'>{profileOwner?.fullname}</h2>
          <p className='text-sm opacity-70'>{profileOwner?.username}</p>
        </div>
        {profileOwner?.bio !== '' &&
          <div>
            <p>{profileOwner?.bio}</p>
          </div>
        }
        {profileOwner?.website !== '' &&
          <div>
            <Link href={`https://${profileOwner?.website}`} className='underline text-sm' target='_blank'>{profileOwner?.website}</Link>
          </div>
        }
        <div className='flex items-center gap-4'>
          <span className='flex items-center gap-1 opacity-70'>
            <IoLocation size={15}/>
            <p className='text-sm'>{profileOwner?.location}</p>
          </span>
          <span className='flex items-center gap-1 opacity-70'>
            <IoCalendar size={15}/>
            <p className='text-sm'>Joined June 2009</p>
          </span>
        </div>
        <div className='flex items-center gap-4'>
          <span className='flex items-center gap-1'>
            <p className='text-sm font-semibold'>{profileOwner?.following?.length}</p>
            <p className='text-sm opacity-70'>Following</p>
          </span>
          <span className='flex items-center gap-1'>
            <p className='text-sm font-semibold'>{profileOwner?.followers?.length}</p>
            <p className='text-sm opacity-70'>Followers</p>
          </span>
        </div>
        <div className='flex items-center gap-4'>
          {profileOwner?.username === currentUser?.username ?
            <Link href={`/dashboard/profile/${profileOwner?.username}/edit`} className='bg-green-500 text-black font-semibold rounded-full px-4 py-2 text-sm'>Edit Profile</Link>
            :
            <FollowButton currentUser={currentUser} userToBeFollowed={profileOwner}/>
          }
        </div>
      </div>
    </>
  )
};

export default ProfileOwnerDetails;
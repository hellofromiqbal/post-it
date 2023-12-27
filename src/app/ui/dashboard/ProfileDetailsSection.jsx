import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import FollowButton from '@/app/ui/dashboard/FollowButton';
import UnfollowButton from '@/app/ui/dashboard/UnfollowButton';
import { useSelector } from 'react-redux';
import { IoLocation, IoCalendar } from "react-icons/io5";

const ProfileDetailsSection = ({ profileOwner }) => {
  const [userDetails, setUserDetails] = useState();
  const currentUser = useSelector(state => state.currentUser.value);
  const alreadyFollowedUser = currentUser?.following.find((user) => user.username === userDetails.username);

  useEffect(() => {
    fetch(`/api/users/profile/${profileOwner}`, { cache: 'no-store' })
      .then(res => res.json())
      .then(data => {
        setUserDetails(data.data);
      })
      .catch(err => console.log(err.message));
  }, []);

  return (
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
          <p className='text-sm font-semibold'>{userDetails?.following?.length}</p>
          <p className='text-sm opacity-70'>Following</p>
        </span>
        <span className='flex items-center gap-1'>
          <p className='text-sm font-semibold'>{userDetails?.followers?.length}</p>
          <p className='text-sm opacity-70'>Followers</p>
        </span>
      </div>
      <div className='flex items-center gap-4'>
        {userDetails?.username === currentUser?.username ?
          <Link href={`/dashboard/profile/${userDetails?.username}/edit`} className='bg-green-500 text-black font-semibold rounded-full px-4 py-2 text-sm'>Edit Profile</Link>
          :
          alreadyFollowedUser ?
          <UnfollowButton currentUser={currentUser} userToBeUnfollowed={userDetails}/>
          :
          <FollowButton currentUser={currentUser} userToBeFollowed={userDetails}/>
        }
      </div>
    </div>
  )
};

export default ProfileDetailsSection;
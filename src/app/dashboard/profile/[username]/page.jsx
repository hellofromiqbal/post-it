"use client"

import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { IoLocation, IoCalendar } from "react-icons/io5";
import BackButton from '@/app/ui/dashboard/BackButton';
import UserPosts from '@/app/ui/dashboard/UserPosts';
import { useSelector } from 'react-redux';
import NotFoundPage from '../not-found';
import FollowButton from '@/app/ui/dashboard/FollowButton';
import UnfollowButton from '@/app/ui/dashboard/UnfollowButton';
import ProfileImageSection from '@/app/ui/dashboard/ProfileImageSection';
import ProfileDetailsSection from '@/app/ui/dashboard/ProfileDetailsSection';
import ProfileNavSection from '@/app/ui/dashboard/ProfileNavSection';

const ProfilePage = ({params}) => {
  const [userDetails, setUserDetails] = useState({});
  const [isPostsFocused, setIsPostsFocused] = useState(true);

  useEffect(() => {
    fetch(`/api/users/profile/${params.username}`, { cache: 'no-store' })
      .then(res => res.json())
      .then(data => {
        setUserDetails(data.data);
      })
      .catch(err => console.log(err.message));
  }, []);

  if(!userDetails) {
    return NotFoundPage();
  } else {
    return (
      <div className='bg-softDark text-light shadow-md md:rounded-md flex flex-col gap-0'>
        <BackButton/>
        <ProfileImageSection profileOwner={params.username}/>
        <ProfileDetailsSection profileOwner={params.username}/>
        <ProfileNavSection isPostsFocused={isPostsFocused} setIsPostsFocused={setIsPostsFocused}/>
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
"use client"

import React, { useEffect, useState } from 'react'
import BackButton from '@/app/ui/dashboard/BackButton';
import NotFoundPage from '../not-found';
import ProfileOwnerDetails from '@/app/ui/dashboard/ProfileOwnerDetails';
import ProfileOwnerContent from '@/app/ui/dashboard/ProfileOwnerContent';

const ProfilePage = ({params}) => {
  const [profileOwner, setProfileOwner] = useState({});
  useEffect(() => {
    fetch(`/api/users/profile/${params.username}`, { cache: 'no-store' })
      .then(res => res.json())
      .then(data => {
        setProfileOwner(data.data);
      })
      .catch(err => {
        console.log(err.message);
      });
  }, []);

  return (
    <div className='bg-softDark text-light shadow-md md:rounded-md flex flex-col gap-0'>
      <BackButton/>
      <ProfileOwnerDetails profileOwner={profileOwner}/>
      <ProfileOwnerContent profileOwner={profileOwner}/>
    </div>
  )
};

export default ProfilePage;
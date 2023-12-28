import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const ProfileImageSection = ({ userDetails }) => {
  return (
    <div className='bg-light min-h-[180px] relative bg-center bg-cover bg-no-repeat'>
      {userDetails?.bgProfilePictureUrl &&
        <Image src={userDetails?.bgProfilePictureUrl} alt='bgprofpic' fill className='object-cover'/>
      }
      <div className='w-[150px] h-[150px] rounded-full bg-light absolute -bottom-[50px] right-4 z-10 overflow-hidden place-self-center border-4 border-softDark'>
        <Image src={userDetails?.profilePictureUrl} alt='profpic' fill className='object-cover'/>
      </div>
    </div>
  )
};

export default ProfileImageSection;
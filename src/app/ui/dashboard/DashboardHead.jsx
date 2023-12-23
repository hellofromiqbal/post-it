"use client"

import React from 'react';
import Link from 'next/link';
import SignOutButton from './SignOutButton';
import { FaUserCircle } from 'react-icons/fa';
import { usePathname } from 'next/navigation';
import { useSelector } from 'react-redux';

const DashboardHead = () => {
  const pathname = usePathname();
  const currentUser = useSelector(state => state.currentUser.value);
  return (
    <div className='flex justify-between md:justify-center items-center p-4 md:p-0 sticky md:relative top-0 bg-softDark md:bg-transparent z-20 md:z-0 shadow-md md:shadow-none'>
      <Link href={`/dashboard/profile/${currentUser?.username}`} className={`${pathname.includes(currentUser?.username) ? 'bg-green-500 text-black' : 'text-light'} flex md:hidden items-center gap-4 font-medium`}>
        <FaUserCircle className='w-[30px] md:w-[25px] h-[30px] md:h-[25px]'/>
        <span className="hidden md:block">Profile</span>
      </Link>
      <h1 className='text-light text-3xl font-extrabold'>Post<span className='text-softDark bg-green-500 px-1 rounded-md'>It</span></h1>
      <SignOutButton placement='dashboardHead'/>
    </div>
  )
};

export default DashboardHead;
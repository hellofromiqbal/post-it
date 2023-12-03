"use client"

import React from 'react';
import Link from 'next/link';

import {
  IoHome,
  IoSearch,
  IoNotifications,
  IoMail,
  IoPeople,
} from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import SignOutButton from './SignOutButton';
import { useSelector } from 'react-redux';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();
  const currentUser = useSelector(state => state.currentUser.value);
  return (
    <nav className='flex flex-col bg-softDark shadow-md rounded-md overflow-hidden'>
      <Link href="/dashboard/" className={`${pathname === "/dashboard" ? 'bg-green-500 text-black' : 'text-light'} hover:text-black hover:bg-green-500 font-medium p-4 flex items-center gap-4`}>
        <IoHome size={25}/>
        <span>Home</span>
      </Link>
      <Link href="/dashboard/explore" className={`${pathname === "/dashboard/explore" ? 'bg-green-500 text-black' : 'text-light'} hover:text-black hover:bg-green-500 font-medium p-4 flex items-center gap-4`}>
        <IoSearch size={25}/>
        <span>Explore</span>
      </Link>
      <Link href="/dashboard/notifications" className={`${pathname === "/dashboard/notifications" ? 'bg-green-500 text-black' : 'text-light'} hover:text-black hover:bg-green-500 font-medium p-4 flex items-center gap-4`}>
        <IoNotifications size={25}/>
        <span>Notifications</span>
      </Link>
      <Link href="/dashboard/messages" className={`${pathname === "/dashboard/messages" ? 'bg-green-500 text-black' : 'text-light'} hover:text-black hover:bg-green-500 font-medium p-4 flex items-center gap-4`}>
        <IoMail size={25}/>
        <span>Messages</span>
      </Link>
      <Link href="/dashboard/friends" className={`${pathname === "/dashboard/friends" ? 'bg-green-500 text-black' : 'text-light'} hover:text-black hover:bg-green-500 font-medium p-4 flex items-center gap-4`}>
        <IoPeople size={25}/>
        <span>Friends</span>
      </Link>
      <Link href={`/dashboard/profile/${currentUser?.username}`} className={`${pathname.includes(currentUser?.username) ? 'bg-green-500 text-black' : 'text-light'} hover:text-black hover:bg-green-500 font-medium p-4 flex items-center gap-4`}>
        <FaUserCircle size={25}/>
        <span>Profile</span>
      </Link>
      <SignOutButton/>
    </nav>
  )
};

export default Navbar;
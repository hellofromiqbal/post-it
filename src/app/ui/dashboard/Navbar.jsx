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
    <nav className='flex flex-row md:flex-col bg-softDark shadow-md md:rounded-md overflow-hidden'>
      <Link href="/dashboard/" className={`${pathname === "/dashboard" ? 'bg-green-500 text-black' : 'text-light'} hover:text-black hover:bg-green-500 font-medium p-4 flex justify-center md:justify-normal items-center gap-4 w-full order-1 md:order-none`}>
        <IoHome size={25}/>
        <span className="hidden md:block">Home</span>
      </Link>
      <Link href="/dashboard/explore" className={`${pathname === "/dashboard/explore" ? 'bg-green-500 text-black' : 'text-light'} hover:text-black hover:bg-green-500 font-medium p-4 flex justify-center md:justify-normal items-center gap-4 w-full order-2 md:order-none`}>
        <IoSearch size={25}/>
        <span className="hidden md:block">Explore</span>
      </Link>
      <Link href="/dashboard/notifications" className={`${pathname === "/dashboard/notifications" ? 'bg-green-500 text-black' : 'text-light'} hover:text-black hover:bg-green-500 font-medium p-4 flex justify-center md:justify-normal items-center gap-4 w-full order-5 md:order-none`}>
        <IoNotifications size={25}/>
        <span className="hidden md:block">Notifications</span>
      </Link>
      <Link href="/dashboard/messages" className={`${pathname === "/dashboard/messages" ? 'bg-green-500 text-black' : 'text-light'} hover:text-black hover:bg-green-500 font-medium p-4 flex justify-center md:justify-normal items-center gap-4 w-full order-4 md:order-none`}>
        <IoMail size={25}/>
        <span className="hidden md:block">Messages</span>
      </Link>
      <Link href="/dashboard/friends" className={`${pathname === "/dashboard/friends" ? 'bg-green-500 text-black' : 'text-light'} hover:text-black hover:bg-green-500 font-medium p-4 flex justify-center md:justify-normal items-center gap-4 w-full order-3 md:order-none`}>
        <IoPeople size={25}/>
        <span className="hidden md:block">Friends</span>
      </Link>
      <Link href={`/dashboard/profile/${currentUser?.username}`} className={`${pathname.includes(currentUser?.username) ? 'bg-green-500 text-black' : 'text-light'} hidden md:flex items-center gap-4 hover:text-black hover:bg-green-500 font-medium p-4`}>
        <FaUserCircle size={25}/>
        <span className="hidden md:block">Profile</span>
      </Link>
      <SignOutButton/>
    </nav>
  )
};

export default Navbar;
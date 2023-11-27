import React from 'react';
import Link from 'next/link';

import {
  IoHome,
  IoSearchOutline,
  IoNotifications,
  IoMail,
  IoPeople,
  IoLogOut
} from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className='flex flex-col'>
      <Link href="/dashboard/" className='text-light hover:text-black hover:bg-green-500 font-medium p-4 flex items-center gap-4'>
        <IoHome size={25}/>
        <span>Home</span>
      </Link>
      <Link href="/dashboard/explore" className='text-light hover:text-black hover:bg-green-500 font-medium p-4 flex items-center gap-4'>
        <IoSearchOutline size={25}/>
        <span>Explore</span>
      </Link>
      <Link href="/dashboard/notifications" className='text-light hover:text-black hover:bg-green-500 font-medium p-4 flex items-center gap-4'>
        <IoNotifications size={25}/>
        <span>Notifications</span>
      </Link>
      <Link href="/dashboard/messages" className='text-light hover:text-black hover:bg-green-500 font-medium p-4 flex items-center gap-4'>
        <IoMail size={25}/>
        <span>Messages</span>
      </Link>
      <Link href="/dashboard/friends" className='text-light hover:text-black hover:bg-green-500 font-medium p-4 flex items-center gap-4'>
        <IoPeople size={25}/>
        <span>Friends</span>
      </Link>
      <Link href="/dashboard/profile" className='text-light hover:text-black hover:bg-green-500 font-medium p-4 flex items-center gap-4'>
        <FaRegUserCircle size={25}/>
        <span>Profile</span>
      </Link>
      <Link href="/dashboard/sign-out" className='text-light hover:text-black hover:bg-green-500 font-medium p-4 flex items-center gap-4'>
        <IoLogOut size={25}/>
        <span>Sign Out</span>
      </Link>
    </nav>
  )
};

export default Navbar;
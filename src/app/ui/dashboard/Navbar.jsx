import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className='flex flex-col'>
      <Link href="/dashboard/" className='text-light hover:text-black hover:bg-green-500 font-medium p-4'>Home</Link>
      <Link href="/dashboard/explore" className='text-light hover:text-black hover:bg-green-500 font-medium p-4'>Explore</Link>
      <Link href="/dashboard/notifications" className='text-light hover:text-black hover:bg-green-500 font-medium p-4'>Notifications</Link>
      <Link href="/dashboard/messages" className='text-light hover:text-black hover:bg-green-500 font-medium p-4'>Messages</Link>
      <Link href="/dashboard/friends" className='text-light hover:text-black hover:bg-green-500 font-medium p-4'>Friends</Link>
      <Link href="/dashboard/profile" className='text-light hover:text-black hover:bg-green-500 font-medium p-4'>Profile</Link>
      <Link href="/dashboard/sign-out" className='text-light hover:text-black hover:bg-green-500 font-medium p-4'>Sign Out</Link>
    </nav>
  )
};

export default Navbar;
import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className='flex flex-col'>
      <Link href="/dashboard/" className='text-light font-medium p-4 cursor-pointer hover:bg-green-400'>Home</Link>
      <Link href="/dashboard/explore" className='text-light font-medium p-4 cursor-pointer hover:bg-green-400'>Explore</Link>
      <Link href="/dashboard/notifications" className='text-light font-medium p-4 cursor-pointer hover:bg-green-400'>Notifications</Link>
      <Link href="/dashboard/messages" className='text-light font-medium p-4 cursor-pointer hover:bg-green-400'>Messages</Link>
      <Link href="/dashboard/friends" className='text-light font-medium p-4 cursor-pointer hover:bg-green-400'>Friends</Link>
      <Link href="/dashboard/profile" className='text-light font-medium p-4 cursor-pointer hover:bg-green-400'>Profile</Link>
      <Link href="/dashboard/sign-out" className='text-light font-medium p-4 cursor-pointer hover:bg-green-400'>Sign Out</Link>
    </nav>
  )
};

export default Navbar;
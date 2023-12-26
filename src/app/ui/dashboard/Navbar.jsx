"use client"

import React from 'react';
import SignOutButton from './SignOutButton';
import { useSelector } from 'react-redux';
import NavLink from './NavLink';

const Navbar = () => {
  const currentUser = useSelector(state => state.currentUser.value);
  return (
    <nav className='flex flex-row md:flex-col bg-softDark shadow-md md:rounded-md overflow-hidden'>
      <NavLink
        name={'home'}
        url={"/dashboard"}
        mobileViewOrder={'order-1'}
      />
      <NavLink
        name={'explore'}
        url={"/dashboard/explore"}
        mobileViewOrder={'order-2'}
      />
      <NavLink
        name={'notifications'}
        url={"/dashboard/notifications"}
        mobileViewOrder={'order-5'}
      />
      <NavLink
        name={'messages'}
        url={"/dashboard/messages"}
        mobileViewOrder={'order-4'}
      />
      <NavLink
        name={'friends'}
        url={"/dashboard/friends"}
        mobileViewOrder={'order-3'}
      />
      <NavLink
        name={'profile'}
        url={`/dashboard/profile/${currentUser?.username}`}
      />
      <SignOutButton/>
    </nav>
  )
};

export default Navbar;
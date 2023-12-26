"use client"

import React from 'react';
import SignOutButton from './SignOutButton';
import { useSelector } from 'react-redux';
import NavLink from './NavLink';
import staticData from '@/assets/data/staticData';

const Navbar = () => {
  const currentUser = useSelector(state => state.currentUser.value);
  return (
    <nav className='flex flex-row md:flex-col bg-softDark shadow-md md:rounded-md overflow-hidden'>
      {staticData.navbar.map((navLink) => (
        <NavLink
          key={navLink.name}
          name={navLink.name}
          url={navLink.name !== 'profile' ? navLink.url : navLink.url + `/${currentUser?.username}`}
          mobileViewOrder={navLink.mobileViewOrder}
        />
      ))}
      <SignOutButton/>
    </nav>
  )
};

export default Navbar;
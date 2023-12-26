import React from 'react';
import SignOutButton from './SignOutButton';
import NavLink from './NavLink';
import staticData from '@/assets/data/staticData';

const Navbar = () => {
  return (
    <nav className='flex flex-row md:flex-col bg-softDark shadow-md md:rounded-md overflow-hidden'>
      {staticData.navbar.map((navLink) => (
        <NavLink
          key={navLink.name}
          name={navLink.name}
          url={navLink.url}
          mobileViewOrder={navLink.mobileViewOrder}
        />
      ))}
      <SignOutButton/>
    </nav>
  )
};

export default Navbar;
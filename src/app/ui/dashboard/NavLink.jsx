import React from 'react';
import Link from 'next/link';
import { FaUserCircle } from "react-icons/fa";
import {
  IoHome,
  IoSearch,
  IoNotifications,
  IoMail,
  IoPeople,
} from "react-icons/io5";
import { usePathname } from 'next/navigation';

const NavLink = ({ name, url, mobileViewOrder = 'order-none' }) => {
  const pathname = usePathname();
  const icons = {
    home: <IoHome className='w-[25px] h-[25px]'/>,
    explore: <IoSearch className='w-[25px] h-[25px]'/>,
    notifications: <IoNotifications className='w-[25px] h-[25px]'/>,
    messages: <IoMail className='w-[25px] h-[25px]'/>,
    friends: <IoPeople className='w-[25px] h-[25px]'/>,
    profile: <FaUserCircle className='w-[25px] h-[25px]'/>
  };
  return (
    <Link
      href={url}
      className={`${name !== 'profile' ? 'flex' : 'hidden md:flex'} justify-center md:justify-normal items-center gap-4 p-4 w-full font-medium ${mobileViewOrder} md:order-none ${pathname === url ? 'bg-green-500 text-black' : 'text-light'} hover:text-black hover:bg-green-500`}
    >
      {icons[name]}
      <span className="hidden md:block capitalize">{name}</span>
    </Link>
  )
};

export default NavLink;
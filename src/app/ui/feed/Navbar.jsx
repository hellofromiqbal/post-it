import React from 'react';

const Navbar = () => {
  return (
    <header className='bg-gradient-to-br from-green-600 via-green-500 to-green-400 flex items-center h-12 sticky top-0'>
      <nav className='flex justify-between items-center w-full max-w-6xl mx-auto'>
        <div>
          <h1 className='text-white text-2xl font-extrabold'>Post<span className='text-black'>It</span></h1>
        </div>
        <ul className='flex gap-10'>
          <li className='text-black font-medium'><a href="#">Home</a></li>
          <li className='text-black font-medium'><a href="#">Friends</a></li>
          <li className='text-black font-medium'><a href="#">Notification</a></li>
          <li className='text-black font-medium'><a href="#">Profile</a></li>
        </ul>
      </nav>
    </header>
  )
};

export default Navbar;
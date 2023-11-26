import React from 'react';

const Navbar = () => {
  return (
    <header className='bg-gradient-to-br bg-softDark flex items-center h-12 sticky top-0 z-10'>
      <nav className='flex justify-between items-center w-full max-w-6xl mx-auto'>
        <div>
          <h1 className='text-light text-2xl font-extrabold'>Post<span className='text-softDark bg-green-500 px-1 rounded-md'>It</span></h1>
        </div>
        <ul className='flex gap-10'>
          <li className='text-light font-medium'><a href="#">Home</a></li>
          <li className='text-light font-medium'><a href="#">Friends</a></li>
          <li className='text-light font-medium'><a href="#">Notification</a></li>
          <li className='text-light font-medium'><a href="#">Profile</a></li>
        </ul>
      </nav>
    </header>
  )
};

export default Navbar;
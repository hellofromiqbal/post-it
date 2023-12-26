"use client"

import React from 'react';
import { FaArrowLeft } from "react-icons/fa6";
import { useRouter } from 'next/navigation';

const BackButton = () => {
  const router = useRouter();
  const handleClick = () => {
    router.back();
  };
  return (
    <button className='hidden md:flex gap-2 p-4 items-center opacity-70 w-max' onClick={handleClick}>
      <FaArrowLeft size={15}/>
      <span>Back</span>
    </button>
  )
};

export default BackButton;
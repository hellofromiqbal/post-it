"use client"

import React from 'react';
import { FaShare } from "react-icons/fa6";

const ShareButton = ({ contentType }) => {
  const handleShare = (e) => {
    e.preventDefault();
    console.log('Shared!');
  };
  return (
    <button className='flex gap-2 items-center' onClick={(e) => handleShare(e)}>
      <FaShare size={contentType !== 'comment' ? 20 : 15} className='w-4 md:w-auto'/>
      <span className={`${contentType !== 'comment' ? 'text-sm' : ''} opacity-70`}>0</span>
    </button>
  )
};

export default ShareButton;
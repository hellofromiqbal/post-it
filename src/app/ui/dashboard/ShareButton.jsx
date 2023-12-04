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
      <FaShare size={contentType === 'post' || contentType === 'profile' ? 20 : 15}/>
      <span className={`${contentType === 'post' || contentType === 'profile' ? 'text-sm' : ''} opacity-70`}>0</span>
    </button>
  )
};

export default ShareButton;
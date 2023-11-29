import React from 'react';
import Link from 'next/link';
import { FaArrowLeft } from "react-icons/fa6";

const BackButton = () => {
  return (
    <Link href="/dashboard" className='flex gap-2 p-4 items-center opacity-70 w-max'>
      <FaArrowLeft size={15}/>
      <span>Back</span>
    </Link>
  )
};

export default BackButton;
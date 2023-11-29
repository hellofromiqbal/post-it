"use client"

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaHeart, FaShare } from "react-icons/fa6";
import { FaComment } from "react-icons/fa";

const ContentCard = ({ data, contentType = 'post' }) => {
  return (
    <div className='flex flex-row gap-4 w-full p-4'>
      <div>
        <Link href={`/dashboard/profile/${data?.authorUsername}`}>
          <div className='w-[50px] h-[50px] rounded-full bg-light relative overflow-hidden'>
            <Image src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWFufGVufDB8fDB8fHww" alt='profpic' fill className='object-cover'/>
          </div>
        </Link>
      </div>
      <div className='flex flex-col gap-2 w-full'>
        <div className='flex flex-col'>
          <div className='flex gap-2 items-center'>
            <Link href={`/dashboard/profile/${data?.authorUsername}`} className='font-semibold'>
              {data?.authorFullname}
            </Link>
            <Link href={`/dashboard/profile/${data?.authorUsername}`} className='text-sm opacity-70'>
              {data?.authorUsername}
            </Link>
          </div>
          <p className='opacity-70'>{data?.textContent}</p>
        </div>
        <div className={`flex justify-end items-center gap-10 text-light text-xs ${contentType === 'post' ? 'text-base' : 'text-xs' }`}>
          <Link href="#" className='flex gap-2 items-center'>
            <FaHeart size={contentType === 'post' ? 20 : 15}/>
            <span className={`${contentType === 'post' ? 'text-sm' : ''} opacity-70`}>1.6K</span>
          </Link>
          <Link href="#" className='flex gap-2 items-center'>
            <FaComment size={contentType === 'post' ? 20 : 15}/>
            <span className={`${contentType === 'post' ? 'text-sm' : ''} opacity-70`}>756</span>
          </Link>
          <Link href="#" className='flex gap-2 items-center'>
            <FaShare size={contentType === 'post' ? 20 : 15}/>
            <span className={`${contentType === 'post' ? 'text-sm' : ''} opacity-70`}>800</span>
          </Link>
        </div>
      </div>
    </div>
  )
};

export default ContentCard;
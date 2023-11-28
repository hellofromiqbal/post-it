import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaHeart, FaShare } from "react-icons/fa6";
import { FaComment } from "react-icons/fa";
import DeletePostButton from './DeletePostButton';

const PostCard = ({ post }) => {
  return (
    <div className='flex flex-row gap-4 bg-softDark rounded-md p-4 shadow-md text-light'>
      <div>
        <div className='w-[50px] h-[50px] rounded-full bg-light relative overflow-hidden'>
          <Image src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWFufGVufDB8fDB8fHww" alt='profpic' fill className='object-cover'/>
        </div>
      </div>
      <div className='flex flex-col gap-2 w-full'>
        <div className='flex flex-col'>
          <div className='flex gap-2 items-center'>
            <h2 className='font-semibold'>{post.authorFullname}</h2>
            <p className='text-sm opacity-70'>{post.authorUsername}</p>
          </div>
          <p className='opacity-70'>{post.textContent}</p>
        </div>
        <div className='flex justify-end items-center gap-10 text-light'>
          <Link href="#" className='flex gap-2 items-center'>
            <FaHeart size={20}/>
            <span className='text-sm opacity-70'>1.6K</span>
          </Link>
          <Link href="#" className='flex gap-2 items-center'>
            <FaComment size={20}/>
            <span className='text-sm opacity-70'>756</span>
          </Link>
          <Link href="#" className='flex gap-2 items-center'>
            <FaShare size={20}/>
            <span className='text-sm opacity-70'>800</span>
          </Link>
          <DeletePostButton postId={post._id}/>
        </div>
      </div>
    </div>
  )
};

export default PostCard;
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaArrowLeft, FaHeart, FaShare } from "react-icons/fa6";
import { FaComment } from "react-icons/fa";
import CreateCommentForm from '@/app/ui/dashboard/CreateCommentForm';
import Comments from '@/app/ui/dashboard/Comments';


const getPostData = async (postId) => {
  try {
    const res = await fetch(`${process.env.DOMAIN}/api/posts/read/${postId}`, { cache: 'no-store' });
    if(!res.ok) {
      throw new Error("Failed to fetch post data.");
    }
    return res.json();
  } catch (error) {
    console.log(error.message);
  };
};

const PostPage = async ({params}) => {
  const postData = await getPostData(params.id);
  return (
    <div className='bg-softDark rounded-md shadow-md text-light flex flex-col gap-4 overflow-hidden'>
      <div className='px-4 pt-4'>
        <Link href="/dashboard" className='flex gap-2 items-center opacity-70 w-max'>
            <FaArrowLeft size={15}/>
            <span>Back</span>
          </Link>
      </div>
      <div className='flex flex-row gap-4 px-4'>
        <div>
          <Link href={`/dashboard/profile/${postData.data.authorUsername}`}>
            <div className='w-[50px] h-[50px] rounded-full bg-light relative overflow-hidden'>
              <Image src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWFufGVufDB8fDB8fHww" alt='profpic' fill className='object-cover'/>
            </div>
          </Link>
        </div>
        <div className='flex flex-col gap-2 w-full'>
          <div className='flex flex-col'>
            <div className='flex gap-2 items-center'>
              <Link href={`/dashboard/profile/${postData.data.authorUsername}`} className='font-semibold'>
                {postData.data.authorFullname}
              </Link>
              <Link href={`/dashboard/profile/${postData.data.authorUsername}`} className='text-sm opacity-70'>
                {postData.data.authorUsername}
              </Link>
            </div>
            <p className='opacity-70'>{postData.data.textContent}</p>
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
          </div>
        </div>
      </div>
      <div className='px-4 pb-4 border-b border-gray-700'>
        <CreateCommentForm/>
      </div>
      <Comments/>
    </div>
  )
};

export default PostPage;
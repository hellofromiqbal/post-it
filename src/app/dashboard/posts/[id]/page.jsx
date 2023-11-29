"use client"

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaArrowLeft, FaHeart, FaShare } from "react-icons/fa6";
import { FaComment } from "react-icons/fa";
import CreateCommentForm from '@/app/ui/dashboard/CreateCommentForm';
import Comments from '@/app/ui/dashboard/Comments';
import ContentCard from '@/app/ui/dashboard/ContentCard';

const PostPage = ({params}) => {
  const [postData, setPostData] = useState({});
  useEffect(() => {
    try {
      fetch(`/api/posts/read/${params.id}`, { cache: 'no-store' })
        .then(res => res.json())
        .then(data => setPostData(data.data))
        .catch(err => err.message);
    } catch (error) {
      console.log(error.message);
    };
  }, []);
  return (
    <div className='bg-softDark rounded-md shadow-md text-light flex flex-col gap-0 overflow-hidden'>
      <div className='p-4'>
        <Link href="/dashboard" className='flex gap-2 items-center opacity-70 w-max'>
            <FaArrowLeft size={15}/>
            <span>Back</span>
          </Link>
      </div>
      <ContentCard/>
      <div className='px-4 py-4'>
        <CreateCommentForm/>
      </div>
      <Comments/>
    </div>
  )
};

export default PostPage;
"use client"

import React, { useEffect, useState } from 'react';
import CreateCommentForm from '@/app/ui/dashboard/CreateCommentForm';
import Comments from '@/app/ui/dashboard/Comments';
import ContentCard from '@/app/ui/dashboard/ContentCard';
import BackButton from '@/app/ui/dashboard/BackButton';

const PostPage = ({params}) => {
  const [postData, setPostData] = useState({});
  useEffect(() => {
    try {
      fetch(`/api/posts/${params.id}`, { cache: 'no-store' })
        .then(res => res.json())
        .then(data => setPostData(data.data))
        .catch(err => err.message);
    } catch (error) {
      console.log(error.message);
    };
  }, []);
  return (
    <div className='bg-softDark rounded-md shadow-md text-light flex flex-col gap-0 overflow-hidden'>
      <BackButton/>
      <ContentCard data={postData}/>
      <CreateCommentForm postId={postData._id}/>
      <Comments/>
    </div>
  )
};

export default PostPage;
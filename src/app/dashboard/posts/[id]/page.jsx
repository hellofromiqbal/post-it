"use client"

import React, { useEffect, useState } from 'react';
import CreateCommentForm from '@/app/ui/dashboard/CreateCommentForm';
import Comments from '@/app/ui/dashboard/Comments';
import ContentCard from '@/app/ui/dashboard/ContentCard';
import BackButton from '@/app/ui/dashboard/BackButton';
import { useSelector } from 'react-redux';

const PostPage = ({params}) => {
  const posts = useSelector(state => state.currentPosts.value);
  const postData = posts.find(post => post._id === params.id);
  const allComments = useSelector(state => state.currentComments.value);
  const postComments = allComments.filter(post => post.postId === params.id);
  return (
    <div className='bg-softDark rounded-md shadow-md text-light flex flex-col gap-0 overflow-hidden'>
      <BackButton/>
      <ContentCard data={postData} contentType='detail' customPadding='px-4'/>
      <CreateCommentForm postId={postData?._id}/>
      <Comments comments={postComments}/>
    </div>
  )
};

export default PostPage;
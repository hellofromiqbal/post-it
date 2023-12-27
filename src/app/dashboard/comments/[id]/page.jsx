"use client"

import React from 'react';
import CreateCommentForm from '@/app/ui/dashboard/CreateCommentForm';
import Comments from '@/app/ui/dashboard/Comments';
import ContentCard from '@/app/ui/dashboard/ContentCard';
import BackButton from '@/app/ui/dashboard/BackButton';
import { useSelector } from 'react-redux';

const CommentPage = ({params}) => {
  const comments = useSelector(state => state.currentComments.value);
  const commentData = comments.find(comment => comment._id === params.id);
  const commentReplies = comments.filter(post => post.postId === params.id);
  return (
    <div className='bg-softDark md:rounded-md shadow-md text-light flex flex-col gap-0 pt-4 md:pt-0 overflow-hidden'>
      <BackButton/>
      <ContentCard data={commentData} contentType='detail' customPadding='px-4 pb-4'/>
      <CreateCommentForm data={commentData}/>
      <Comments comments={commentReplies}/>
    </div>
  )
};

export default CommentPage;
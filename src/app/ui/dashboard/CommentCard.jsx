"use client"

import React from 'react';
import ContentCard from './ContentCard';

const CommentCard = () => {
  return (
    <div className='flex flex-row border-t border-gray-700'>
      <ContentCard contentType='comment'/>
    </div>
  )
};

export default CommentCard;
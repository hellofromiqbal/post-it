"use client"

import React from 'react';
import ContentCard from './ContentCard';

const Comments = ({comments}) => {
  return (
    <div className='flex flex-col'>
      {comments?.map(comment => (
        <div key={comment._id} className='flex flex-row'>
          <ContentCard contentType='comment' data={comment}/>
        </div>
      ))}
    </div>
  )
};

export default Comments;
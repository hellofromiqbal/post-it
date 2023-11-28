"use client"

import React, { useEffect, useState } from 'react';
import PostCard from './PostCard';

const Feeds = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("/api/posts/read", { cache: 'no-store' })
      .then(res => res.json())
      .then(data => setPosts(data.data))
      .catch(err => console.log(err.message));
  }, []);

  return (
    <div className='bg-softDark rounded-md shadow-md text-light'>
      <div className='px-4 py-2'>
        <h2 className='font-bold text-xl'>Feeds</h2>
      </div>
      {posts.map(post => (
        <PostCard key={post._id} post={post}/>
      ))}
    </div>
  )
};

export default Feeds;
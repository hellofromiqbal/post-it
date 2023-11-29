"use client"

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
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
    <div className='bg-softDark rounded-md shadow-md text-light overflow-hidden'>
      {posts.map(post => (
        <Link key={post._id} href={`/dashboard/posts/${post._id}`}>
          <PostCard post={post}/>
        </Link>
      ))}
    </div>
  )
};

export default Feeds;
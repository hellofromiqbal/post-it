"use client"

import React from 'react';
import CommentCard from './CommentCard';

const Comments = () => {
  // const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   fetch("/api/posts/read", { cache: 'no-store' })
  //     .then(res => res.json())
  //     .then(data => setPosts(data.data))
  //     .catch(err => console.log(err.message));
  // }, []);

  return (
    <div className='flex flex-col'>
      <h1>This is comment section</h1>
      {/* <CommentCard/>
      <CommentCard/>
      <CommentCard/> */}
    </div>
  )
};

export default Comments;
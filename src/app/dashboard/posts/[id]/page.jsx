import PostCard from '@/app/ui/dashboard/PostCard';
import React from 'react'

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
    <div className='flex flex-col gap-4'>
      <PostCard post={postData.data}/>
    </div>
  )
};

export default PostPage;
import { getPost } from '@/lib/getPosts';
import { notFound } from 'next/navigation';
import React from 'react';

const Posts = async ({ id }: { id: number }) => {
  const posts = await getPost(id);

  if (!posts) {
    notFound();
  }

  return (
    <>
      <h1 className='text-2xl my-3'>Posts</h1>
      {posts.map((post) => {
        return (
          <article
            className='my-3 p-3 border border-[hsla(0,0%,12%)] rounded-md'
            key={post.id}
          >
            <h2 className='text-xl mb-3'>{post.title}</h2>
            <p>{post.body}</p>
          </article>
        );
      })}
    </>
  );
};

export default Posts;

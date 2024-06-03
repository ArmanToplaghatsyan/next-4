'use client';

import { IPost } from '@/type/type';
import axios from 'axios';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function SinglePostPage({ id }: { id: number }) {
  const [post, setPost] = useState<IPost>({} as IPost);

  useEffect(() => {
    axios
      .get('https://dummyjson.com/posts/' + id)
      .then((res) => {
        setPost(res.data);
      })
      .catch(console.warn);
  }, [id]);

  return (
    <div className="block rounded-lg bg-white p-6 text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white">
      <h5 className="mb-2 text-xl font-medium leading-tight">
        {post.title} 
           #{post.tags}
        {':'} {id};
      </h5>
      <p className="mb-4 text-base">{post.body}</p>
      <p className="mb-4 text-base">{post.views}</p>
      <p className="mb-4 text-base">Likes {post.reactions?.likes}</p>
      <p className="mb-4 text-base"> Dislikes {post.reactions?.dislikes}</p>
    </div>
  );
}

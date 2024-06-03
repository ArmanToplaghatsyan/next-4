'use client';
import { IPost } from '@/type/type';
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

export default function GetPostByUser({ userId }: { userId: number }) {
  const [posts, setPosts] = useState<IPost[]>([]);

  useEffect(() => {
    axios
      .get('https://dummyjson.com/posts/user/' + userId)
      .then((res) => {
        setPosts(res.data.posts);
      })
      .catch(console.warn);
  }, [userId]);

  return (
    <div>
      <h2>Get Post By User</h2>

      {posts.map((elm) => {
        return (
          <div key={elm.id} className="border-2 border-indigo-600">
            <h2>{elm.title}</h2>
            <p>{elm.body}</p>
            <Link href={'/posts/' + elm.id}>See More</Link>
          </div>
        );
      })}
    </div>
  );
}

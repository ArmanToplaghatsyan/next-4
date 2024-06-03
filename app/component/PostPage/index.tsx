'use client';

import { IPost } from '@/type/type'
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

export default function PostPage() {
    const [posts, setPosts] = useState<IPost[]>([]);

    useEffect(() => {
        axios.get('https://dummyjson.com/posts')
        .then((res:any) => {
            setPosts(res.data.posts)
        })
        .catch(console.warn)
    }, [])


  return (
    <div>
      <h2>Post Page</h2>
      <div>

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
    </div>
  )
}

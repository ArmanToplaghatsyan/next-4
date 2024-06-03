'use client';
import { IUser } from '@/type/type';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

export default function UserPage() {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    axios
      .get('http://dummyjson.com/users')
      .then((res) => {
        setUsers(res.data.users);
      })
      .catch(console.warn);
  }, []);

  return (
    <div>
      <h3>User Page</h3>
      {users.map((elm) => {
        return (
          <div key={elm.id} className="border-2 border-indigo-600">
            <h2>
              {elm.firstName} {elm.lastName}
            </h2>
            <Link href={'/users/' + elm.id}>See More</Link>
          </div>
        );
      })}
    </div>
  );
}

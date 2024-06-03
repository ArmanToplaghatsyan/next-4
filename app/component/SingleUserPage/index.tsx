'use client';

import { IUser } from '@/type/type';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function SingleUserPage({ id }: { id: number }) {
  console.log(id);

  const [user, setUser] = useState<IUser>({} as IUser);

  useEffect(() => {
    axios
      .get('http://dummyjson.com/users/' + id)
      .then((res) => {
        setUser(res.data);
      })
      .catch(console.warn);
  }, [id]);

  return (
    <div>
      <div className="block rounded-lg bg-white p-6 text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white">
        <h5 className="mb-2 text-xl font-medium leading-tight">
          {user.firstName} {user.lastName}
          {':'} {id}
        </h5>
        <p className="mb-4 text-base">
          {user.username} {user.maidenName}
        </p>
        <p className="mb-4 text-base">{user.phone}</p>
        <p className="mb-4 text-base">{user.email}</p>
        <p className="mb-4 text-base">{user.password}</p>
        <p className="mb-4 text-base">{user.birthDate}</p>
        <p className="mb-4 text-base">{user.gender} </p>
        <p className="mb-4 text-base">{user.age}</p>

        <Image src={user.image} width={200} height={250} alt="..." />
        <Link href={'/users/' + id + '/posts'}>See User Post</Link>
      </div>
    </div>
  );
}

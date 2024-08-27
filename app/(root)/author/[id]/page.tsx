import { getUserInfo } from '@/lib/actions/users.actions';
import { getAuth } from '@clerk/nextjs/server';
import Image from 'next/image';
import React from 'react';

const AuthorPage = async ({ params }) => {
  // const { userId } = await getAuth();
  console.log(params.id);
  const userinfo = await getUserInfo({ userId: params.id });
  return (
    <div className="h-full mt-40">
      <h1>{userinfo.name}</h1>
      <Image src={userinfo.picture} width={200} height={200} alt="author pic" />
    </div>
  );
};

export default AuthorPage;

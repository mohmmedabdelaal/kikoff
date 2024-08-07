import { SignIn } from '@clerk/nextjs';
import React from 'react';

const page = () => {
  return (
    <div className="flex min-h-full min-w-full bg-slate-700">
      <div className="p-6">
        <SignIn />
      </div>
      <div>
        <h1>Kickoff web site</h1>
      </div>
    </div>
  );
};

export default page;

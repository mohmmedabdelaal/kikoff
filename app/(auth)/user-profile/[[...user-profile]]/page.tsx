import { UserProfile } from '@clerk/nextjs';
import React from 'react';

const Page = () => {
  return (
    <div>
      <UserProfile path="/user-profile" routing="path" />
    </div>
  );
};

export default Page;

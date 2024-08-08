import { SignIn } from '@clerk/nextjs';

const page = () => {
  return (
    <div className="flex min-h-full min-w-full bg-slate-700">
      <SignIn />
    </div>
  );
};

export default page;

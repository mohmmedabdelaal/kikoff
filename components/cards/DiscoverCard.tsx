import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const DiscoverCard = () => {
  return (
    <div className=" flex w-full max-w-4xl mx-auto">
      <Image
        src="/images/Hand-of-God.png"
        width={200}
        height={200}
        alt="Summer's Biggest Transfers"
        className="background-image w-full block"
      />
      <div className="overlay absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white">
        <div className="logo">
          <Image
            src="/images/news/ai-robot.jpg"
            width={800}
            height={800}
            alt="Goal Logo"
            style={{ width: '50px' }}
          />
        </div>
        <h1 className="text-xl font-bold my-2">
          A+ OR D-? GOAL GRADES THE SUMMER&apos;S BIGGEST TRANSFERS
        </h1>
        <Link
          href="#"
          className="bg-orange-400 hover:bg-orange-500 text-white px-4 py-2 rounded-md no-underline"
        >
          Discover the best & worst deals
        </Link>
      </div>
    </div>
  );
};

export default DiscoverCard;

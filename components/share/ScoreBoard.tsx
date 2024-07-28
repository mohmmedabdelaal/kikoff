import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ScoreBoard = () => {
  return (
    <Link href="/news" className="flex flex-col w-full text-light-900 p-1">
      <div className="flex border-b-[16px] border-blue-900 my-8 ">
        <h1 className="h1-bold text-dark100_light900 text-center pb-4">
          Match Type
        </h1>
      </div>

      <div className="bg-gray-800 font-sans text-white p-0 m-0 flex justify-evenly items-center p-6 bg-gray-700">
        <div className="flex flex-col items-center">
          <div>ARGENTINA U23</div>
          <Image
            src="/images/Brazil’s.jpeg"
            width={400}
            height={400}
            alt="Argentina Logo"
            className="w-12 h-12"
          />
        </div>
        <div className="text-center">
          <div>Summer Olympics</div>
          <div className="text-2xl my-2">16:00</div>
          <div>Sapporo Stadium</div>
        </div>
        <div className="flex flex-col items-center">
          <div>IRAQ U23</div>
          <Image
            src="/images/Hand-of-God.png"
            width={400}
            height={400}
            alt="Iraq Logo"
            className="w-12 h-12"
          />
        </div>
      </div>
    </Link>
  );
};

export default ScoreBoard;

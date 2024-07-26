import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ScoreBoard = () => {
  return (
    <Link href="/news" className="flex-center w-full text-light-900 p-1">
      <div className="flex flex-col justify-between items-center p-4  h-20">
        <div className="flex border-b-[16px] border-blue-900 my-8 ">
          <h1 className="h1-bold text-dark100_light900 pb-4">Match Type</h1>
        </div>

        <div className="flex gap-7 mt-8">
          <div className="flex items-center">
            <div className="flex flex-col items-center">
              <Image
                width={200}
                height={600}
                src="/images/news/hiking.jpg"
                alt="t1"
                className="h-16 mr-2"
              />
              <span>
                barcelona
                {/* {team1Name} */}
              </span>
            </div>
          </div>
          <div className="flex flex-col flex-grow items-center">
            <span className="mr-2">5:00</span>
            <span className="text-2xl font-bold">0-2</span>
          </div>
          <div className="flex items-center">
            <div className="flex flex-col items-center">
              <Image
                width={200}
                height={600}
                src="/images/news/couple-cooking.jpg"
                alt="t2"
                className="h-16 mr-2"
              />
              <span>Madrid</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ScoreBoard;

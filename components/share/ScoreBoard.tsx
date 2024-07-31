import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Tags from './Tags';

interface Props {
  matchType: string;
  t1Logo: string;
  t2Logo: string;
  t1Name: string;
  t2Name: string;
}

const ScoreBoard = ({ matchType, t1Logo, t2Logo, t1Name, t2Name }: Props) => {
  return (
    <Link href="/news" className="flex flex-col  w-full text-light-900">
      <div className="p-2">
        <Tags />
      </div>
      <div className="flex items-center justify-center my-8 ">
        <h1 className="h1-bold text-slate-200 pb-4">{matchType}</h1>
      </div>

      <div className="bg-gray-700 hover:bg-gray-800 w-full font-sans text-white flex justify-evenly items-center p-6">
        <div className="flex flex-col items-center">
          <Image
            src={t1Logo}
            width={400}
            height={400}
            alt="Argentina Logo"
            className="w-20 h-20 mb-2
            "
          />
          <div>{t1Name}</div>
        </div>

        <div className="text-center">
          <div>Summer Olympics</div>
          <div className="text-2xl my-2">20:00</div>
          <div>Sapporo Stadium</div>
        </div>
        <div className="flex flex-col items-center">
          <Image
            src={t2Logo}
            width={400}
            height={400}
            alt="Logo"
            className="w-20 h-20 mb-2"
          />
          <div>{t2Name}</div>
        </div>
      </div>
    </Link>
  );
};

export default ScoreBoard;

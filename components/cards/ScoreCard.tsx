import Image from 'next/image';
import React from 'react';
import ScoreBoard from '../share/ScoreBoard';

const ScoreCard = () => {
  return (
    <div className="max-w rounded w-[1200px] bg-slate-800 overflow-hidden shadow-sm">
      <Image
        width={400}
        height={400}
        className="w-full h-52"
        src="/images/Brazil’s.jpeg"
        alt="Sunset in the mountains"
      />
      <div>
        <ScoreBoard />
      </div>
    </div>
  );
};

export default ScoreCard;

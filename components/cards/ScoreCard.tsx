import Image from 'next/image';
import React from 'react';
import ScoreBoard from '../share/ScoreBoard';

const ScoreCard = () => {
  return (
    <div className="max-w rounded bg-slate-800 overflow-hidden shadow-sm col-span-2 mb-4">
      <Image
        width={400}
        height={400}
        className="w-full h-52"
        src="/images/Brazil’s.jpeg"
        alt="Sunset in the mountains"
      />
      <div>
        <ScoreBoard
          matchType="friendly"
          t1Name="barcelona"
          t2Name="real madrid"
          t1Logo="/images/bar.png"
          t2Logo="/images/real.png"
        />
      </div>
    </div>
  );
};

export default ScoreCard;

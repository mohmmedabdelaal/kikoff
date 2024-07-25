import { Link } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import ScoreBoard from '../share/ScoreBoard';

const ScoreCard = () => {
  return (
    <div className="max-w rounded w-[1200px] bg-slate-800 overflow-hidden shadow-sm">
      <div className="h-1/4">
        <Image
          width={400}
          height={400}
          className="w-full"
          src="/images/Brazil’s.jpeg"
          alt="Sunset in the mountains"
        />
      </div>
      <div>
        <ScoreBoard />
      </div>
    </div>
  );
};

export default ScoreCard;

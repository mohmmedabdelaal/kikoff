import Image from 'next/image';
import React from 'react';

const DetailsCard = () => {
  return (
    <article className="flex justify-center items-center h-screen bg-gray-200 m-0 p-0 font-sans">
      <div className="bg-gray-800 text-white w-3/5 max-w-3xl p-0 shadow-lg">
        <Image
          width={400}
          height={400}
          src="./public/33.jfif"
          alt="Casemiro holding a trophy"
          className="w-full h-auto block"
        />
        <div className="p-5">
          <h1 className="text-2xl mt-5">End was nigh</h1>
          <p className="text-lg leading-relaxed">
            Back in May, Wembley looked to be the scene of Casemiro s last stand
            as a United player. He was left out of the starting line-up for the
            FA Cup final and was initially named on the substitutes bench on the
            teamsheet, only for United to reveal on their own website that he
            was not in the squad after all.
          </p>
          <p className="text-lg leading-relaxed">c</p>
          <p className="text-lg leading-relaxed">b</p>
          <p className="text-lg leading-relaxed">a</p>
        </div>
      </div>
    </article>
  );
};

export default DetailsCard;

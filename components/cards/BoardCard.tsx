import Image from 'next/image';
import React from 'react';

const BoardCard = () => {
  return (
    <div className="container bg-gray-500 text-light-800 p-6 rounded-lg text-center w-2/3 mx-auto">
      <div className="title flex justify-center flex-col mb-4">
        <div className="date text-lg mb-2 pt-1">JULY 2024</div>
        <div className=" relative after:content-[''] after:w-4/5 after:h-[2px]  after:shadow-sm	 after:rounded-md after:absolute after:top-1/2 after:-translate-y-1/2 after:left-1/2 after:-translate-x-1/2"></div>
        <span>
          <span className="competition-data text-xs font-thin block">
            27 Jul
          </span>
        </span>
      </div>
      <div className="match-info  flex mr-6">
        <div className="status text-xs mr-20">
          <p>Club Friendly</p>
          <p>FT</p>
        </div>
        <div className="score flex items-center ml-20">
          <div className="team flex items-center mx-4 text-lg font-bold">
            <span>LIVERPOOL</span>
            <Image
              src="/images/barca.jpg"
              alt="Liverpool"
              width={200}
              height={200}
              className="w-8 h-8 mx-4"
            />
          </div>
          <div className="result text-2xl">
            <span>1 - 0</span>
          </div>
          <div className="team flex items-center mx-4 text-lg font-bold">
            <Image
              src="/images/city.jpg"
              alt="Real Betis"
              width={200}
              height={200}
              className="w-8 h-8 mx-4"
            />
            <span>REAL BETIS</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardCard;

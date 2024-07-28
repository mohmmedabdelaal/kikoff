import Image from 'next/image';
import React from 'react';

const Fixture = () => {
  return (
    <div className="w-full max-w-xl mx-auto   p-6 bg-gray-800 rounded-lg">
      <div className="flex items-center p-2 bg-gray-700 rounded-t-lg">
        <Image
          src="/images/Brazil’s.jpeg"
          width={200}
          height={200}
          alt="League Logo"
          className="w-6 h-6 mr-2"
        />
        <span>URUGUAY - PRIMERA DIVISION</span>
      </div>

      <div className="flex justify-between items-center p-2 border-b border-gray-600">
        <div className="flex-1">21:00</div>
        <div className="flex items-center flex-3">
          <span className="flex items-center">
            <Image
              src="/images/Brazil’s.jpeg"
              width={200}
              height={200}
              alt="Nacional Logo"
              className="w-6 h-6 mr-1"
            />
            Nacional
          </span>
          <span className="mx-2">vs</span>
          <span className="flex items-center">
            <Image
              src="/images/Brazil’s.jpeg"
              width={200}
              height={200}
              alt="Boston River Logo"
              className="w-6 h-6 mr-1"
            />
            Boston River
          </span>
        </div>
      </div>

      <div className="flex justify-between items-center p-2">
        <div className="flex-1">21:00</div>
        <div className="flex items-center flex-3">
          <span className="flex items-center">
            <Image
              src="/images/Brazil’s.jpeg"
              width={200}
              height={200}
              alt="Danubio Logo"
              className="w-6 h-6 mr-1"
            />
            Danubio
          </span>
          <span className="mx-2">vs</span>
          <span className="flex items-center">
            <Image
              src="/images/Brazil’s.jpeg"
              width={200}
              height={200}
              alt="Liverpool FC Logo"
              className="w-6 h-6 mr-1"
            />
            Liverpool FC
          </span>
        </div>
      </div>
    </div>
  );
};

export default Fixture;

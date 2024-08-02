import Image from 'next/image';
import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-[90vh] mt-8">
      <Image
        src="/images/barca.jpg" // Update with correct path
        alt="Hero Image"
        layout="fill"
        objectFit="cover"
        priority // Prioritize loading
      />
      <div className="overlay absolute  inset-0 bg-black bg-opacity-50 flex justify-center items-end">
        <div className="headline   max-w-md text-white text-center p-6 rounded-md">
          <h1 className="m-0 pl-24  text-5xl font-bold">
            FAN-FAVOURITE GREALISH MUST RAISE HIS GAME TO STAY AT CITY
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;

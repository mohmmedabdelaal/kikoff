import Image from 'next/image';
import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-[95vh]">
      <Image
        src="/images/Hand-of-God.png" // Update with correct path
        alt="Hero Image"
        fill // Fill the container
        className="object-cover" // Cover the container
        priority // Prioritize loading
      />
      <div className="overlay absolute inset-0 bg-black bg-opacity-50 flex justify-center items-end">
        <div className="headline pl-6 text-white text-center p-6 rounded-md">
          <h1 className="m-0 text-5xl">
            FAN-FAVOURITE GREALISH MUST RAISE HIS GAME TO STAY AT CITY
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;

'use client';
import Image from 'next/image';
import React, { useState } from 'react';

const SearchBar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive(!isActive);
  };

  return (
    <div
      className={`flex items-center bg-blue-100 p-2 h-12 rounded-full shadow-lg m-2 relative transition-width duration-1500 ease-in-out ${
        isActive ? 'w-12' : 'w-72'
      }`}
    >
      <Image
        src="https://cdn4.iconfinder.com/data/icons/evil-icons-user-interface/64/magnifier-512.png"
        alt="magnifier"
        width={200}
        height={200}
        className="w-6 cursor-pointer absolute left-5"
        onClick={toggleActive}
      />
      <input
        type="text"
        className={`bg-transparent border-none ml-12 mr-12 outline-none text-gray-700 transition-width duration-1000 ease-in-out delay-500 ${
          isActive ? 'w-0' : 'w-full'
        }`}
        placeholder="Search ..."
      />
      <Image
        src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-25-512.png"
        alt="mic-icon"
        width={200}
        height={200}
        className={`w-8 absolute right-2 transition-width duration-400 ease-in-out delay-1000 ${
          isActive ? 'w-0' : 'w-8 border-red-500'
        }`}
      />
    </div>
  );
};

export default SearchBar;

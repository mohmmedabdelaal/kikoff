import React from 'react';
import { Card } from '../ui/card';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  title: string;
  content: string;
  image: string;
  linkSrc: string;
}

const NewsCard = ({ title, content, image, linkSrc }: Props) => {
  return (
    <div className="flex flex-col justify-between max-w-sm rounded bg-slate-300 overflow-hidden shadow-sm">
      <Image
        width={400}
        height={400}
        className="w-full"
        src={image}
        alt="Sunset in the mountains"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{content}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <Link
          href={`/news/${linkSrc}`}
          className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
        >
          More details
        </Link>
      </div>
    </div>
  );
};

export default NewsCard;

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Metrics from '../share/Metrics';
import HTMLviewer from '../share/HtmlViewer';

interface Props {
  title: string;
  content: string;
  image: string;
  linkSrc: string;
  createdAt: Date;
}

const NewsCard = ({ title, content, image, linkSrc, createdAt }: Props) => {
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
        <HTMLviewer data={content} />
      </div>
      <div className="flex flex-wrap justify-between px-6 pt-4 pb-2">
        <Metrics createdAt={createdAt} replays={3} />
        <Link
          href={`/news/${linkSrc}`}
          className=" flex rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
        >
          <p> More details</p>
          <Image
            src="/assets/icons/arrow.svg"
            width={20}
            height={20}
            alt="arrow"
          />
        </Link>
      </div>
    </div>
  );
};

export default NewsCard;

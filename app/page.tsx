import NewsCard from '@/components/cards/NewsCard';
import ScoreCard from '@/components/cards/ScoreCard';
import { createNews } from '@/lib/actions/news.actions';
import Image from 'next/image';
import Link from 'next/link';

export default async function Home() {
  return (
    <div id="p-2">
      <div className="flex gap-5 justify-between">
        <ScoreCard />
        <NewsCard />
      </div>
    </div>
  );
}

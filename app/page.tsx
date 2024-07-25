import NewsCard from '@/components/cards/NewsCard';
import ScoreCard from '@/components/cards/ScoreCard';
import { createNews } from '@/lib/actions/news.actions';
import Image from 'next/image';
import Link from 'next/link';
import { title } from 'process';

export default async function Home() {
  return (
    <div id="p-2">
      <Link href="/livefootball">Live football today</Link>
      <div className="flex justify-between">
        <ScoreCard />
        <NewsCard />
      </div>
    </div>
  );
}

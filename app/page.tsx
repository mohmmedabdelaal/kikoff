import NewsCard from '@/components/cards/NewsCard';
import { createNews } from '@/lib/actions/news.actions';
import Image from 'next/image';
import Link from 'next/link';
import { title } from 'process';

export default async function Home() {
  return (
    <div id="page p-2">
      <Link href="/livefootball">Live football today</Link>
      <NewsCard />
      <NewsCard />
      <NewsCard />
      <NewsCard />
      <NewsCard />
      <NewsCard />
      <NewsCard />
      <NewsCard />
      <NewsCard />
      <NewsCard />
      <NewsCard />
      <NewsCard />
    </div>
  );
}

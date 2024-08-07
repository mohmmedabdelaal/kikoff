import NewsCard from '@/components/cards/NewsCard';
import ScoreCard from '@/components/cards/ScoreCard';
import Hero from '@/components/Hero';
import { getNews } from '@/lib/actions/news.actions';

export default async function Home() {
  const { news } = await getNews({});
  console.log(news);

  return (
    <>
      <Hero />
      <div id=" px-1 pb-1 pt-36 max-md:pb-14 sm:px-14">
        <ul className="grid grid-cols-[2fr_1fr_1fr] gap-6 max-h-80 p-6 max-w-6xl">
          <ScoreCard />
          {news.length > 0 &&
            news.map((sNews) => (
              <NewsCard
                key={sNews._id}
                title={sNews.title}
                image={sNews.image}
                content={sNews.content}
                linkSrc={sNews._id}
                createdAt={sNews.createdDate}
              />
            ))}
        </ul>
        {/* </div> */}
      </div>
      <div>{/* <DiscoverCard /> */}</div>
    </>
  );
}

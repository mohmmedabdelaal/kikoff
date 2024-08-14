import NewsCard from '@/components/cards/NewsCard';
import ScoreCard from '@/components/cards/ScoreCard';
import Hero from '@/components/Hero';
import Footer from '@/components/share/footer/Footer';
import { getNews } from '@/lib/actions/news.actions';
import { createUser } from '@/lib/actions/users.actions';

export default async function Home() {
  const { news } = await getNews({});

  return (
    <>
      <Hero />
      <div id=" px-1 pb-1 pt-36 max-md:pb-14 mb-4 sm:px-14">
        <ul className="grid grid-cols-[2fr_1fr_1fr] gap-6 p-6 max-w-6xl">
          <ScoreCard />
          {news.length > 0 &&
            news.map((sNews) => (
              <NewsCard
                key={sNews._id}
                title={sNews.title}
                image={sNews.image}
                linkSrc={sNews._id}
                createdAt={sNews.createdDate}
              />
            ))}
        </ul>
        {/* </div> */}
      </div>
      <div>{/* <DiscoverCard /> */}</div>
      {/* <Footer /> */}
    </>
  );
}

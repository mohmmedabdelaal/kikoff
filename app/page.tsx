import NewsCard from '@/components/cards/NewsCard';
import ScoreCard from '@/components/cards/ScoreCard';
import { createNews, getNews } from '@/lib/actions/news.actions';

export default async function Home() {
  const { news } = await getNews({});
  console.log(news);

  return (
    <div id="p-2">
      {/* <div > */}
      <ul className="grid grid-cols-[2fr_1fr_1fr] gap-6 p-6">
        <ScoreCard />
        {news.length > 0 &&
          news.map((sNews) => (
            <NewsCard
              key={sNews._id}
              title={sNews.title}
              image={sNews.image}
              content={sNews.content}
              linkSrc={sNews._id}
            />
          ))}
      </ul>
      {/* </div> */}
    </div>
  );
}

import { getNewsById } from '@/lib/actions/news.actions';
import mongoose from 'mongoose';
import Image from 'next/image';

const page = async ({ params }) => {
  const { id } = params;
  const sId = new mongoose.Types.ObjectId(id);

  const { news } = await getNewsById({ id });
  if (!news) {
    return <div>loading</div>;
  }
  console.log(news);

  return (
    <article className="news-article">
      <header>
        {/* <Image src={`/images/news/${news.image}`} alt={news.title} fill /> */}
        <h1>{news.title}</h1>
        <time>{'Date'}</time>
      </header>
      <p>{news.content}</p>
    </article>
  );
};

export default page;

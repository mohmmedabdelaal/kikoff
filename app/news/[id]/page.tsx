import { getNewsById } from '@/lib/actions/news.actions';
import mongoose from 'mongoose';
interface Props {
  params: { id: string };
}

interface News {
  title: string;
  content: string;
  // Add other necessary properties here
}

interface GetNewsByIdResponse {
  news?: News;
}

const page = async ({ params }: Props) => {
  const { id } = params;
  const sId = new mongoose.Types.ObjectId(id);

  const response: GetNewsByIdResponse | undefined = await getNewsById({ id });

  if (!response || !response.news) {
    return <div>Loading...</div>;
  }

  const { news } = response;
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

import HTMLviewer from '@/components/share/HtmlViewer';
import { getNewsById } from '@/lib/actions/news.actions';
import { getTimestamp } from '@/lib/utils';
import mongoose from 'mongoose';
import Image from 'next/image';
interface Props {
  params: { id: string };
}

interface News {
  title: string;
  content: string;
  image: string;
  createdDate: Date;

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
    <article className="pt-20">
      <header
        className="flex justify-center items-center bg-gradient-to-r from-blue-400 to-blue-700
"
      >
        <div className="flex justify-center items-center w-full h-full">
          <div className="text-left text-white p-4 max-w-2xl">
            <p className="text-xs opacity-80">Publisher</p>
            <h1 className="text-5xl font-bold mb-4">{news.title}</h1>
            <p className="text-xs opacity-80">
              By John Doe | {getTimestamp(news.createdDate)}
            </p>
          </div>
        </div>
      </header>
      <div className="flex flex-col justify-center m-auto align-center">
        <Image
          src={news.image}
          alt="image"
          width={800}
          height={800}
          className="rounded-md"
        />
        <HTMLviewer data={news.content} />
      </div>
      {/* <p>{news.content}</p> */}
    </article>
  );
};

export default page;

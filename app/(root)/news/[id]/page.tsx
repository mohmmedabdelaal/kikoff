import ReplayFrom from '@/components/form/ReplayFrom';
import HTMLviewer from '@/components/share/HtmlViewer';
import { getNewsById } from '@/lib/actions/news.actions';
import { getUserById, getUserInfo } from '@/lib/actions/users.actions';
import { getTimestamp } from '@/lib/utils';
import { auth } from '@clerk/nextjs';
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
  const { userId: clerkId } = auth();

  let mongodbUser;
  if (clerkId) mongodbUser = await getUserById({ userId: clerkId });

  const result = await getNewsById({ newsId: id });

  return (
    <article className="pt-20">
      <header
        className="flex justify-center items-center bg-gradient-to-r from-blue-400 to-blue-700
"
      >
        <div className="flex justify-center items-center w-full h-full">
          <div className="text-left text-white p-4 max-w-2xl">
            <p className="text-xs opacity-80">Publisher</p>
            <h1 className="text-5xl font-bold mb-4">{result.title}</h1>
            <p className="text-xs opacity-80">
              {result.author.name} | {getTimestamp(result.createdDate)}
            </p>
          </div>
        </div>
      </header>

      <section className="flex justify-center items-center bg-gray-200 m-0 p-0 font-sans">
        <div className="bg-slate-600 text-white w-3/5 max-w-3xl p-0 shadow-lg">
          <Image
            width={600}
            height={600}
            src={result.image}
            alt="Casemiro holding a trophy"
            className="w-full h-auto block"
          />
          <div className="p-5">
            <div className="text-lg leading-relaxed">
              <HTMLviewer data={result.content} />
            </div>
          </div>
        </div>
      </section>
      <div>
        <ReplayFrom
          news={result.content}
          username={result.author?.name}
          authorId={JSON.stringify(mongodbUser._id)}
          newsId={JSON.stringify(result._id)}
        />
      </div>
      {/* <p>{news.content}</p> */}
    </article>
  );
};

export default page;

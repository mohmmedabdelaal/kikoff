import Link from "next/link";

interface NewsItem {
  _id: string;
  title: string;
  // Add other properties if necessary
  // image?: string; // Uncomment if you have an image property
}

interface NewsListProps {
  news: NewsItem[];
}

const NewsList = ({ news }: NewsListProps) => {
  return (
    <ul className="news-list">
      {news.length > 0 &&
        news.map((item) => (
          <li key={item._id}>
            <Link href={`/news/${item._id}`}>
              {/* <img src={`${item.image}`} alt={item.title} /> */}
              <span>{item.title}</span>
            </Link>
          </li>
        ))}
    </ul>
  );
};

export default NewsList
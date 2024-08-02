import Link from 'next/link';

const NewsLis = ({ news }) => {
  return (
    <ul className="news-list">
      {news.length > 0 &&
        news.map((item: any) => (
          <li key={item.id}>
            <Link href={`/news/${item._id}`}>
              {/* <img src={`${item.image}`} alt={item.title} /> */}
              <span>{item.title}</span>
            </Link>
          </li>
        ))}
    </ul>
  );
};

export default NewsLis;

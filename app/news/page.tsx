import Link from 'next/link';
import styles from './page.module.css';
import { getNews } from '@/lib/actions/news.actions';
import Image from 'next/image';
import NewsForm from '@/components/form/NewsForm';

const page = async () => {
  const { news } = await getNews({});
  return (
    <div className={styles.container}>
      <main className={styles.mainContent}>
        <h1>News</h1>
        <ul className="news-list">
          {news.length > 0 &&
            news.map((item) => (
              <li key={item.id}>
                <Link href={`/news/${item._id}`}>
                  {/* <img src={`${item.image}`} alt={item.title} /> */}
                  <span>{item.title}</span>
                </Link>
              </li>
            ))}
        </ul>
        <NewsForm />
      </main>
    </div>
  );
};

export default page;

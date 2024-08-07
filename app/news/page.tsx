import styles from './page.module.css';
import NewsForm from '@/components/form/NewsForm';

const page = async () => {
  // const { news } = await getNews({});
  return (
    <div className={styles.container}>
      <main className={styles.mainContent}>
        <h1>News</h1>
        
        <NewsForm />
      </main>
    </div>
  );
};

export default page;

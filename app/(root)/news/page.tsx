import { auth } from '@clerk/nextjs';
import styles from './page.module.css';
import NewsForm from '@/components/form/NewsForm';
import { redirect } from 'next/navigation';
import { getUserById } from '@/lib/actions/users.actions';

const page = async () => {
  const { userId } = auth();

  if (!userId) redirect('/sign-in');

  const mongoUser = await getUserById({ userId });
  return (
    <div className={styles.container}>
      <main className={styles.mainContent}>
        <h1>News</h1>

        <NewsForm mongodbUserId={JSON.stringify(mongoUser)} />
      </main>
    </div>
  );
};

export default page;

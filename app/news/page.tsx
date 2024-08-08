import { auth } from '@clerk/nextjs';
import styles from './page.module.css';
import NewsForm from '@/components/form/NewsForm';
import { redirect } from 'next/navigation';
import { getUserById } from '@/lib/actions/user.actions';

const page = async () => {
  const { userId } = auth();
  if (!userId) redirect('/sign-in');

  const mongodbUser = await getUserById({ userId });
  console.log('user ' + mongodbUser);

  return (
    <div className={styles.container}>
      <main className={styles.mainContent}>
        <h1>News</h1>

        <NewsForm mongodbUserId={JSON.stringify(mongodbUser)} />
      </main>
    </div>
  );
};

export default page;

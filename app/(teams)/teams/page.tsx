import styles from './page.module.css';
import Link from 'next/link';
import axios from 'axios';
import Image from 'next/image';

const page = async () => {
  const response = await axios.get('https://api.football-data.org/v4/teams/', {
    headers: {
      'X-Auth-Token': process.env.NEXT_PUBLIC_FOOTBALL_DATA,
    },
  });
  const teams = response.data.teams;
  console.log(response.data.teams);

  return (
    <div className={styles.container}>
      <main className={styles.mainContent}>
        <h1>Football Teams</h1>
        <ul className={styles.teamsList}>
          {teams &&
            teams.map((team: any) => (
              <Link href={`/teams/${team.id}`} key={team.id}>
                <li className={styles.teamItem}>
                  <Image src={team.crest} alt={'logo'} width={20} height={20} />
                  <span className={styles.teamName}>{team.name}</span>
                  <span className={styles.teamLeague}>{team.tla}</span>
                </li>
              </Link>
            ))}
        </ul>
      </main>
    </div>
  );
};

export default page;

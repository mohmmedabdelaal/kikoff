import styles from './page.module.css';
import Link from 'next/link';
import Image from 'next/image';
import {  getTeams } from '@/lib/actions/FootballTeam.action';

const page = async () => {
  const { teams } = await getTeams({});

  return (
    <div className={`pt-20`}>
      <main className={styles.mainContent}>
        <h1>Football Teams</h1>
        <ul className={styles.teamsList}>
          {teams.length &&
            teams.map((team: any) => (
              <Link href={`/teams/${team._id}`} key={team._id}>
                <li className={styles.teamItem}>
                  <Image src={team.logo} alt={'logo'} width={20} height={20} />
                  <span className={styles.teamName}>{team.name}</span>
                  <span className={styles.teamLeague}>{team.league}</span>
                  <span>{team.country}</span>
                </li>
              </Link>
            ))}
        </ul>
      </main>
    </div>
  );
};

export default page;

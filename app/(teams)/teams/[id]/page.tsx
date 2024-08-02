import TeamLinks from '@/components/share/TeamLinks';
import { getTeamById } from '@/lib/actions/FootballTeam.action';
import Image from 'next/image';

interface Props {
  params: string;
}

const page = async ({ params }: Props) => {
  const { id } = params;
  const sTeam = await getTeamById(id);
  console.log(sTeam);
  return (
    <div className="bg-red-900 min-h-full pt-16">
      <section className="px-20">
        <header className="flex items-center p-5">
          <Image
            src={sTeam.logo}
            width={200}
            height={200}
            className="w-10 mr-2"
            alt="logo"
          />
          <h1 className="text-6xl text-light-850">{sTeam.name}</h1>
        </header>
        <div className="w-full h-1  rounded-sm bg-gray-700 "></div>
        <TeamLinks />
      </section>
    </div>
  );
};

export default page;

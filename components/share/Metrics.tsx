import { getTimestamp } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  createdAt: Date;
  replays: number;
}

const Metrics = ({ createdAt, replays }: Props) => {
  return (
    <div className="flex">
      <span className="flex items-center justify-start gap-1 bg-transparent p-2">
        <Image
          src="/assets/icons/clock.svg"
          alt="time"
          width={20}
          height={20}
        />
        <p>{getTimestamp(createdAt)}</p>
      </span>
      <span className="flex items-center justify-start gap-1 bg-transparent p-2">
        <Image
          src="/assets/icons/message.svg"
          alt="time"
          width={20}
          height={20}
        />
        <p>{replays}</p>
      </span>
    </div>
  );
};

export default Metrics;

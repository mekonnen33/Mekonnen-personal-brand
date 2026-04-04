import Link from 'next/link';
import { PlayCircle } from 'lucide-react';

import { Episode } from '@/lib/site-data';

type EpisodeCardProps = {
  episode: Episode;
};

export function EpisodeCard({ episode }: EpisodeCardProps) {
  return (
    <article className="card-base flex h-full flex-col p-6">
      <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/10 text-gold">
        <PlayCircle className="h-6 w-6" />
      </div>
      <h3 className="mt-5 text-xl font-semibold text-text">{episode.title}</h3>
      <p className="mt-4 flex-1 text-base leading-7 text-muted">{episode.description}</p>
      <Link href={episode.href} className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-gold">
        Watch episode
      </Link>
    </article>
  );
}

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import { Pillar } from '@/lib/site-data';
import { cn } from '@/lib/utils';

type PillarCardProps = {
  pillar: Pillar;
};

const accentMap = {
  wealth: 'from-wealth/25 to-transparent text-wealth border-wealth/30',
  health: 'from-health/25 to-transparent text-health border-health/30',
  service: 'from-service/25 to-transparent text-service border-service/30'
} as const;

export function PillarCard({ pillar }: PillarCardProps) {
  const Icon = pillar.icon;

  return (
    <article className="group card-base overflow-hidden p-7">
      <div
        className={cn(
          'mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl border bg-gradient-to-br',
          accentMap[pillar.accent as keyof typeof accentMap]
        )}
      >
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-2xl font-semibold text-text">{pillar.title}</h3>
      <p className="mt-4 text-base leading-7 text-muted">{pillar.body}</p>
      <Link
        href={pillar.href}
        className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-gold transition group-hover:gap-3"
      >
        {pillar.title === 'Service' ? 'Learn about SLF' : pillar.title === 'Health' ? 'Explore health content' : 'Explore wealth resources'}
        <ArrowRight className="h-4 w-4" />
      </Link>
    </article>
  );
}

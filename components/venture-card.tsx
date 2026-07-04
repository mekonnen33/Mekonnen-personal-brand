import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import type { Venture } from '@/lib/site-data';

export function VentureCard({ venture }: { venture: Venture }) {
  const isExternal = venture.href.startsWith('http');
  return (
    <Link
      href={venture.href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noreferrer' : undefined}
      className="card-base group flex flex-col gap-4 p-6 transition hover:border-gold/30"
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            {venture.category}
          </p>
          <h3 className="mt-1 text-lg font-semibold text-text">{venture.name}</h3>
        </div>
        {isExternal && (
          <ExternalLink className="mt-1 h-4 w-4 shrink-0 text-muted transition group-hover:text-gold" />
        )}
      </div>
      <p className="text-sm leading-6 text-muted">{venture.description}</p>
    </Link>
  );
}

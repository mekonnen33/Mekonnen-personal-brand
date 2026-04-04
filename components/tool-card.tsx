import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

import { ToolItem } from '@/lib/site-data';

type ToolCardProps = {
  tool: ToolItem;
};

export function ToolCard({ tool }: ToolCardProps) {
  const Icon = tool.icon;

  return (
    <article className="card-base flex h-full flex-col p-6">
      <div className="flex items-center gap-4">
        <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-gold/20 bg-gold/10 text-gold">
          <Icon className="h-6 w-6" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-text">{tool.name}</h3>
          <p className="text-sm text-muted">Recommended workflow tool</p>
        </div>
      </div>
      <p className="mt-5 flex-1 text-base leading-7 text-muted">{tool.description}</p>
      <Link href={tool.href} className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-gold">
        View resource
        <ArrowUpRight className="h-4 w-4" />
      </Link>
    </article>
  );
}

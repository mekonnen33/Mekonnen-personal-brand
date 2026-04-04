import { ReactNode } from 'react';

import { cn } from '@/lib/utils';

type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description: string;
  align?: 'left' | 'center';
  actions?: ReactNode;
};

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = 'left',
  actions
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        'flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between',
        align === 'center' && 'mx-auto max-w-3xl text-center lg:block'
      )}
    >
      <div className={cn('space-y-4', align === 'center' && 'mx-auto')}>
        {eyebrow ? (
          <p className="text-sm font-semibold uppercase tracking-[0.26em] text-gold">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="text-balance text-3xl font-semibold tracking-tight text-text sm:text-4xl lg:text-5xl">
          {title}
        </h2>
        <p className="max-w-2xl text-base leading-7 text-muted sm:text-lg">{description}</p>
      </div>
      {actions ? <div className="shrink-0">{actions}</div> : null}
    </div>
  );
}

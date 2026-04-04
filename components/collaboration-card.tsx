import { CollaborationOption } from '@/lib/site-data';

type CollaborationCardProps = {
  option: CollaborationOption;
};

export function CollaborationCard({ option }: CollaborationCardProps) {
  const Icon = option.icon;

  return (
    <article className="card-base p-6">
      <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-gold">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mt-5 text-xl font-semibold text-text">{option.title}</h3>
      <p className="mt-4 text-base leading-7 text-muted">{option.body}</p>
    </article>
  );
}

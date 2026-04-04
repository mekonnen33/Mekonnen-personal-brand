import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

import { BlogPost } from '@/lib/site-data';

const categoryStyles = {
  Wealth: 'bg-wealth/15 text-wealth border border-wealth/20',
  Health: 'bg-health/15 text-health border border-health/20',
  Service: 'bg-service/15 text-service border border-service/20'
};

type BlogCardProps = {
  post: BlogPost;
};

export function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="card-base flex h-full flex-col p-6">
      <div className="flex items-center justify-between gap-4">
        <span className={`rounded-full px-3 py-1 text-xs font-semibold ${categoryStyles[post.category]}`}>
          {post.category}
        </span>
        <span className="text-sm text-muted">{post.date}</span>
      </div>
      <h3 className="mt-5 text-2xl font-semibold tracking-tight text-text">{post.title}</h3>
      <p className="mt-4 flex-1 text-base leading-7 text-muted">{post.excerpt}</p>
      <Link href={post.href} className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-gold">
        Read more
        <ArrowUpRight className="h-4 w-4" />
      </Link>
    </article>
  );
}

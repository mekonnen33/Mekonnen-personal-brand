import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mekonnen Anebo | Links',
  description: 'All links for Mekonnen Anebo — entrepreneur, nonprofit founder, Army member, and builder.'
};

const links = [
  {
    label: 'Personal Brand Site',
    description: 'Wealth. Health. Service.',
    href: 'https://mekonnenanebo.com',
    primary: true
  },
  {
    label: 'Sensible Living Foundation',
    description: 'Nonprofit improving financial literacy and food access',
    href: 'https://sensiblelivingfoundation.org',
    primary: false
  },
  {
    label: 'Talk Sense on YouTube',
    description: 'Entrepreneurship, wealth, health, and growth. No filters.',
    href: 'https://www.youtube.com/@talksense360',
    primary: false
  },
  {
    label: 'ServiceFlow',
    description: 'Websites and automation for service businesses',
    href: 'https://svc-flow.com',
    primary: false
  },
  {
    label: 'Viral Prints',
    description: 'Custom wall murals and branded environments',
    href: 'https://viralprintsusa.com',
    primary: false
  },
  {
    label: 'Follow on Instagram',
    description: '@mr_mac_',
    href: 'https://www.instagram.com/mr_mac_',
    primary: false
  },
  {
    label: 'Connect on LinkedIn',
    description: 'linkedin.com/in/manebo',
    href: 'https://www.linkedin.com/in/manebo',
    primary: false
  },
  {
    label: 'Work With Me',
    description: 'Speaking, collaboration, and SLF partnerships',
    href: 'https://mekonnenanebo.com#connect',
    primary: false
  }
];

export default function LinksPage() {
  return (
    <div className="min-h-screen bg-background text-text flex flex-col items-center px-4 py-14">

      <div className="flex flex-col items-center gap-4 mb-10">
        <div className="relative h-24 w-24 overflow-hidden rounded-full border-2 border-gold/40">
          <img
            src="/headshot.jpg"
            alt="Mekonnen Anebo"
            className="h-full w-full object-cover object-top"
          />
        </div>
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-text">Mekonnen Anebo</h1>
          <p className="mt-1 text-sm text-muted">Wealth. Health. Service.</p>
          <p className="mt-1 text-xs text-muted">Entrepreneur. Founder. Builder. Proud U.S. Army Member.</p>
        </div>
      </div>

      <div className="w-full max-w-md space-y-3">
        {links.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            target={link.href.startsWith('http') ? '_blank' : undefined}
            rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
            className={
              link.primary
                ? 'flex flex-col items-center justify-center rounded-2xl border border-gold bg-gold/10 px-6 py-4 text-center transition hover:bg-gold/20'
                : 'flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-center transition hover:border-gold/30 hover:bg-white/10'
            }
          >
            <span className={link.primary ? 'text-base font-semibold text-gold' : 'text-base font-medium text-text'}>
              {link.label}
            </span>
            <span className="mt-0.5 text-sm text-muted">{link.description}</span>
          </Link>
        ))}
      </div>

      <p className="mt-10 text-xs text-muted">mekonnenanebo.com</p>
    </div>
  );
}

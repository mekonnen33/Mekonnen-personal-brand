import Link from 'next/link';

import { footerLinks, socialItems } from '@/lib/site-data';

export function SiteFooter() {
  return (
    <footer id="footer" className="border-t border-white/8 bg-black/30">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/30 bg-gold/10 font-semibold text-gold">
                MA
              </span>
              <div>
                <p className="text-lg font-semibold text-text">Mekonnen Anebo</p>
                <p className="text-sm text-muted">Build wealth. Protect your health. Serve the world.</p>
              </div>
            </div>
            <p className="max-w-2xl text-base leading-7 text-muted">
              Founder, Sensible Living Foundation | Mac Financial Group | U.S. Army Reserve
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              {socialItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-muted transition hover:border-gold/30 hover:text-gold"
                    aria-label={item.label}
                  >
                    <Icon className="h-5 w-5" />
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {footerLinks.map((link) => (
              <Link key={link.label} href={link.href} className="text-sm text-muted transition hover:text-text">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-10 border-t border-white/8 pt-6 text-sm text-muted">
          © {new Date().getFullYear()} Mekonnen Anebo. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

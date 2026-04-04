'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

import { cn } from '@/lib/utils';
import { navItems } from '@/lib/site-data';

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/8 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="#home" className="flex items-center gap-3 text-text transition hover:text-gold">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 bg-gold/10 font-semibold text-gold">
            MA
          </span>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-gold">Mekonnen Anebo</p>
            <p className="text-xs text-muted">Wealth, health, service</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm text-muted transition hover:text-text"
            >
              {item.label}
            </Link>
          ))}
          <Link href="#connect" className="button-primary px-5 py-3 text-sm">
            Let's Connect
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-text lg:hidden"
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        className={cn(
          'overflow-hidden border-t border-white/8 transition-[max-height] duration-300 lg:hidden',
          open ? 'max-h-96' : 'max-h-0'
        )}
      >
        <nav className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4 sm:px-6">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="rounded-2xl px-4 py-3 text-sm text-muted transition hover:bg-white/5 hover:text-text"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="#connect"
            className="button-primary mt-2 px-5 py-3 text-center text-sm"
            onClick={() => setOpen(false)}
          >
            Let's Connect
          </Link>
        </nav>
      </div>
    </header>
  );
}

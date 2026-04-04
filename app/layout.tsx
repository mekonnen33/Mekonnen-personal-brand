import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Inter } from 'next/font/google';

import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'Mekonnen Anebo | Wealth. Health. Service.',
  description:
    'Personal brand website for Mekonnen Anebo, entrepreneur, Army Reserve Intelligence Analyst, nonprofit founder, and builder in public.',
  metadataBase: new URL('https://mekonnenanebo.com'),
  openGraph: {
    title: 'Mekonnen Anebo | Wealth. Health. Service.',
    description:
      'The blueprint for a life you do not need to escape from. Wealth, health, and service.',
    url: 'https://mekonnenanebo.com',
    siteName: 'Mekonnen Anebo',
    type: 'website'
  },
  icons: {
    icon: '/favicon.svg'
  }
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

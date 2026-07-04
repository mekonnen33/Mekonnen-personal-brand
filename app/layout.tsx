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
    'Ethiopian-American entrepreneur, nonprofit founder, Army member, and financial educator building in public. Sharing the real journey of wealth, health, and service.',
  metadataBase: new URL('https://mekonnenanebo.com'),
  openGraph: {
    title: 'Mekonnen Anebo | Wealth. Health. Service.',
    description:
      'The blueprint for a life you do not need to escape from. Wealth, health, and service.',
    url: 'https://mekonnenanebo.com',
    siteName: 'Mekonnen Anebo',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mekonnen Anebo | Wealth. Health. Service.',
    description: 'The blueprint for a life you do not need to escape from.'
  },
  icons: {
    icon: '/favicon.svg'
  }
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Mekonnen Anebo",
              "url": "https://mekonnenanebo.com",
              "sameAs": [
                "https://www.instagram.com/mr_mac_",
                "https://www.youtube.com/@talksense360",
                "https://www.linkedin.com/in/manebo"
              ],
              "jobTitle": "Entrepreneur, Nonprofit Founder, Financial Educator",
              "description": "Ethiopian-American entrepreneur building wealth, health, and service. Founder of Sensible Living Foundation. Proud U.S. Army Member.",
              "worksFor": [
                { "@type": "Organization", "name": "Sensible Living Foundation" },
                { "@type": "Organization", "name": "Mac Financial Group" }
              ]
            })
          }}
        />
      </body>
    </html>
  );
}

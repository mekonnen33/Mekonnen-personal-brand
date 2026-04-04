import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        background: '#0d0d0d',
        surface: '#171717',
        surfaceAlt: '#1f1f1f',
        border: '#2a2a2a',
        text: '#f5f5f5',
        muted: '#a3a3a3',
        gold: '#c9a84c',
        goldSoft: '#f3df9f',
        wealth: '#d6b453',
        health: '#4db889',
        service: '#5da7ff'
      },
      boxShadow: {
        soft: '0 20px 60px rgba(0, 0, 0, 0.28)'
      },
      backgroundImage: {
        radialGlow:
          'radial-gradient(circle at top, rgba(201, 168, 76, 0.18), transparent 45%)'
      }
    }
  },
  plugins: []
};

export default config;

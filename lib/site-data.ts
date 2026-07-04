import {
  ArrowUpRight,
  BookOpen,
  BriefcaseBusiness,
  CalendarDays,
  ChartColumnBig,
  HeartPulse,
  HelpingHand,
  Landmark,
  LayoutDashboard,
  Mic2,
  ShieldCheck,
  Sprout,
  Wallet,
  Youtube,
  Instagram,
  Linkedin
} from 'lucide-react';
import { LucideIcon } from 'lucide-react';

export type NavItem = {
  label: string;
  href: string;
};

export type SocialItem = {
  label: string;
  href: string;
  icon: LucideIcon;
};

export type Pillar = {
  title: string;
  body: string;
  href: string;
  icon: LucideIcon;
  accent: string;
};

export type BlogPost = {
  category: 'Wealth' | 'Health' | 'Service';
  title: string;
  excerpt: string;
  date: string;
  href: string;
  comingSoon?: boolean;
};

export type Episode = {
  title: string;
  description: string;
  href: string;
  comingSoon?: boolean;
};

export type ToolItem = {
  name: string;
  description: string;
  href: string;
  icon: LucideIcon;
};

export type CollaborationOption = {
  title: string;
  body: string;
  icon: LucideIcon;
};

export type Venture = {
  name: string;
  description: string;
  href: string;
  category: string;
};

export const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Pillars', href: '#pillars' },
  { label: 'Ventures', href: '#ventures' },
  { label: 'Blog', href: '#blog' },
  { label: 'Talk Sense', href: '#talk-sense' },
  { label: 'Resources', href: '#resources' },
  { label: 'Connect', href: '#connect' },
  { label: 'SLF', href: '#footer' }
];

export const socialItems: SocialItem[] = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/mr_mac_',
    icon: Instagram
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/@talksense360',
    icon: Youtube
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/manebo',
    icon: Linkedin
  }
];

export const pillars: Pillar[] = [
  {
    title: 'Wealth',
    body: 'Financial literacy, entrepreneurship, and building systems that create lasting generational wealth. From insurance and credit to investing and business ownership.',
    href: '#resources',
    icon: ChartColumnBig,
    accent: 'wealth'
  },
  {
    title: 'Health',
    body: 'Physical performance, mental clarity, and the discipline that holds everything else together. Health is the foundation before business, before money, before anything.',
    href: '#blog',
    icon: HeartPulse,
    accent: 'health'
  },
  {
    title: 'Service',
    body: 'The Sensible Living Foundation, bringing financial literacy and food access to underserved communities. Because real success means lifting as you climb.',
    href: '#connect',
    icon: HelpingHand,
    accent: 'service'
  }
];

export const ventures: Venture[] = [
  {
    name: 'Sensible Living Foundation',
    description: 'Nonprofit improving wealth and health outcomes in underserved communities through financial literacy and food access programs.',
    href: 'https://sensiblelivingfoundation.org',
    category: 'Nonprofit'
  },
  {
    name: 'Mac Financial Group',
    description: 'Financial services built around insurance, credit, and wealth strategy for individuals and families.',
    href: '#connect',
    category: 'Financial Services'
  },
  {
    name: 'ServiceFlow',
    description: 'Websites and automation systems for service businesses. More clients, less chaos, built for you.',
    href: 'https://svc-flow.com',
    category: 'Agency'
  },
  {
    name: 'Viral Prints',
    description: 'Precision wall printing and custom murals that transform business spaces into branded immersive environments.',
    href: 'https://viralprintsusa.com',
    category: 'Creative'
  },
  {
    name: 'Talk Sense',
    description: 'A podcast and YouTube show covering entrepreneurship, wealth, health, relationships, and personal growth. No filters.',
    href: 'https://www.youtube.com/@talksense360',
    category: 'Media'
  },
  {
    name: 'Insurance Mac',
    description: 'Insurance solutions designed to protect what you have built and create a foundation for what comes next.',
    href: '#connect',
    category: 'Financial Services'
  },
  {
    name: 'Credit Mac',
    description: 'Credit education and strategy to help individuals build the financial foundation that opens every door.',
    href: '#connect',
    category: 'Financial Services'
  },
  {
    name: 'Mac Holding LLC',
    description: 'The parent entity behind the Mac Financial Group family of businesses and ventures.',
    href: '#connect',
    category: 'Holding Company'
  }
];

export const blogPosts: BlogPost[] = [
  {
    category: 'Service',
    title: 'Why I Started a Nonprofit While Building a Business',
    excerpt: 'The deeper reason service has to stay in the center, even when business growth gets loud.',
    date: 'March 11, 2026',
    href: '#',
    comingSoon: true
  },
  {
    category: 'Wealth',
    title: 'The Financial Moves I Wish I Made in My 20s',
    excerpt: 'The simple money decisions that matter more than looking impressive online.',
    date: 'February 26, 2026',
    href: '#',
    comingSoon: true
  },
  {
    category: 'Health',
    title: 'How I Train My Body and My Business at the Same Time',
    excerpt: 'Why routines, recovery, and self-control shape more than your physique.',
    date: 'February 8, 2026',
    href: '#',
    comingSoon: true
  },
  {
    category: 'Service',
    title: 'Vertical Gardens, Community, and What Food Access Really Means',
    excerpt: 'A closer look at why access, education, and infrastructure all have to move together.',
    date: 'January 24, 2026',
    href: '#',
    comingSoon: true
  },
  {
    category: 'Wealth',
    title: 'Building Credit as a Wealth Foundation Tool',
    excerpt: 'Credit is not the finish line, but it can absolutely become the lever.',
    date: 'January 9, 2026',
    href: '#',
    comingSoon: true
  },
  {
    category: 'Health',
    title: 'The Discipline Equation: Military, Entrepreneurship, and You',
    excerpt: 'What service taught me about showing up when motivation does not.',
    date: 'December 15, 2025',
    href: '#',
    comingSoon: true
  }
];

export const episodes: Episode[] = [
  {
    title: 'What Building in Public Actually Feels Like',
    description: 'The tension between vision, pressure, doubt, and staying honest while the work is still messy.',
    href: 'https://www.youtube.com/@talksense360',
    comingSoon: true
  },
  {
    title: 'Money, Mission, and Not Selling Your Soul',
    description: 'A real conversation on building income without drifting away from your values.',
    href: 'https://www.youtube.com/@talksense360',
    comingSoon: true
  },
  {
    title: 'The Cost of Waiting for Confidence',
    description: 'Why a lot of smart people stay stuck, and what to do when certainty never fully arrives.',
    href: 'https://www.youtube.com/@talksense360',
    comingSoon: true
  }
];

export const tools: ToolItem[] = [
  {
    name: 'Notion',
    description: 'My operating system for planning, content capture, and keeping projects moving.',
    href: 'https://notion.so',
    icon: LayoutDashboard
  },
  {
    name: 'Make.com',
    description: 'Automation flows that save time and reduce repetitive admin work.',
    href: 'https://make.com',
    icon: ArrowUpRight
  },
  {
    name: 'Vercel',
    description: 'Fast deployment and hosting for sites, landing pages, and experiments.',
    href: 'https://vercel.com',
    icon: ShieldCheck
  },
  {
    name: 'Canva',
    description: 'Design workflows for decks, social posts, lead magnets, and brand assets.',
    href: 'https://canva.com',
    icon: BriefcaseBusiness
  },
  {
    name: 'Books and Courses',
    description: 'The frameworks and learning resources shaping how I think and build.',
    href: '#connect',
    icon: BookOpen
  },
  {
    name: 'Financial Tools',
    description: 'Accounts, systems, and calculators that make the money side more intentional.',
    href: '#connect',
    icon: Wallet
  }
];

export const collaborationOptions: CollaborationOption[] = [
  {
    title: 'Speaking and Events',
    body: 'Invite me to speak on entrepreneurship, wealth building, service, leadership, or disciplined growth.',
    icon: Mic2
  },
  {
    title: 'Business Collaboration',
    body: 'For founders, brands, and organizations looking to build with purpose and create practical value.',
    icon: Landmark
  },
  {
    title: 'SLF Partnership / Sponsorship',
    body: 'Partner with the Sensible Living Foundation to support financial literacy and food access initiatives.',
    icon: Sprout
  }
];

export const trustPoints = [
  'Proud U.S. Army Member',
  'Founder, Sensible Living Foundation',
  'Financial educator and builder in public'
];

export const stats = [
  {
    value: '3',
    label: 'Core pillars shaping the platform'
  },
  {
    value: '8+',
    label: 'Active ventures across business, nonprofit, and media'
  },
  {
    value: '100%',
    label: 'Real journey, no fake polished highlight reel'
  }
];

export const footerLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Blog', href: '#blog' },
  { label: 'Talk Sense', href: '#talk-sense' },
  { label: 'Resources', href: '#resources' },
  { label: 'Connect', href: '#connect' },
  { label: 'SLF', href: '#connect' }
];

export const heroButtons = [
  {
    label: 'Read the Blog',
    href: '#blog',
    primary: true
  },
  {
    label: "Let's Connect",
    href: '#connect',
    primary: false
  }
];

export const talkSenseMeta = {
  heading: 'Talk Sense | The Show',
  subheading: 'Entrepreneurship. Wealth. Health. Relationships. Personal growth. No filters.',
  videoUrl: 'PLACEHOLDER'
};

export const sectionEyebrows = {
  pillars: 'The foundation',
  ventures: 'What I am building',
  blog: 'Content hub',
  talkSense: 'Podcast and YouTube',
  resources: 'What I use',
  connect: 'Connect and collaborate',
  newsletter: 'Stay in the loop'
};

export const freeGuide = 'Get the free guide: 5 Financial Moves to Make Before You Turn 40';

export const connectPlaceholderLinks = {
  calendly: 'https://calendly.com/your-link'
};

export const formSubjects = ['Speaking', 'Collaboration', 'SLF', 'Other'];

export const heroMeta = {
  headline: 'Wealth. Health. Service.',
  subheadline:
    "I am Mekonnen, entrepreneur, Army member, nonprofit founder, and builder. This is where I share everything I am learning on the road to financial freedom, without losing who I am.",
  tagline: 'Build wealth. Protect your health. Serve the world.',
  secondaryLine: "The blueprint for a life you do not need to escape from."
};

export const badgeItems = [CalendarDays, ArrowUpRight];

import Link from 'next/link';
import {
  BadgeCheck,
  CalendarRange,
  CheckCircle2,
  ChevronRight,
  CirclePlay,
  Sparkles,
  Video
} from 'lucide-react';

import { BlogCard } from '@/components/blog-card';
import { CollaborationCard } from '@/components/collaboration-card';
import { ContactForm } from '@/components/contact-form';
import { EpisodeCard } from '@/components/episode-card';
import { NewsletterForm } from '@/components/newsletter-form';
import { PillarCard } from '@/components/pillar-card';
import { Reveal } from '@/components/reveal';
import { SectionTitle } from '@/components/section-title';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { ToolCard } from '@/components/tool-card';
import { VentureCard } from '@/components/venture-card';
import {
  collaborationOptions,
  ventures,
  connectPlaceholderLinks,
  episodes,
  freeGuide,
  heroButtons,
  heroMeta,
  pillars,
  sectionEyebrows,
  socialItems,
  stats,
  talkSenseMeta,
  tools,
  trustPoints,
  blogPosts
} from '@/lib/site-data';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-text">
      <SiteHeader />

      <main>
        <section id="home" className="relative overflow-hidden">
          <div className="absolute inset-0 bg-radialGlow" />
          <div className="section-shell relative py-16 sm:py-20 lg:py-24">
            <div className="grid items-center gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
              <Reveal className="space-y-8">
                <div className="space-y-5">
                  <div className="inline-flex items-center gap-2 rounded-full border border-gold/20 bg-gold/10 px-4 py-2 text-sm text-gold">
                    <Sparkles className="h-4 w-4" />
                    {heroMeta.tagline}
                  </div>
                  <h1 className="max-w-4xl text-balance text-5xl font-semibold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
                    {heroMeta.headline}
                  </h1>
                  <p className="max-w-3xl text-lg leading-8 text-muted sm:text-xl">{heroMeta.subheadline}</p>
                  <p className="max-w-2xl text-base leading-7 text-muted">{heroMeta.secondaryLine}</p>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  {heroButtons.map((button) => (
                    <Link
                      key={button.label}
                      href={button.href}
                      className={button.primary ? 'button-primary' : 'button-secondary'}
                    >
                      {button.label}
                    </Link>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  {socialItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.label}
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-muted transition hover:border-gold/30 hover:text-gold"
                        aria-label={item.label}
                      >
                        <Icon className="h-5 w-5" />
                      </Link>
                    );
                  })}
                </div>

                <div className="grid gap-4 sm:grid-cols-3">
                  {stats.map((stat) => (
                    <div key={stat.label} className="card-base p-5">
                      <p className="text-3xl font-semibold text-gold">{stat.value}</p>
                      <p className="mt-2 text-sm leading-6 text-muted">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={120}>
                <div className="card-base relative overflow-hidden p-5 sm:p-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/15 via-transparent to-transparent" />
                  <div className="relative rounded-[24px] border border-white/10 bg-gradient-to-br from-[#191919] to-[#0f0f0f] p-5">
                    <div className="rounded-[24px] border border-dashed border-gold/30 bg-black/20 p-5">
                      <div className="aspect-[4/5] rounded-[22px] bg-[linear-gradient(180deg,rgba(201,168,76,0.24),rgba(255,255,255,0.03))] p-6">
                        <div className="flex h-full flex-col justify-between rounded-[20px] border border-white/10 bg-black/25 p-5">
                          <div>
                            <p className="text-sm uppercase tracking-[0.22em] text-gold">Professional photo</p>
                            <p className="mt-2 max-w-xs text-sm leading-6 text-muted">
                              Replace this area with your final headshot, studio portrait, or strong lifestyle image.
                            </p>
                          </div>

                          <div className="space-y-4">
                            {trustPoints.map((point) => (
                              <div key={point} className="flex items-start gap-3">
                                <BadgeCheck className="mt-0.5 h-5 w-5 text-gold" />
                                <p className="text-sm leading-6 text-text">{point}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section id="pillars" className="section-shell py-16 sm:py-20 lg:py-24">
          <Reveal>
            <SectionTitle
              eyebrow={sectionEyebrows.pillars}
              title="The three pillars behind everything I build"
              description="This platform is organized around the areas that matter most to me. Wealth gives you options. Health gives you strength. Service gives it all a reason."
            />
          </Reveal>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {pillars.map((pillar, index) => (
              <Reveal key={pillar.title} delay={index * 90}>
                <PillarCard pillar={pillar} />
              </Reveal>
            ))}
          </div>
        </section>

        <section id="ventures" className="section-shell py-16 sm:py-20 lg:py-24">
          <Reveal>
            <SectionTitle
              eyebrow={sectionEyebrows.ventures}
              title="Everything I am building"
              description="Multiple ventures, one mission. Each one is a different expression of wealth, health, or service."
            />
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {ventures.map((venture, index) => (
              <Reveal key={venture.name} delay={index * 60}>
                <VentureCard venture={venture} />
              </Reveal>
            ))}
          </div>
        </section>

        <section id="blog" className="border-y border-white/6 bg-white/[0.02] py-16 sm:py-20 lg:py-24">
          <div className="section-shell">
            <Reveal>
              <SectionTitle
                eyebrow={sectionEyebrows.blog}
                title="Writing on the real work behind growth"
                description="Thoughts, lessons, and field notes across wealth, health, and service. The goal is not to sound polished. The goal is to tell the truth and make it useful."
                actions={
                  <Link href="#" className="button-secondary mt-4 lg:mt-0">
                    View all posts
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                }
              />
            </Reveal>
            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {blogPosts.map((post, index) => (
                <Reveal key={post.title} delay={index * 60}>
                  <BlogCard post={post} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="talk-sense" className="section-shell py-16 sm:py-20 lg:py-24">
          <Reveal>
            <SectionTitle
              eyebrow={sectionEyebrows.talkSense}
              title={talkSenseMeta.heading}
              description={talkSenseMeta.subheading}
              actions={
                <Link href="https://youtube.com/@talksense" target="_blank" rel="noreferrer" className="button-primary mt-4 lg:mt-0">
                  Subscribe on YouTube
                </Link>
              }
            />
          </Reveal>

          <div className="mt-10 grid gap-8 xl:grid-cols-[1.2fr_0.8fr]">
            <Reveal>
              <div className="card-base overflow-hidden p-3 sm:p-4">
                <div className="aspect-video overflow-hidden rounded-[24px] border border-white/10 bg-black flex items-center justify-center">
                  <div className="text-center px-8 py-12 space-y-6">
                    <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-5 py-2 text-sm text-gold">
                      <CirclePlay className="h-4 w-4" />
                      Talk Sense
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-2xl font-semibold text-text sm:text-3xl">Episodes dropping soon.</h3>
                      <p className="text-base leading-7 text-muted max-w-md mx-auto">
                        Real conversations on entrepreneurship, wealth, health, and building a life with purpose. Subscribe so you don't miss the first episode.
                      </p>
                    </div>
                    <a
                      href="https://www.youtube.com/@talksense360"
                      target="_blank"
                      rel="noreferrer"
                      className="button-primary inline-flex"
                    >
                      Subscribe on YouTube
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="grid gap-4">
                <div className="card-base p-6">
                  <div className="flex items-center gap-3 text-gold">
                    <CirclePlay className="h-5 w-5" />
                    <span className="text-sm font-semibold uppercase tracking-[0.24em]">Why Talk Sense exists</span>
                  </div>
                  <p className="mt-4 text-base leading-7 text-muted">
                    Talk Sense is where entrepreneurship, money, wellness, relationships, and personal growth come together. It is direct, honest, and built for people who want something real.
                  </p>
                </div>
                <div className="card-base p-6">
                  <div className="flex items-center gap-3 text-gold">
                    <Video className="h-5 w-5" />
                    <span className="text-sm font-semibold uppercase tracking-[0.24em]">Formats</span>
                  </div>
                  <p className="mt-4 text-base leading-7 text-muted">
                    Long-form episodes, short clips, reflections, and practical breakdowns that can live across YouTube, Instagram, LinkedIn, and beyond.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {episodes.map((episode, index) => (
              <Reveal key={episode.title} delay={index * 75}>
                <EpisodeCard episode={episode} />
              </Reveal>
            ))}
          </div>
        </section>

        <section id="resources" className="border-y border-white/6 bg-white/[0.02] py-16 sm:py-20 lg:py-24">
          <div className="section-shell">
            <Reveal>
              <SectionTitle
                eyebrow={sectionEyebrows.resources}
                title="What I use to build"
                description="The tools, platforms, and resources I actually use in my businesses, my foundation, and my personal life. No filler. Just things that help me move."
              />
            </Reveal>
            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {tools.map((tool, index) => (
                <Reveal key={tool.name} delay={index * 55}>
                  <ToolCard tool={tool} />
                </Reveal>
              ))}
            </div>
            <Reveal>
              <p className="mt-6 text-sm leading-6 text-muted">
                Some links may be affiliate links. I only share what I actually use.
              </p>
            </Reveal>
          </div>
        </section>

        <section id="connect" className="section-shell py-16 sm:py-20 lg:py-24">
          <Reveal>
            <SectionTitle
              eyebrow={sectionEyebrows.connect}
              title="Let's build together"
              description="Whether you want to collaborate, have me speak, partner with SLF, or just connect, I want to hear from you."
            />
          </Reveal>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {collaborationOptions.map((option, index) => (
              <Reveal key={option.title} delay={index * 70}>
                <CollaborationCard option={option} />
              </Reveal>
            ))}
          </div>

          <div className="mt-10 grid gap-8 xl:grid-cols-[1.05fr_0.95fr]">
            <Reveal>
              <ContactForm />
            </Reveal>

            <Reveal delay={120}>
              <div className="grid gap-6">
                <div className="card-base p-6 sm:p-8">
                  <div className="flex items-center gap-3 text-gold">
                    <CalendarRange className="h-5 w-5" />
                    <span className="text-sm font-semibold uppercase tracking-[0.24em]">Calendly placeholder</span>
                  </div>
                  <h3 className="mt-4 text-2xl font-semibold text-text">Prefer to book a time directly?</h3>
                  <p className="mt-4 text-base leading-7 text-muted">
                    Replace this card with your Calendly embed or keep it as a direct booking link for discovery calls, speaking requests, or partnership conversations.
                  </p>
                  <Link
                    href={connectPlaceholderLinks.calendly}
                    target="_blank"
                    rel="noreferrer"
                    className="button-secondary mt-6"
                  >
                    Open scheduling link
                  </Link>
                </div>
                <div className="card-base p-6 sm:p-8">
                  <div className="flex items-center gap-3 text-gold">
                    <CheckCircle2 className="h-5 w-5" />
                    <span className="text-sm font-semibold uppercase tracking-[0.24em]">Best fit inquiries</span>
                  </div>
                  <ul className="mt-4 space-y-3 text-base leading-7 text-muted">
                    <li>Speaking opportunities around entrepreneurship, leadership, or disciplined growth</li>
                    <li>Strategic collaborations with businesses, schools, and organizations</li>
                    <li>Partnerships tied to financial literacy, food access, and community impact</li>
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="newsletter" className="border-t border-white/6 bg-white/[0.02] py-16 sm:py-20 lg:py-24">
          <div className="section-shell">
            <Reveal>
              <div className="card-base grid gap-8 overflow-hidden p-6 sm:p-8 lg:grid-cols-[1.1fr_0.9fr] lg:p-10">
                <div className="space-y-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.26em] text-gold">
                    {sectionEyebrows.newsletter}
                  </p>
                  <h2 className="text-balance text-3xl font-semibold tracking-tight text-text sm:text-4xl lg:text-5xl">
                    The Inner Circle
                  </h2>
                  <p className="max-w-2xl text-base leading-7 text-muted sm:text-lg">
                    I send a newsletter on wealth, health, and service, real insights from someone actively building. No spam. No fluff. Just the blueprint.
                  </p>
                  <div className="rounded-[24px] border border-gold/20 bg-gold/10 p-5">
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-gold">Free guide</p>
                    <p className="mt-3 text-lg font-medium text-text">{freeGuide}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <NewsletterForm />
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

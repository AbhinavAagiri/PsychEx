import Link from "next/link";
import type { CSSProperties } from "react";
import { articles } from "@/content/articles";
import { site } from "@/lib/site";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import Illusion from "@/components/illusion";
import Reveal from "@/components/reveal";
import ArticleIndex from "@/components/article-index";
import ContactBand from "@/components/contact-band";
import { ArrowRight, ArrowUpRight } from "@/components/icons";

const principles = [
  {
    title: "Break the stigma",
    text: "Talk about mental health as openly as we talk about physical health.",
  },
  {
    title: "Teach the science",
    text: "Neuroscience and psychology, explained for students rather than specialists.",
  },
  {
    title: "Build a community",
    text: "A place where curiosity about the mind is welcome, and nobody has to have it figured out.",
  },
  {
    title: "Share what we learn",
    text: "Student writing, free to read, with the sources listed at the end.",
  },
];

function getWriters() {
  const counts = new Map<string, number>();
  for (const article of articles) {
    counts.set(article.author, (counts.get(article.author) ?? 0) + 1);
  }
  return [...counts.entries()].map(([name, count]) => ({ name, count }));
}

export default function HomePage() {
  const writers = getWriters();

  return (
    <>
      <Nav />
      <main id="main">
        {/* Hero */}
        <section className="mx-auto max-w-[1320px] px-6 pt-12 md:px-10 md:pt-20">
          <div className="grid gap-10 md:grid-cols-12 md:items-end md:gap-8">
            <h1 className="hero-title md:col-span-8">
              <span className="line-mask">
                <span className="line-inner" style={{ "--delay": "60ms" } as CSSProperties}>
                  Psychology,&nbsp;
                </span>
              </span>
              <span className="line-mask">
                <span className="line-inner" style={{ "--delay": "170ms" } as CSSProperties}>
                  studied by&nbsp;
                </span>
              </span>
              <span className="line-mask">
                <span className="line-inner" style={{ "--delay": "280ms" } as CSSProperties}>
                  teenagers.
                </span>
              </span>
            </h1>

            <div
              className="md:col-span-4 md:pb-2"
              style={{ animation: "soft-in 900ms var(--ease-out-expo) 520ms both" }}
            >
              <p className="lead">
                Psych Experiment California is a student-run psychology club in
                Mountain House. We read the research on the brain and write it up
                for people our age, without the jargon.
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-x-7 gap-y-4">
                <Link href="/articles" className="btn">
                  Read the articles
                  <ArrowUpRight size={15} />
                </Link>
                <Link href="#mission" className="btn-quiet">
                  What we stand for
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>

          {/* Signature element: a real perceptual illusion you can test yourself. */}
          <div
            className="mt-12 md:mt-16"
            style={{ animation: "soft-in 1100ms var(--ease-out-expo) 650ms both" }}
          >
            <Illusion />
          </div>

          <div className="ui mt-6 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-line py-4 text-ink-soft">
            <span>{site.address}</span>
            <span className="hidden size-1 bg-poppy sm:block" aria-hidden="true" />
            <span>Five articles, written by students</span>
            <span className="hidden size-1 bg-poppy sm:block" aria-hidden="true" />
            <a
              href={site.instagram.url}
              target="_blank"
              rel="noreferrer"
              className="link inline-flex items-center gap-1 text-ink"
            >
              {site.instagram.handle}
              <ArrowUpRight size={11} />
            </a>
          </div>
        </section>

        {/* Mission */}
        <section id="mission" className="mt-10 bg-ink text-paper md:mt-16">
          <div className="mx-auto max-w-[1320px] px-6 py-20 md:px-10 md:py-28">
            <div className="grid gap-10 md:grid-cols-12">
              <Reveal className="md:col-span-4" variant="left">
                <h2 className="section-title">Our mission</h2>
                <p className="mt-4 max-w-[26ch] font-serif text-[0.95rem] italic leading-relaxed text-paper/55">
                  Why a group of students gives its free time to neuroscience.
                </p>
              </Reveal>

              <div className="md:col-span-7 md:col-start-6">
                <Reveal delay={90}>
                  <p className="font-serif text-[clamp(1.3rem,2.1vw,1.7rem)] leading-[1.5] tracking-[-0.012em]">
                    At Psych Experiment California, our mission is to spread
                    awareness about mental health and empower the youth with
                    knowledge about the brain, neuroscience, and psychology.
                  </p>
                  <p className="mt-6 max-w-[60ch] text-[1.05rem] leading-[1.8] text-paper/70">
                    We are dedicated to fostering a community where mental
                    well-being is prioritized, and young minds are educated and
                    inspired to understand the complexities of the human brain.
                    Through innovative programs, events, and community outreach,
                    we strive to break the stigma surrounding mental health and
                    promote a culture of empathy, understanding, and support.
                  </p>
                </Reveal>
              </div>
            </div>

            <ul className="mt-16 grid gap-x-10 gap-y-8 border-t border-paper/15 pt-8 sm:grid-cols-2 lg:grid-cols-4">
              {principles.map((principle, index) => (
                <Reveal as="li" key={principle.title} delay={index * 70} variant="fade">
                  <h3 className="flex items-start gap-2.5 font-display text-[0.9375rem] font-medium leading-snug tracking-[-0.01em]">
                    <span className="mt-[0.55rem] size-1.5 shrink-0 bg-poppy" aria-hidden="true" />
                    {principle.title}
                  </h3>
                  <p className="mt-2 text-[0.9375rem] leading-relaxed text-paper/60">
                    {principle.text}
                  </p>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        {/* Articles */}
        <section id="articles" className="mx-auto max-w-[1320px] px-6 py-20 md:px-10 md:py-28">
          <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <h2 className="section-title">Articles</h2>
              <p className="lead mt-4 max-w-[50ch]">
                Five pieces on how the mind develops, what motivates us, and what
                the research says about the way we live now.
              </p>
            </div>
            <Link href="/articles" className="btn-quiet shrink-0">
              All articles
              <ArrowRight size={14} />
            </Link>
          </Reveal>

          <div className="mt-10">
            <ArticleIndex items={articles} />
          </div>
        </section>

        {/* Writers */}
        <section className="mx-auto max-w-[1320px] px-6 pb-20 md:px-10 md:pb-28">
          <div className="grid gap-10 border-t border-line pt-10 md:grid-cols-12">
            <Reveal className="md:col-span-4" variant="left">
              <h2 className="section-title">Written by students.</h2>
              <p className="lead mt-4 max-w-[30ch]">
                Four writers, one shared question: how does the mind actually
                work?
              </p>
              <Link href="/about" className="btn-quiet mt-7">
                More about the club
                <ArrowRight size={14} />
              </Link>
            </Reveal>

            <div className="md:col-span-7 md:col-start-6">
              <ul className="grid gap-x-10 sm:grid-cols-2">
                {writers.map((writer, index) => (
                  <Reveal
                    as="li"
                    key={writer.name}
                    delay={index * 70}
                    className="flex items-baseline justify-between gap-4 border-t border-line py-3.5"
                  >
                    <span className="font-serif text-[1.1rem] leading-tight">
                      {writer.name}
                    </span>
                    <span className="ui whitespace-nowrap text-ink-soft">
                      {writer.count} {writer.count === 1 ? "article" : "articles"}
                    </span>
                  </Reveal>
                ))}
              </ul>
              <Reveal as="p" delay={140} className="ui mt-5 text-ink-soft">
                Interested in writing with us? Send us an email below.
              </Reveal>
            </div>
          </div>
        </section>

        <ContactBand />
      </main>
      <Footer />
    </>
  );
}

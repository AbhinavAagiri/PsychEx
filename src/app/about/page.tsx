import type { Metadata } from "next";
import Link from "next/link";
import type { CSSProperties } from "react";
import { articles } from "@/content/articles";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import Reveal from "@/components/reveal";
import ContactBand from "@/components/contact-band";
import { ArrowUpRight } from "@/components/icons";

export const metadata: Metadata = {
  title: "About the club",
  description:
    "Who we are: a student-run psychology club in Mountain House, California, writing about the brain for people our age.",
};

const practices = [
  {
    title: "We read",
    text: "Studies, reviews, and the occasional chapter that takes three tries to get through.",
  },
  {
    title: "We talk it through",
    text: "Conversations where a question about memory turns into an hour about sleep.",
  },
  {
    title: "We write",
    text: "Short articles that turn the research into something a classmate would actually finish.",
  },
];

function getWriters() {
  const writers = new Map<string, typeof articles>();
  for (const article of articles) {
    const existing = writers.get(article.author) ?? [];
    writers.set(article.author, [...existing, article]);
  }
  return [...writers.entries()];
}

export default function AboutPage() {
  const writers = getWriters();

  return (
    <>
      <Nav />
      <main id="main">
        <section className="mx-auto max-w-[1320px] px-6 pt-12 md:px-10 md:pt-16">
          <div className="grid gap-8 md:grid-cols-12 md:items-end">
            <h1 className="hero-title md:col-span-8">
              <span className="line-mask">
                <span className="line-inner" style={{ "--delay": "60ms" } as CSSProperties}>
                  About the&nbsp;
                </span>
              </span>
              <span className="line-mask">
                <span className="line-inner" style={{ "--delay": "160ms" } as CSSProperties}>
                  club.
                </span>
              </span>
            </h1>
            <p
              className="lead md:col-span-4 md:pb-2"
              style={{ animation: "soft-in 900ms var(--ease-out-expo) 300ms both" }}
            >
              A student-run psychology club in Mountain House, California. We
              read the research, talk it through, and write down what we learn.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-[1320px] px-6 pt-16 md:px-10 md:pt-24">
          <div className="grid gap-8 border-t border-line pt-10 md:grid-cols-12">
            <Reveal className="md:col-span-4" variant="left">
              <h2 className="section-title">Our mission</h2>
            </Reveal>
            <Reveal className="md:col-span-7 md:col-start-6" delay={80}>
              <p className="font-serif text-[clamp(1.25rem,1.9vw,1.55rem)] leading-[1.5] tracking-[-0.01em]">
                At Psych Experiment California, our mission is to spread
                awareness about mental health and empower the youth with
                knowledge about the brain, neuroscience, and psychology.
              </p>
              <p className="mt-5 max-w-[62ch] text-[1.05rem] leading-[1.8] text-ink-soft">
                We are dedicated to fostering a community where mental
                well-being is prioritized, and young minds are educated and
                inspired to understand the complexities of the human brain.
                Through innovative programs, events, and community outreach, we
                strive to break the stigma surrounding mental health and promote
                a culture of empathy, understanding, and support.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="mt-16 bg-ink text-paper md:mt-24">
          <div className="mx-auto max-w-[1320px] px-6 py-16 md:px-10 md:py-24">
            <Reveal variant="left">
              <h2 className="section-title">What we do</h2>
              <p className="mt-4 max-w-[52ch] text-[1.05rem] leading-relaxed text-paper/65">
                No background in psychology required — just curiosity about why
                people do the things they do.
              </p>
            </Reveal>

            <ul className="mt-12 grid gap-10 border-t border-paper/15 pt-8 md:grid-cols-3 md:gap-12">
              {practices.map((practice, index) => (
                <Reveal as="li" key={practice.title} delay={index * 80} variant="fade">
                  <h3 className="flex items-center gap-2.5 font-display text-[1.05rem] font-medium tracking-[-0.01em]">
                    <span className="size-1.5 shrink-0 bg-poppy" aria-hidden="true" />
                    {practice.title}
                  </h3>
                  <p className="mt-3 max-w-[34ch] text-[0.95rem] leading-relaxed text-paper/60">
                    {practice.text}
                  </p>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        <section className="mx-auto max-w-[1320px] px-6 py-20 md:px-10 md:py-28">
          <div className="grid gap-10 md:grid-cols-12">
            <Reveal className="md:col-span-4" variant="left">
              <h2 className="section-title">The writers</h2>
              <p className="lead mt-4 max-w-[28ch]">
                Four students, five articles, and a growing pile of sources.
              </p>
            </Reveal>

            <div className="md:col-span-7 md:col-start-6">
              <ul className="grid gap-x-10 sm:grid-cols-2">
                {writers.map(([name, pieces], index) => (
                  <Reveal as="li" key={name} delay={index * 70}>
                    <div className="border-t border-line pt-4">
                      <div className="flex items-baseline justify-between gap-3">
                        <p className="font-serif text-[1.35rem] leading-tight">
                          {name}
                        </p>
                        <span className="ui whitespace-nowrap text-ink-soft">
                          {pieces.length} {pieces.length === 1 ? "article" : "articles"}
                        </span>
                      </div>
                      <ul className="mt-4 space-y-2 pb-6">
                        {pieces.map((piece) => (
                          <li key={piece.slug}>
                            <Link
                              href={`/articles/${piece.slug}`}
                              className="ui link text-ink-soft hover:text-plum"
                            >
                              {piece.shortTitle}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Reveal>
                ))}
              </ul>

              <Reveal delay={140}>
                <p className="ui mt-2 flex flex-wrap items-center gap-2 text-ink-soft">
                  Want to join them?
                  <a href="#contact" className="link inline-flex items-center gap-1 text-ink">
                    Send us a note
                    <ArrowUpRight size={11} />
                  </a>
                </p>
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

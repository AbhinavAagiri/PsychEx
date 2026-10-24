import type { Metadata } from "next";
import Link from "next/link";
import type { CSSProperties } from "react";
import { articles } from "@/content/articles";
import { site } from "@/lib/site";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import ArticleIndex from "@/components/article-index";
import Reveal from "@/components/reveal";
import { ArrowUpRight } from "@/components/icons";

export const metadata: Metadata = {
  title: "Articles",
  description:
    "Student-written psychology and neuroscience articles from Psych Experiment California.",
};

export default function ArticlesPage() {
  return (
    <>
      <Nav />
      <main id="main" className="mx-auto max-w-[1320px] px-6 pt-12 md:px-10 md:pt-16">
        <div className="grid gap-8 md:grid-cols-12 md:items-end">
          <h1 className="hero-title md:col-span-7">
            <span className="line-mask">
              <span className="line-inner" style={{ "--delay": "60ms" } as CSSProperties}>
                Articles
              </span>
            </span>
          </h1>
          <p
            className="lead md:col-span-4 md:col-start-9 md:pb-2"
            style={{ animation: "soft-in 900ms var(--ease-out-expo) 220ms both" }}
          >
            Everything we’ve published so far: how the mind develops, what
            motivates us, and what the research says about the way we live now.
          </p>
        </div>

        <div className="mt-12 md:mt-16">
          <ArticleIndex items={articles} />
        </div>

        <div className="ui mt-5 flex flex-wrap items-center justify-between gap-3 text-ink-soft">
          <span>{articles.length} pieces, all written by students</span>
          <a
            href={site.instagram.url}
            target="_blank"
            rel="noreferrer"
            className="link inline-flex items-center gap-1.5 text-ink"
          >
            Older posts live on Instagram
            <ArrowUpRight size={11} />
          </a>
        </div>

        <section className="mt-20 border-t border-line pt-10 md:mt-28">
          <div className="grid gap-8 md:grid-cols-12">
            <Reveal as="h2" variant="left" className="section-title md:col-span-5">
              Students write these.
              <br />
              You could too.
            </Reveal>
            <Reveal className="md:col-span-6 md:col-start-7" delay={100}>
              <p className="lead">
                We’re a student club, and bylines are open to students who want
                to read, talk, and write about psychology. If that sounds like
                you, get in touch.
              </p>
              <Link href="/about#contact" className="btn mt-7">
                Reach the club
                <ArrowUpRight size={15} />
              </Link>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, getArticle, relatedArticles } from "@/content/articles";
import { site } from "@/lib/site";
import { slugifyHeading } from "@/lib/text";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import ReadingProgress, { ContentsRail } from "@/components/article-progress";
import ContactBand from "@/components/contact-band";
import { ArrowRight, ArrowUpRight } from "@/components/icons";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};

  return {
    title: article.shortTitle,
    description: article.standfirst,
    openGraph: {
      title: article.title,
      description: article.standfirst,
      type: "article",
    },
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const contents = [
    ...article.sections.map((section) => ({
      id: slugifyHeading(section.heading),
      heading: section.heading,
    })),
    ...(article.references.length
      ? [{ id: "references", heading: "References" }]
      : []),
  ];

  const next = relatedArticles(article.slug, 2);
  let paragraphCount = 0;

  return (
    <>
      <Nav />
      <main id="main">
        <ReadingProgress />

        <article>
          <header className="mx-auto max-w-[1320px] px-6 pt-10 md:px-10 md:pt-14">
            <div className="grid gap-y-8 md:grid-cols-12 md:gap-x-10">
              <div className="md:col-span-3">
                <Link
                  href="/articles"
                  className="ui inline-flex items-center gap-2 text-ink-soft transition-colors hover:text-ink"
                >
                  <ArrowRight size={13} className="rotate-180" />
                  All articles
                </Link>

                <div className="ui mt-8 hidden space-y-2 text-ink-soft md:block">
                  <p>
                    Written by <span className="text-ink">{article.author}</span>
                  </p>
                  <p>{article.minutes} minute read</p>
                  <p>{site.address}</p>
                </div>
              </div>

              <div
                className="md:col-span-8 md:col-start-5"
                style={{ animation: "soft-in 800ms var(--ease-out-expo) 120ms both" }}
              >
                <p className="ui text-plum">{article.topic}</p>
                <h1 className="article-title mt-3">{article.title}</h1>
                <p className="mt-6 max-w-[58ch] font-serif text-[1.125rem] leading-[1.6] text-ink-soft">
                  {article.standfirst}
                </p>
              </div>
            </div>

            <div className="ui mt-8 flex flex-wrap items-center gap-x-8 gap-y-2 border-y border-line py-3.5 text-ink-soft md:hidden">
              <span>
                Written by <span className="text-ink">{article.author}</span>
              </span>
              <span>{article.minutes} minute read</span>
            </div>

            <div aria-hidden="true" className="mt-10 hidden h-px w-full bg-line md:block" />
          </header>

          <div className="mx-auto max-w-[1320px] px-6 md:px-10">
            <div className="grid gap-10 pt-10 md:pt-14 lg:grid-cols-12">
              <aside className="hidden lg:col-span-3 lg:block">
                <div className="sticky top-28">
                  <ContentsRail sections={contents} />
                </div>
              </aside>

              <div className="lg:col-span-8 lg:col-start-5">
                <details className="group mb-8 border-y border-line py-3.5 lg:hidden">
                  <summary className="ui flex cursor-pointer list-none items-center justify-between text-ink-soft [&::-webkit-details-marker]:hidden">
                    On this page
                    <span className="text-[1.1rem] leading-none transition-transform duration-300 group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <ul className="mt-3 space-y-2">
                    {contents.map((section) => (
                      <li key={section.id}>
                        <a
                          href={`#${section.id}`}
                          className="ui text-ink-soft hover:text-plum"
                        >
                          {section.heading}
                        </a>
                      </li>
                    ))}
                  </ul>
                </details>

                <div className="article-body max-w-[68ch]">
                  {article.sections.map((section, sectionIndex) => (
                    <section key={section.heading} id={slugifyHeading(section.heading)}>
                      <h2>{section.heading}</h2>
                      {section.blocks.map((block, blockIndex) => {
                        if (block.kind === "p") {
                          paragraphCount += 1;
                          return (
                            <p
                              key={blockIndex}
                              className={
                                paragraphCount === 1 && sectionIndex === 0
                                  ? "first-p"
                                  : undefined
                              }
                            >
                              {block.text}
                            </p>
                          );
                        }

                        if (block.kind === "sub") {
                          return <h3 key={blockIndex}>{block.text}</h3>;
                        }

                        return (
                          <ul key={blockIndex}>
                            {block.items.map((item, itemIndex) => (
                              <li key={itemIndex}>
                                {item.label ? <strong>{item.label} — </strong> : null}
                                {item.text}
                              </li>
                            ))}
                          </ul>
                        );
                      })}
                    </section>
                  ))}

                  {article.references.length > 0 ? (
                    <section id="references" className="mt-16 border-t border-line pt-8">
                      <h2>References</h2>
                      <ul className="refs">
                        {article.references.map((reference) => (
                          <li key={reference}>{reference}</li>
                        ))}
                      </ul>
                    </section>
                  ) : null}
                </div>

                <div className="mt-16 border-t border-line pt-6">
                  <p className="ui text-ink-soft">Read next</p>
                  <ul>
                    {next.map((related) => (
                      <li key={related.slug}>
                        <Link
                          href={`/articles/${related.slug}`}
                          className="group flex items-baseline justify-between gap-6 border-b border-line py-4"
                        >
                          <span className="font-serif text-[1.1rem] leading-snug transition-colors group-hover:text-plum md:text-[1.25rem]">
                            {related.title}
                          </span>
                          <ArrowUpRight
                            size={16}
                            className="shrink-0 text-ink-soft transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                          />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </article>

        <div className="mt-20 md:mt-28">
          <ContactBand />
        </div>
      </main>
      <Footer />
    </>
  );
}

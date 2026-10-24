import Link from "next/link";
import type { Article } from "@/content/articles";
import { ArrowUpRight } from "@/components/icons";
import Reveal from "@/components/reveal";

export default function ArticleIndex({ items }: { items: Article[] }) {
  return (
    <ul className="border-b border-line">
      {items.map((article, index) => (
        <Reveal as="li" key={article.slug} delay={index * 60}>
          <Link
            href={`/articles/${article.slug}`}
            className="article-row group block px-1 py-6 lg:grid lg:grid-cols-[8.5rem_minmax(0,1fr)_8.5rem_5.5rem_1.25rem] lg:items-baseline lg:gap-6 lg:py-7"
          >
            <span className="flex items-baseline justify-between gap-4 lg:contents">
              <span className="ui whitespace-nowrap text-plum">{article.topic}</span>
              <ArrowUpRight className="row-arrow text-plum lg:order-last" size={18} />
            </span>

            <span className="row-title mt-2 block font-serif text-[1.3rem] font-medium leading-[1.22] tracking-[-0.012em] lg:mt-0 lg:text-[1.5rem]">
              {article.shortTitle}
            </span>

            <span className="mt-3 flex items-baseline gap-3 lg:contents">
              <span className="ui text-ink-soft">{article.author}</span>
              <span className="ui whitespace-nowrap text-ink-soft">
                {article.minutes} min read
              </span>
            </span>
          </Link>
        </Reveal>
      ))}
    </ul>
  );
}

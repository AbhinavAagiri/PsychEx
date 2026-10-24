import type { Metadata } from "next";
import Link from "next/link";
import { Psi } from "@/components/icons";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main id="main" className="flex min-h-screen flex-col bg-ink text-paper">
      <div className="mx-auto flex w-full max-w-[1320px] flex-1 flex-col px-6 py-8 md:px-10 md:py-10">
        <Link href="/" className="flex w-fit items-center gap-2.5 text-paper">
          <span className="grid size-8 place-items-center rounded-full border border-paper/30">
            <Psi size={17} />
          </span>
          <span className="font-display text-[0.9375rem] font-medium tracking-[-0.02em]">
            Psych Experiment California
          </span>
        </Link>

        <div className="flex flex-1 flex-col justify-center py-20">
          <p className="font-serif text-[clamp(1rem,1.4vw,1.15rem)] italic text-poppy">
            Page not found
          </p>
          <h1 className="mt-4 font-display text-[clamp(3rem,10vw,8rem)] font-semibold leading-[0.9] tracking-[-0.05em]">
            Nothing{" "}
            <br />
            firing here.
          </h1>
          <p className="mt-6 max-w-[42ch] text-[1.05rem] leading-relaxed text-paper/60">
            This page doesn’t exist, or it moved. The articles are still where
            you left them.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-6">
            <Link
              href="/articles"
              className="btn border border-paper/25 bg-paper text-ink hover:border-poppy"
            >
              Read the articles
            </Link>
            <Link href="/" className="ui link text-paper/80">
              Back home
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

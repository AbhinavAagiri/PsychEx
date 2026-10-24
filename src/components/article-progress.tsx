"use client";

import { useEffect, useState } from "react";

type SectionLink = { id: string; heading: string };

export default function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    // Follow Lenis's smoothed position as well as native scroll events.
    document.addEventListener("lenis:scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      document.removeEventListener("lenis:scroll", onScroll);
    };
  }, []);

  return (
    <div aria-hidden="true" className="fixed inset-x-0 top-0 z-[70] h-[2px] bg-ink/10">
      <div
        className="h-full origin-left bg-poppy transition-transform duration-150 ease-out"
        style={{ transform: `scaleX(${progress})` }}
      />
    </div>
  );
}

export function ContentsRail({ sections }: { sections: SectionLink[] }) {
  const [active, setActive] = useState(sections[0]?.id ?? "");

  useEffect(() => {
    const elements = sections
      .map((section) => document.getElementById(section.id))
      .filter((element): element is HTMLElement => Boolean(element));

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-18% 0px -68% 0px", threshold: 0 },
    );

    for (const element of elements) observer.observe(element);
    return () => observer.disconnect();
  }, [sections]);

  return (
    <nav aria-label="On this page">
      <p className="ui text-ink-soft">On this page</p>
      <ul className="mt-4 space-y-2.5 border-l border-line pl-4">
        {sections.map((section) => {
          const isActive = section.id === active;
          return (
            <li key={section.id} className="relative">
              <span
                aria-hidden="true"
                className={`absolute -left-[17px] top-1/2 h-px w-3 -translate-y-1/2 transition-all duration-300 ${
                  isActive ? "bg-poppy opacity-100" : "opacity-0"
                }`}
              />
              <a
                href={`#${section.id}`}
                className={`ui block leading-snug transition-colors duration-300 ${
                  isActive ? "text-plum" : "text-ink-soft hover:text-ink"
                }`}
              >
                {section.heading}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

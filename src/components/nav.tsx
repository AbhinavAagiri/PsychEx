"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { navLinks, site } from "@/lib/site";
import { ArrowUpRight, Instagram, Psi } from "@/components/icons";

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    // Lenis reports its smoothed position itself, in case the browser does
    // not emit a native scroll event for a programmatic scroll.
    document.addEventListener("lenis:scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("lenis:scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const close = () => setOpen(false);
    document.addEventListener("anchor:navigate", close);
    return () => document.removeEventListener("anchor:navigate", close);
  }, []);

  useEffect(() => {
    document.dispatchEvent(
      new CustomEvent(open ? "lenis:stop" : "lenis:start"),
    );
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    const firstLink = panelRef.current?.querySelector<HTMLElement>("a, button");
    firstLink?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 border-b transition-colors duration-500 ${
          scrolled
            ? "border-line bg-paper/85 backdrop-blur-md"
            : "border-transparent bg-paper/0"
        }`}
      >
        <div className="mx-auto flex h-[68px] max-w-[1320px] items-center justify-between gap-6 px-6 md:h-[76px] md:px-10">
        <Link
          href="/"
          className="group flex items-center gap-2.5 text-ink"
          aria-label={`${site.name} — home`}
        >
          <span className="grid size-8 place-items-center rounded-full border border-ink/25 transition-colors duration-300 group-hover:border-poppy group-hover:text-poppy">
            <Psi
              size={17}
              className="transition-transform duration-500 group-hover:rotate-[18deg]"
            />
          </span>
          <span className="font-display text-[0.9375rem] font-medium leading-none tracking-[-0.02em]">
            <span className="hidden sm:inline">Psych Experiment California</span>
            <span className="sm:hidden">Psych Ex Cali</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {navLinks.map((link) => {
            const active =
              link.href === "/articles"
                ? pathname.startsWith("/articles")
                : link.href === "/about"
                  ? pathname === "/about"
                  : false;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`ui link ${active ? "text-plum" : "text-ink"}`}
                aria-current={active ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
          <a
            href={site.instagram.url}
            target="_blank"
            rel="noreferrer"
            className="ui link inline-flex items-center gap-1.5 text-ink"
          >
            <Instagram size={14} />
            Instagram
            <ArrowUpRight size={12} className="-ml-0.5" />
          </a>
        </nav>

        <button
          ref={triggerRef}
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="ui inline-flex items-center gap-2 text-ink md:hidden"
        >
          {open ? "Close" : "Menu"}
          <span className="relative flex h-3 w-4 flex-col justify-between" aria-hidden="true">
            <span
              className={`h-px w-full bg-current transition-transform duration-300 ${open ? "translate-y-[5.5px] rotate-45" : ""}`}
            />
            <span
              className={`h-px w-full bg-current transition-opacity duration-200 ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`h-px w-full bg-current transition-transform duration-300 ${open ? "-translate-y-[5.5px] -rotate-45" : ""}`}
            />
          </span>
        </button>
        </div>
      </header>

      <div
        id="mobile-menu"
        ref={panelRef}
        data-lenis-prevent
        className={`fixed inset-0 top-[68px] z-40 overflow-y-auto bg-ink text-paper transition-[opacity,transform] duration-500 md:hidden ${
          open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        }`}
        aria-hidden={!open}
        inert={!open ? true : undefined}
      >
        <div className="flex min-h-full flex-col justify-between gap-12 px-6 pb-10 pt-12">
          <nav aria-label="Mobile" className="flex flex-col">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-paper/15 py-5 font-display text-[2rem] font-medium leading-none tracking-[-0.03em] text-paper"
                style={{
                  animation: open
                    ? `soft-in 500ms cubic-bezier(0.16,1,0.3,1) ${120 + index * 70}ms both`
                    : undefined,
                }}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={site.instagram.url}
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="flex items-center justify-between border-b border-paper/15 py-5 font-display text-[2rem] font-medium leading-none tracking-[-0.03em] text-paper"
              style={{
                animation: open
                  ? `soft-in 500ms cubic-bezier(0.16,1,0.3,1) ${120 + navLinks.length * 70}ms both`
                  : undefined,
              }}
            >
              Instagram
              <ArrowUpRight size={22} />
            </a>
          </nav>

          <div className="ui flex flex-col gap-1.5 text-paper/60">
            <span>{site.address}</span>
            <a href={`mailto:${site.emails[0]}`} className="link w-fit text-paper/80">
              {site.emails[0]}
            </a>
            <a href={`mailto:${site.emails[1]}`} className="link w-fit text-paper/80">
              {site.emails[1]}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

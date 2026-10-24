import Link from "next/link";
import { navLinks, site } from "@/lib/site";
import { ArrowUpRight, Instagram, Mail } from "@/components/icons";
import Reveal from "@/components/reveal";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-paper/15 bg-ink text-paper">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-16 right-2 select-none font-serif text-[16rem] leading-none text-plum/40 md:-bottom-24 md:right-10 md:text-[22rem]"
      >
        ψ
      </span>

      <div className="relative mx-auto max-w-[1320px] px-6 py-14 md:px-10 md:py-20">
        <Reveal className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-6">
            <p className="font-display text-[1.65rem] font-medium leading-[1.08] tracking-[-0.03em] md:text-[2.1rem]">
              Psych Experiment
              <br />
              California
            </p>
            <p className="mt-4 max-w-[34ch] text-[0.9375rem] leading-relaxed text-paper/60">
              A student-run psychology club in Mountain House, California.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 md:col-span-6 md:grid-cols-3">
            <div>
              <p className="ui text-paper/60">Read</p>
              <ul className="mt-4 space-y-2.5">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="ui link text-paper/85">
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/articles" className="ui link text-paper/85">
                    All articles
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="ui text-paper/60">Contact</p>
              <ul className="mt-4 space-y-2.5">
                {site.emails.map((email) => (
                  <li key={email}>
                    <a
                      href={`mailto:${email}`}
                      className="ui link inline-flex items-center gap-1.5 break-all text-paper/85"
                    >
                      <Mail size={13} />
                      {email}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="ui text-paper/60">Elsewhere</p>
              <ul className="mt-4 space-y-2.5">
                <li>
                  <a
                    href={site.instagram.url}
                    target="_blank"
                    rel="noreferrer"
                    className="ui link inline-flex items-center gap-1.5 text-paper/85"
                  >
                    <Instagram size={13} />
                    {site.instagram.handle}
                    <ArrowUpRight size={11} />
                  </a>
                </li>
                <li className="ui text-paper/55">{site.address}</li>
              </ul>
            </div>
          </div>
        </Reveal>

        <Reveal
          className="mt-14 flex flex-col gap-3 border-t border-paper/15 pt-6 md:flex-row md:items-center md:justify-between"
          delay={120}
        >
          <p className="ui text-paper/60">
            © {site.year} {site.name}
          </p>
          <p className="ui text-paper/60">
            Written and built by students in Mountain House, California.
          </p>
        </Reveal>
      </div>
    </footer>
  );
}

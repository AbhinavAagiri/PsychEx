import { site } from "@/lib/site";
import { ArrowUpRight, Instagram, Mail, Pin } from "@/components/icons";
import Reveal from "@/components/reveal";

export default function ContactBand() {
  return (
    <section id="contact" className="bg-plum text-paper">
      <div className="mx-auto max-w-[1320px] px-6 py-16 md:px-10 md:py-24">
        <div className="grid gap-12 md:grid-cols-12 md:gap-10">
          <Reveal className="md:col-span-5" variant="left">
            <h2 className="section-title">Get in touch</h2>
            <p className="mt-5 max-w-[32ch] text-[1.0625rem] leading-relaxed text-paper/80">
              Questions about the club, an idea for an article, or want to write
              with us? Email is the best way to reach us.
            </p>
            <p className="ui mt-8 inline-flex items-center gap-2 text-paper/75">
              <Pin size={14} />
              {site.address}
            </p>
          </Reveal>

          <div className="md:col-span-7">
            <ul className="border-t border-paper/20">
              {site.emails.map((email, index) => (
                <Reveal
                  as="li"
                  key={email}
                  delay={index * 80}
                  className="border-b border-paper/20"
                >
                  <a
                    href={`mailto:${email}`}
                    className="group flex items-center justify-between gap-4 py-4 md:py-5"
                  >
                    <span className="flex items-center gap-3 font-serif text-[1.05rem] leading-tight tracking-[-0.01em] transition-colors duration-300 group-hover:text-pollen md:text-[1.35rem]">
                      <Mail size={16} className="hidden shrink-0 md:block" />
                      <span className="break-all">{email}</span>
                    </span>
                    <ArrowUpRight
                      size={20}
                      className="shrink-0 text-pollen transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                  </a>
                </Reveal>
              ))}
              <Reveal as="li" delay={160} className="border-b border-paper/20">
                <a
                  href={site.instagram.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between gap-4 py-4 md:py-5"
                >
                  <span className="flex items-center gap-3 font-serif text-[1.05rem] leading-tight tracking-[-0.01em] transition-colors duration-300 group-hover:text-pollen md:text-[1.35rem]">
                    <Instagram size={16} className="hidden shrink-0 md:block" />
                    {site.instagram.handle}
                  </span>
                  <ArrowUpRight
                    size={20}
                    className="shrink-0 text-pollen transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </a>
              </Reveal>
            </ul>
            <Reveal as="p" delay={220} className="ui mt-6 text-paper/75">
              We’re students too — give us a school day to reply.
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

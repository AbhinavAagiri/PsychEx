import type { Metadata } from "next";
import { Bricolage_Grotesque, Newsreader } from "next/font/google";
import SmoothScroll from "@/components/smooth-scroll";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-newsreader",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://psych-ex-cali.vercel.app"),
  title: {
    default: "Psych Experiment California — psychology, studied by teenagers",
    template: "%s — Psych Experiment California",
  },
  description:
    "A student-run psychology club in Mountain House, California. We read the research on the brain and write about it for people our age.",
  openGraph: {
    title: "Psych Experiment California",
    description:
      "A student-run psychology club in Mountain House, California. Research on the brain, written for students.",
    type: "website",
    siteName: "Psych Experiment California",
  },
  twitter: {
    card: "summary_large_image",
    title: "Psych Experiment California",
    description:
      "A student-run psychology club in Mountain House, California.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`js ${bricolage.variable} ${newsreader.variable}`}>
      <head>
        <noscript>
          <style>{`[data-reveal]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body>
        <SmoothScroll />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}

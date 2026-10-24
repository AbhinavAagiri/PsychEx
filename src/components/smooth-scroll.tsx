"use client";

import Lenis from "lenis";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export default function SmoothScroll() {
  const pathname = usePathname();
  const scrollToHashRef = useRef<(hash: string) => void>(() => {});

  useEffect(() => {
    // Lenis makes programmatic scrolls instant on its own, but its wheel
    // smoothing has to be turned off explicitly for reduced-motion users.
    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");

    const lenis = new Lenis({
      autoRaf: true,
      lerp: 0.1,
      wheelMultiplier: 1,
      stopInertiaOnNavigate: true,
      smoothWheel: !motionPreference.matches,
    });

    const onMotionPreferenceChange = () => {
      lenis.options.smoothWheel = !motionPreference.matches;
    };
    motionPreference.addEventListener("change", onMotionPreferenceChange);

    const stop = () => lenis.stop();
    const start = () => lenis.start();

    // Scroll-driven UI (the header, the reading progress line) can follow the
    // smoothed position directly; some browsers do not emit native scroll
    // events for the programmatic scrolls Lenis makes on its own.
    const notify = () => {
      document.dispatchEvent(
        new CustomEvent("lenis:scroll", { detail: { scroll: window.scrollY } }),
      );
    };
    const unsubscribe = lenis.on("scroll", notify);

    const scrollToHash = (hash: string) => {
      if (!hash || hash === "#") return;
      let id = hash.slice(1);
      try {
        id = decodeURIComponent(id);
      } catch {
        // leave the id as-is if it cannot be decoded
      }
      const target = document.getElementById(id);
      if (!target) return;

      // Compute the destination from the browser's real scroll position and
      // the page's scroll-padding, rather than letting Lenis add its own offset
      // on top of the padding (which would double-count the sticky header).
      const scrollPadding =
        Number.parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 96;
      const top = target.getBoundingClientRect().top + window.scrollY - scrollPadding;

      lenis.scrollTo(top, { duration: 1.15 });
      if (!target.hasAttribute("tabindex")) target.setAttribute("tabindex", "-1");
      target.focus({ preventScroll: true });
    };

    scrollToHashRef.current = scrollToHash;

    const onClick = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const node = event.target;
      if (!(node instanceof Element)) return;

      const anchor = node.closest<HTMLAnchorElement>("a[href]");
      if (
        !anchor ||
        anchor.target === "_blank" ||
        anchor.hasAttribute("download") ||
        anchor.getAttribute("href")?.startsWith("mailto:")
      ) {
        return;
      }

      const url = new URL(anchor.href, window.location.href);
      if (url.origin !== window.location.origin) return;
      if (url.pathname !== window.location.pathname || !url.hash) return;
      if (!document.getElementById(url.hash.slice(1))) return;

      event.preventDefault();
      event.stopPropagation();

      const menu = document.getElementById("mobile-menu");
      const menuWasOpen = menu?.getAttribute("aria-hidden") === "false";

      // React's own handlers (including the mobile menu's close-on-click) do
      // not run after stopPropagation, so let them know an anchor was used.
      document.dispatchEvent(new CustomEvent("anchor:navigate"));

      // Closing the menu unlocks the page and restarts Lenis; wait for that
      // before travelling, otherwise the scroll is swallowed.
      if (menuWasOpen) {
        window.setTimeout(() => scrollToHash(url.hash), 160);
      } else {
        scrollToHash(url.hash);
      }
    };

    const onHashChange = () => scrollToHash(window.location.hash);

    document.addEventListener("click", onClick, true);
    document.addEventListener("lenis:stop", stop);
    document.addEventListener("lenis:start", start);
    window.addEventListener("hashchange", onHashChange);

    return () => {
      unsubscribe();
      motionPreference.removeEventListener("change", onMotionPreferenceChange);
      document.removeEventListener("click", onClick, true);
      document.removeEventListener("lenis:stop", stop);
      document.removeEventListener("lenis:start", start);
      window.removeEventListener("hashchange", onHashChange);
      lenis.destroy();
      scrollToHashRef.current = () => {};
    };
  }, []);

  // When a page is opened with a hash (or a link navigates to another page and
  // a section), wait for the new document to settle and glide to the section.
  useEffect(() => {
    if (!window.location.hash) return;
    const timer = window.setTimeout(() => {
      scrollToHashRef.current(window.location.hash);
    }, 120);
    return () => window.clearTimeout(timer);
  }, [pathname]);

  return null;
}

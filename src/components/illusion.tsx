"use client";

import { useState, type CSSProperties } from "react";

export default function Illusion() {
  const [revealed, setRevealed] = useState(false);

  return (
    <figure className="figure-frame">
      <span className="corner -left-[4px] -top-[4px] border-b-0 border-r-0" aria-hidden="true" />
      <span className="corner -right-[4px] -top-[4px] border-b-0 border-l-0" aria-hidden="true" />
      <span className="corner -bottom-[4px] -left-[4px] border-r-0 border-t-0" aria-hidden="true" />
      <span className="corner -bottom-[4px] -right-[4px] border-l-0 border-t-0" aria-hidden="true" />

      <div className="flex items-baseline justify-between gap-4 px-4 pt-3.5 md:px-5">
        <span className="font-serif text-[0.875rem] italic text-ink-soft">fig. 1</span>
        <span className="ui text-ink-soft">Visual perception</span>
      </div>

      <div className="grid items-center gap-6 px-5 py-6 lg:grid-cols-12 lg:gap-8 lg:py-8">
        <div className="lg:col-span-3">
          <p className="font-serif text-[1.15rem] leading-snug">Which line is longer?</p>
          <p className="ui mt-2 max-w-[24ch] text-ink-soft">
            A quick test of how your visual system reads depth.
          </p>
        </div>

        <div className="lg:col-span-6">
          <svg
            viewBox="50 20 500 226"
            className="w-full"
            aria-hidden="true"
            focusable="false"
          >
            <g
              stroke="currentColor"
              strokeWidth="3.4"
              strokeLinecap="round"
              className="text-ink"
            >
              {/* Upper shaft, arrowheads pointing out */}
              <line x1="120" y1="80" x2="480" y2="80" pathLength={1} className="illusion-line" />
              <line x1="120" y1="80" x2="76" y2="54" pathLength={1} className="illusion-line" style={{ "--draw-delay": "150ms" } as CSSProperties} />
              <line x1="120" y1="80" x2="76" y2="106" pathLength={1} className="illusion-line" style={{ "--draw-delay": "200ms" } as CSSProperties} />
              <line x1="480" y1="80" x2="524" y2="54" pathLength={1} className="illusion-line" style={{ "--draw-delay": "250ms" } as CSSProperties} />
              <line x1="480" y1="80" x2="524" y2="106" pathLength={1} className="illusion-line" style={{ "--draw-delay": "300ms" } as CSSProperties} />

              {/* Lower shaft, arrowheads pointing in */}
              <line x1="120" y1="154" x2="480" y2="154" pathLength={1} className="illusion-line" style={{ "--draw-delay": "90ms" } as CSSProperties} />
              <line x1="120" y1="154" x2="164" y2="128" pathLength={1} className="illusion-line" style={{ "--draw-delay": "260ms" } as CSSProperties} />
              <line x1="120" y1="154" x2="164" y2="180" pathLength={1} className="illusion-line" style={{ "--draw-delay": "310ms" } as CSSProperties} />
              <line x1="480" y1="154" x2="436" y2="128" pathLength={1} className="illusion-line" style={{ "--draw-delay": "360ms" } as CSSProperties} />
              <line x1="480" y1="154" x2="436" y2="180" pathLength={1} className="illusion-line" style={{ "--draw-delay": "410ms" } as CSSProperties} />
            </g>

            <g
              aria-hidden="true"
              style={{
                opacity: revealed ? 1 : 0,
                transition: "opacity 450ms cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              <line
                x1="120"
                y1="30"
                x2="120"
                y2="202"
                stroke="#e8481f"
                strokeWidth="1.5"
                strokeDasharray="3 6"
              />
              <line
                x1="480"
                y1="30"
                x2="480"
                y2="202"
                stroke="#e8481f"
                strokeWidth="1.5"
                strokeDasharray="3 6"
              />
              <text
                x="300"
                y="226"
                textAnchor="middle"
                fill="#e8481f"
                fontSize="11"
                fontFamily="var(--font-display)"
                letterSpacing="0.04em"
              >
                same length
              </text>
            </g>
          </svg>
        </div>

        <div className="flex flex-col items-start gap-3 lg:col-span-3 lg:items-end lg:text-right">
          <button
            type="button"
            onClick={() => setRevealed((value) => !value)}
            aria-pressed={revealed}
            className="btn-quiet"
          >
            {revealed ? "Hide the guides" : "Measure them"}
            <span
              aria-hidden="true"
              className={`text-[1.1rem] leading-none transition-transform duration-300 ${
                revealed ? "rotate-45" : ""
              }`}
            >
              +
            </span>
          </button>
          <p className="ui max-w-[24ch] text-ink-soft" aria-live="polite">
            {revealed
              ? "Same length. Your brain adjusts for depth."
              : "Two shafts, four arrowheads."}
          </p>
        </div>
      </div>

      <figcaption className="flex flex-col gap-1.5 border-t border-line px-4 py-3 md:flex-row md:items-center md:justify-between md:px-5">
        <span className="max-w-[78ch] font-serif text-[0.875rem] italic leading-relaxed text-ink-soft">
          First described by Franz Carl Müller-Lyer in 1889. The arrowheads act
          as depth cues, so the two identical lines get scaled differently.
        </span>
        <span className="ui shrink-0 text-ink-soft">Perception is a construction</span>
      </figcaption>
    </figure>
  );
}

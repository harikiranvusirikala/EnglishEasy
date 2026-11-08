import type { ReactNode } from "react";

// Spot illustrations (the production look, decision 2: no mascot). Hand-written SVG in the brand colours.
// Fills use design tokens (`fill-brand`, `fill-accent`…), so each one follows Day and Night by itself.
// Decorative: the heading beside an illustration says what it means.

const T = "font-display font-extrabold"; // letters drawn in the display font

function Blob({ tone = "brand" }: { tone?: "brand" | "accent" }) {
  return (
    <path
      d="M38 112c-14-30 4-66 40-80 30-12 52 4 80-2 30-6 58 16 60 48 3 34-22 62-60 70-36 8-58-4-82 0-20 3-30-14-38-36Z"
      className={tone === "brand" ? "fill-brand-soft" : "fill-accent-soft"}
    />
  );
}

function Spark({ x, y, size = 1, className = "fill-accent" }: { x: number; y: number; size?: number; className?: string }) {
  return (
    <path
      transform={`translate(${x} ${y}) scale(${size})`}
      d="M0-9c1 5.5 3.5 8 9 9-5.5 1-8 3.5-9 9-1-5.5-3.5-8-9-9 5.5-1 8-3.5 9-9Z"
      className={className}
    />
  );
}

const DRAWINGS = {
  welcome: (
    <>
      <Blob />
      <Spark x={44} y={42} />
      <Spark x={204} y={34} size={0.8} className="fill-brand" />
      <Spark x={212} y={132} size={0.7} />
      <path d="M52 44h76a20 20 0 0 1 20 20v26a20 20 0 0 1-20 20H86l-20 16v-16H52a20 20 0 0 1-20-20V64a20 20 0 0 1 20-20Z" className="fill-brand-fill" />
      <text x="90" y="92" textAnchor="middle" fontSize="46" className={`${T} fill-on-brand`}>
        A
      </text>
      <path d="M134 78h56a18 18 0 0 1 18 18v22a18 18 0 0 1-18 18h-6v14l-18-14h-32a18 18 0 0 1-18-18V96a18 18 0 0 1 18-18Z" className="fill-accent" />
      <text x="162" y="122" textAnchor="middle" fontSize="40" className={`${T} fill-on-accent`}>
        అ
      </text>
    </>
  ),
  learn: (
    <>
      <Blob />
      <Spark x={60} y={40} size={0.8} />
      <Spark x={190} y={44} size={0.7} className="fill-brand" />
      <path d="M120 70c-20-12-46-14-72-10v74c26-4 52-2 72 10Z" className="fill-surface stroke-line-strong" strokeWidth="3" strokeLinejoin="round" />
      <path d="M120 70c20-12 46-14 72-10v74c-26-4-52-2-72 10Z" className="fill-surface stroke-line-strong" strokeWidth="3" strokeLinejoin="round" />
      <path d="M120 70v74" className="stroke-line-strong" strokeWidth="3" />
      <rect x="62" y="104" width="42" height="5" rx="2.5" className="fill-line" />
      <rect x="62" y="116" width="32" height="5" rx="2.5" className="fill-line" />
      <rect x="136" y="104" width="42" height="5" rx="2.5" className="fill-line" />
      <rect x="136" y="116" width="34" height="5" rx="2.5" className="fill-line" />
      <text x="82" y="96" textAnchor="middle" fontSize="24" className={`${T} fill-brand`}>
        Aa
      </text>
      <text x="158" y="96" textAnchor="middle" fontSize="24" className={`${T} fill-accent`}>
        అ
      </text>
      <circle cx="120" cy="36" r="16" className="fill-accent" />
      <path d="M114 36l4 4 8-8" className="stroke-on-accent" strokeWidth="3.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  practice: (
    <>
      <Blob />
      <Spark x={52} y={52} size={0.8} />
      <Spark x={206} y={50} size={0.7} className="fill-brand" />
      <rect x="40" y="70" width="40" height="40" rx="12" className="fill-who-bg stroke-who-line" strokeWidth="3" />
      <text x="60" y="98" textAnchor="middle" fontSize="22" className={`${T} fill-who-ink`}>
        I
      </text>
      <rect x="88" y="70" width="58" height="40" rx="12" className="fill-action-bg stroke-action-line" strokeWidth="3" />
      <text x="117" y="98" textAnchor="middle" fontSize="22" className={`${T} fill-action-ink`}>
        eat
      </text>
      <rect x="154" y="70" width="56" height="40" rx="12" className="fill-what-bg stroke-what-line" strokeWidth="3" />
      <text x="182" y="98" textAnchor="middle" fontSize="22" className={`${T} fill-what-ink`}>
        rice
      </text>
      <rect x="60" y="124" width="120" height="8" rx="4" className="fill-line" />
      <circle cx="186" cy="136" r="20" className="fill-good" />
      <path d="M177 136l6 6 12-12" className="stroke-surface" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  speak: (
    <>
      <Blob />
      <path d="M70 66c-10 12-10 34 0 46M56 56c-16 18-16 48 0 66" className="stroke-accent" strokeWidth="5" fill="none" strokeLinecap="round" />
      <path d="M170 66c10 12 10 34 0 46M184 56c16 18 16 48 0 66" className="stroke-accent" strokeWidth="5" fill="none" strokeLinecap="round" />
      <rect x="100" y="38" width="40" height="70" rx="20" className="fill-brand-fill" />
      <rect x="112" y="52" width="16" height="5" rx="2.5" className="fill-on-brand" opacity="0.5" />
      <rect x="112" y="64" width="16" height="5" rx="2.5" className="fill-on-brand" opacity="0.5" />
      <path d="M88 96a32 32 0 0 0 64 0M120 128v14M104 144h32" className="stroke-ink-2" strokeWidth="5" fill="none" strokeLinecap="round" />
    </>
  ),
  roleplay: (
    <>
      <Blob />
      <circle cx="66" cy="122" r="15" className="fill-accent-soft stroke-accent" strokeWidth="3" />
      <path d="M42 166a24 24 0 0 1 48 0" className="fill-accent-soft stroke-accent" strokeWidth="3" />
      <circle cx="174" cy="122" r="15" className="fill-brand-soft stroke-brand" strokeWidth="3" />
      <path d="M150 166a24 24 0 0 1 48 0" className="fill-brand-soft stroke-brand" strokeWidth="3" />
      <path d="M40 28h70a12 12 0 0 1 12 12v18a12 12 0 0 1-12 12H66l-12 12V70H40a12 12 0 0 1-12-12V40a12 12 0 0 1 12-12Z" className="fill-surface stroke-line-strong" strokeWidth="3" />
      <text x="75" y="56" textAnchor="middle" fontSize="18" className={`${T} fill-ink`}>
        Hello!
      </text>
      <path d="M130 44h70a12 12 0 0 1 12 12v18a12 12 0 0 1-12 12h-14v12l-12-12h-44a12 12 0 0 1-12-12V56a12 12 0 0 1 12-12Z" className="fill-brand-fill" />
      <text x="165" y="72" textAnchor="middle" fontSize="18" className={`${T} fill-on-brand`}>
        Hi!
      </text>
    </>
  ),
  complete: (
    <>
      <Blob tone="accent" />
      <rect x="48" y="46" width="10" height="5" rx="2" transform="rotate(-30 53 48)" className="fill-brand" />
      <rect x="182" y="40" width="10" height="5" rx="2" transform="rotate(25 187 42)" className="fill-who-ink" />
      <rect x="196" y="104" width="10" height="5" rx="2" transform="rotate(-20 201 106)" className="fill-brand" />
      <rect x="40" y="118" width="10" height="5" rx="2" transform="rotate(40 45 120)" className="fill-what-ink" />
      <Spark x={70} y={30} size={0.8} />
      <Spark x={176} y={140} size={0.7} />
      <path d="M100 116l-14 44 18-8 10 16 10-42ZM140 116l14 44-18-8-10 16-10-42Z" className="fill-accent" />
      <circle cx="120" cy="88" r="44" className="fill-brand-fill" />
      <circle cx="120" cy="88" r="34" fill="none" className="stroke-on-brand" strokeWidth="2" opacity="0.35" />
      <path d="m120 64 7 15 16 2-12 11 3 16-14-8-14 8 3-16-12-11 16-2Z" className="fill-accent" />
    </>
  ),
  week: (
    <>
      <Blob />
      <Spark x={46} y={46} size={0.8} />
      <Spark x={204} y={140} size={0.8} />
      <rect x="46" y="44" width="148" height="112" rx="16" className="fill-surface stroke-line-strong" strokeWidth="3" />
      <path d="M46 60a16 16 0 0 1 16-16h116a16 16 0 0 1 16 16v12H46Z" className="fill-brand-fill" />
      <rect x="78" y="34" width="8" height="20" rx="4" className="fill-ink-2" />
      <rect x="154" y="34" width="8" height="20" rx="4" className="fill-ink-2" />
      {[0, 1, 2, 3].map((i) => (
        <g key={i} transform={`translate(${74 + i * 31} 100)`}>
          <circle r="11" className="fill-good" />
          <path d="M-5 0l3.5 3.5L5-3.5" className="stroke-surface" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      ))}
      {[0, 1].map((i) => (
        <g key={i} transform={`translate(${90 + i * 31} 132)`}>
          <circle r="11" className="fill-good" />
          <path d="M-5 0l3.5 3.5L5-3.5" className="stroke-surface" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      ))}
      <path transform="translate(152 132)" d="m0-13 3.8 7.8 8.6 1.2-6.2 6 1.5 8.6L0 6.6l-7.7 4 1.5-8.6-6.2-6 8.6-1.2Z" className="fill-accent" />
    </>
  ),
  empty: (
    <>
      <Blob />
      <Spark x={70} y={50} size={0.7} />
      <Spark x={176} y={40} size={0.9} />
      <path d="M120 108c0-24 10-42 30-52-2 24-12 40-30 52Z" className="fill-brand-fill" />
      <path d="M120 112c0-20-10-34-28-40 2 20 12 32 28 40Z" className="fill-brand" opacity="0.75" />
      <path d="M120 112V92" className="stroke-brand" strokeWidth="4" strokeLinecap="round" />
      <path d="M90 112h60l-8 40H98Z" className="fill-accent" />
      <rect x="86" y="106" width="68" height="12" rx="6" className="fill-accent" />
      <ellipse cx="120" cy="158" rx="46" ry="5" className="fill-line" />
    </>
  ),
  offline: (
    <>
      <Blob />
      <path d="M78 122a26 26 0 0 1 4-52 34 34 0 0 1 64-8 26 26 0 0 1 16 60Z" className="fill-surface stroke-line-strong" strokeWidth="3" strokeLinejoin="round" />
      <path d="M70 52l100 84" className="stroke-accent" strokeWidth="6" strokeLinecap="round" />
      <rect x="150" y="104" width="38" height="58" rx="9" className="fill-brand-fill" />
      <rect x="160" y="152" width="18" height="4" rx="2" className="fill-on-brand" opacity="0.6" />
      <circle cx="169" cy="126" r="9" className="fill-good" />
      <path d="M165 126l3 3 5-5" className="stroke-surface" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  notFound: (
    <>
      <Blob />
      <path d="M48 142c26-6 30-38 60-40s34 30 66 20" className="stroke-brand" strokeWidth="4" strokeDasharray="2 10" strokeLinecap="round" fill="none" />
      <circle cx="48" cy="142" r="8" className="fill-brand-fill" />
      <rect x="160" y="40" width="10" height="100" rx="5" className="fill-ink-2" />
      <path d="M146 50h50l12 14-12 14h-50Z" className="fill-accent" />
      <text x="173" y="72" textAnchor="middle" fontSize="20" className={`${T} fill-on-accent`}>
        ?
      </text>
      <ellipse cx="165" cy="146" rx="26" ry="5" className="fill-line" />
    </>
  ),
} satisfies Record<string, ReactNode>;

export type IllustrationName = keyof typeof DRAWINGS;
export const ILLUSTRATION_NAMES = Object.keys(DRAWINGS) as IllustrationName[];

export function Illustration({ name, className = "w-48" }: { name: IllustrationName; className?: string }) {
  return (
    <svg viewBox="0 0 240 180" aria-hidden="true" className={`h-auto shrink-0 ${className}`}>
      {DRAWINGS[name]}
    </svg>
  );
}

import type { ReactNode } from "react";

/**
 * The app's icons: hand-drawn 24 px icons in one style — 2 px rounded strokes in the text colour, with a soft
 * tint (the same colour at low opacity) filling the main shape. Decorative (hidden from screen readers): the
 * button or link around them carries the name.
 */
function Tint({ d }: { d: string }) {
  return <path d={d} fill="currentColor" fillOpacity={0.16} stroke="none" />;
}

const PATHS = {
  home: (
    <>
      <Tint d="M5 10.2 12 4.5l7 5.7v9.3a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 5 19.5Z" />
      <path d="M3 11 12 3.8 21 11" />
      <path d="M5 9.6v9.9A1.5 1.5 0 0 0 6.5 21H10v-5a2 2 0 0 1 4 0v5h3.5a1.5 1.5 0 0 0 1.5-1.5V9.6" />
    </>
  ),
  map: (
    <>
      <Tint d="M9 4.5 3.8 6.3a1 1 0 0 0-.8 1v12.1a.6.6 0 0 0 .8.6L9 18.5l6 2 5.2-1.8a1 1 0 0 0 .8-1V5.6a.6.6 0 0 0-.8-.6L15 6.5Z" />
      <path d="M9 4.5 3.8 6.3a1 1 0 0 0-.8 1v12.1a.6.6 0 0 0 .8.6L9 18.5l6 2 5.2-1.8a1 1 0 0 0 .8-1V5.6a.6.6 0 0 0-.8-.6L15 6.5Z" />
      <path d="M9 4.5v14M15 6.5v14" />
    </>
  ),
  practice: (
    <>
      <Tint d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Z" />
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
    </>
  ),
  gear: (
    <>
      <path d="M18.49 9.38 L21.13 10.23 L21.13 13.77 L18.49 14.62 L18.44 14.74 L19.71 17.20 L17.20 19.71 L14.74 18.44 L14.62 18.49 L13.77 21.13 L10.23 21.13 L9.38 18.49 L9.26 18.44 L6.80 19.71 L4.29 17.20 L5.56 14.74 L5.51 14.62 L2.87 13.77 L2.87 10.23 L5.51 9.38 L5.56 9.26 L4.29 6.80 L6.80 4.29 L9.26 5.56 L9.38 5.51 L10.23 2.87 L13.77 2.87 L14.62 5.51 L14.74 5.56 L17.20 4.29 L19.71 6.80 L18.44 9.26Z" fill="currentColor" fillOpacity={0.16} />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  speaker: (
    <>
      <path d="M11.3 5.2 7 8.8H4.5a1 1 0 0 0-1 1v4.4a1 1 0 0 0 1 1H7l4.3 3.6a.6.6 0 0 0 1-.5V5.7a.6.6 0 0 0-1-.5Z" fill="currentColor" fillOpacity={0.22} />
      <path d="M15.8 9a4.2 4.2 0 0 1 0 6M18.6 6.4a8 8 0 0 1 0 11.2" />
    </>
  ),
  turtle: (
    <>
      <Tint d="M2.5 15.8a7.3 7.6 0 0 1 14.6 0Z" />
      <path d="M2.5 15.8a7.3 7.6 0 0 1 14.6 0Z" />
      <path d="M6.6 15.8 7.9 11.9h3.8l1.3 3.9M7.9 11.9l1.9-2.6 1.9 2.6" />
      <circle cx="19.6" cy="12.4" r="2.4" />
      <path d="M17.1 14.6l.6-.6" />
      <circle cx="20.2" cy="11.9" r=".55" fill="currentColor" stroke="none" />
      <path d="M5.4 15.8v2.6M14.2 15.8v2.6M2.5 15.8l-1 1.2" />
    </>
  ),
  mic: (
    <>
      <rect x="8.5" y="2.8" width="7" height="12" rx="3.5" fill="currentColor" fillOpacity={0.16} />
      <path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21M8.5 21h7" />
    </>
  ),
  check: <path d="M4.5 12.5 9.5 17.5 19.5 6.5" />,
  retry: (
    <>
      <path d="M20 12a8 8 0 1 1-2.6-5.9" />
      <path d="M20 4.5V9h-4.5" />
    </>
  ),
  close: <path d="M6.5 6.5l11 11M17.5 6.5l-11 11" />,
  hint: (
    <>
      <Tint d="M12 3a6 6 0 0 0-3.6 10.8c.7.5 1.1 1.3 1.1 2.2h5c0-.9.4-1.7 1.1-2.2A6 6 0 0 0 12 3Z" />
      <path d="M12 3a6 6 0 0 0-3.6 10.8c.7.5 1.1 1.3 1.1 2.2h5c0-.9.4-1.7 1.1-2.2A6 6 0 0 0 12 3Z" />
      <path d="M9.5 19h5M10.5 21.5h3" />
    </>
  ),
  flag: (
    <>
      <Tint d="M5.5 4.5H17l-2.2 4 2.2 4H5.5Z" />
      <path d="M5.5 21V3.5M5.5 4.5H17l-2.2 4 2.2 4H5.5" />
    </>
  ),
  share: (
    <>
      <path d="M12 14.5V3.5M8 7.2 12 3.3l4 3.9" />
      <path d="M8 10.5H6.5A1.5 1.5 0 0 0 5 12v7.5A1.5 1.5 0 0 0 6.5 21h11a1.5 1.5 0 0 0 1.5-1.5V12a1.5 1.5 0 0 0-1.5-1.5H16" />
    </>
  ),
  plus: <path d="M12 5v14M5 12h14" />,
  chevron: <path d="m9.5 5.5 6.5 6.5-6.5 6.5" />,
  chevronDown: <path d="m5.5 9.5 6.5 6.5 6.5-6.5" />,
  arrowRight: <path d="M4.5 12h15M13.5 6l6 6-6 6" />,
  arrowLeft: <path d="M19.5 12h-15M10.5 6l-6 6 6 6" />,
  sun: (
    <>
      <circle cx="12" cy="12" r="4.2" fill="currentColor" fillOpacity={0.16} />
      <path d="M12 2.8v1.8M12 19.4v1.8M2.8 12h1.8M19.4 12h1.8M5.5 5.5l1.3 1.3M17.2 17.2l1.3 1.3M18.5 5.5l-1.3 1.3M6.8 17.2l-1.3 1.3" />
    </>
  ),
  moon: <path d="M19.8 14.6A8 8 0 0 1 9.4 4.2a8 8 0 1 0 10.4 10.4Z" fill="currentColor" fillOpacity={0.16} />,
  phone: (
    <>
      <rect x="6.5" y="2.5" width="11" height="19" rx="2.8" fill="currentColor" fillOpacity={0.16} />
      <path d="M10.5 18.3h3" />
    </>
  ),
  user: (
    <>
      <circle cx="12" cy="8.3" r="4" fill="currentColor" fillOpacity={0.16} />
      <path d="M4.5 20.5c.8-3.6 3.8-6 7.5-6s6.7 2.4 7.5 6" />
    </>
  ),
  book: (
    <>
      <Tint d="M12 6.3C10.4 4.9 7.9 4.4 4 4.5a1 1 0 0 0-1 1v11.8a1 1 0 0 0 1 1c3.9-.1 6.4.4 8 1.9 1.6-1.5 4.1-2 8-1.9a1 1 0 0 0 1-1V5.5a1 1 0 0 0-1-1c-3.9-.1-6.4.4-8 1.8Z" />
      <path d="M12 6.3C10.4 4.9 7.9 4.4 4 4.5a1 1 0 0 0-1 1v11.8a1 1 0 0 0 1 1c3.9-.1 6.4.4 8 1.9 1.6-1.5 4.1-2 8-1.9a1 1 0 0 0 1-1V5.5a1 1 0 0 0-1-1c-3.9-.1-6.4.4-8 1.8ZM12 6.3v13.9" />
    </>
  ),
  chat: (
    <>
      <Tint d="M5 4.5h14A2 2 0 0 1 21 6.5v8.5a2 2 0 0 1-2 2h-7.5L7 20.5V17H5a2 2 0 0 1-2-2V6.5a2 2 0 0 1 2-2Z" />
      <path d="M5 4.5h14A2 2 0 0 1 21 6.5v8.5a2 2 0 0 1-2 2h-7.5L7 20.5V17H5a2 2 0 0 1-2-2V6.5a2 2 0 0 1 2-2Z" />
      <path d="M7.5 9.5h9M7.5 12.7h5.5" />
    </>
  ),
  headphones: (
    <>
      <path d="M4 15.5V12a8 8 0 0 1 16 0v3.5" />
      <rect x="3.5" y="14" width="4.5" height="6.5" rx="1.8" fill="currentColor" fillOpacity={0.16} />
      <rect x="16" y="14" width="4.5" height="6.5" rx="1.8" fill="currentColor" fillOpacity={0.16} />
    </>
  ),
  bell: (
    <>
      <Tint d="M6 16.5V11a6 6 0 0 1 12 0v5.5l1.5 2h-15Z" />
      <path d="M6 16.5V11a6 6 0 0 1 12 0v5.5l1.5 2h-15Z" />
      <path d="M10 21a2.2 2.2 0 0 0 4 0" />
    </>
  ),
  leaf: (
    <>
      <Tint d="M5 19c0-8.3 5.2-13.7 14.6-14.2.5 9.6-5 15.1-13 14.6" />
      <path d="M5.6 19.4C5 11 10.2 5.3 19.6 4.8c.5 9.6-5 15.1-14 14.6" />
      <path d="M5 20c2.8-4.3 6-7 9.5-8.5" />
    </>
  ),
  star: <path d="m12 3.3 2.7 5.5 6 .9-4.4 4.2 1 6-5.3-2.8-5.3 2.8 1-6-4.4-4.2 6-.9Z" fill="currentColor" fillOpacity={0.16} />,
  sparkle: (
    <>
      <path d="M11 3c.7 4.4 2.9 6.6 7.3 7.3-4.4.7-6.6 2.9-7.3 7.3-.7-4.4-2.9-6.6-7.3-7.3C8.1 9.6 10.3 7.4 11 3Z" fill="currentColor" fillOpacity={0.16} />
      <path d="M18.5 15.5c.3 1.6 1 2.3 2.6 2.6-1.6.3-2.3 1-2.6 2.6-.3-1.6-1-2.3-2.6-2.6 1.6-.3 2.3-1 2.6-2.6Z" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" fill="currentColor" fillOpacity={0.12} />
      <path d="M3 12h18M12 3c2.4 2.5 3.6 5.5 3.6 9s-1.2 6.5-3.6 9c-2.4-2.5-3.6-5.5-3.6-9S9.6 5.5 12 3Z" />
    </>
  ),
  textSize: (
    <>
      <path d="M3 18.5 7.6 6l4.6 12.5M4.7 14.3h5.8" />
      <path d="M14 18.5l3.3-8.6 3.2 8.6M15.2 15.6h4.3" />
    </>
  ),
  play: <path d="M8 5.2v13.6a.8.8 0 0 0 1.2.7l10.6-6.8a.8.8 0 0 0 0-1.4L9.2 4.5a.8.8 0 0 0-1.2.7Z" fill="currentColor" fillOpacity={0.22} />,
  external: (
    <>
      <path d="M14 4h6v6M20 4l-8.5 8.5" />
      <path d="M18.5 14v4.5A1.5 1.5 0 0 1 17 20H5.5A1.5 1.5 0 0 1 4 18.5V7a1.5 1.5 0 0 1 1.5-1.5H10" />
    </>
  ),
  coffee: (
    <>
      <Tint d="M4.5 9h12v5.5a5 5 0 0 1-5 5h-2a5 5 0 0 1-5-5Z" />
      <path d="M4.5 9h12v5.5a5 5 0 0 1-5 5h-2a5 5 0 0 1-5-5Z" />
      <path d="M16.5 10.5H18a2.5 2.5 0 0 1 0 5h-1.8M8 3.5V6M11.5 3.5V6" />
    </>
  ),
  download: (
    <>
      <path d="M12 3.5v11M7.5 10.3l4.5 4.5 4.5-4.5" />
      <path d="M4.5 16.5V19a1.5 1.5 0 0 0 1.5 1.5h12a1.5 1.5 0 0 0 1.5-1.5v-2.5" />
    </>
  ),
  wifiOff: (
    <>
      <path d="M3.5 3.5l17 17" />
      <path d="M8.6 13.4a5.6 5.6 0 0 1 6.4-.5M5 10a10.6 10.6 0 0 1 4-2.2M12.6 7.5c2.5.3 4.8 1.3 6.6 2.7M12 18.5h.01" />
    </>
  ),
  calendar: (
    <>
      <Tint d="M5.5 5h13a2 2 0 0 1 2 2v2.5h-17V7a2 2 0 0 1 2-2Z" />
      <rect x="3.5" y="5" width="17" height="15.5" rx="2" />
      <path d="M3.5 9.5h17M8 3v4M16 3v4" />
    </>
  ),
  trophy: (
    <>
      <Tint d="M7.5 4h9v5a4.5 4.5 0 0 1-9 0Z" />
      <path d="M7.5 4h9v5a4.5 4.5 0 0 1-9 0Z" />
      <path d="M7.5 6H5a2.5 2.5 0 0 0 2.6 4M16.5 6H19a2.5 2.5 0 0 1-2.6 4M12 13.5V17M8.5 20.5h7M10 17h4v3.5h-4z" />
    </>
  ),
  shield: (
    <>
      <Tint d="M12 3 4.5 6v5.5c0 4.5 3.2 8 7.5 9.5 4.3-1.5 7.5-5 7.5-9.5V6Z" />
      <path d="M12 3 4.5 6v5.5c0 4.5 3.2 8 7.5 9.5 4.3-1.5 7.5-5 7.5-9.5V6Z" />
      <path d="m8.8 12 2.2 2.2 4.2-4.4" />
    </>
  ),
  info: (
    <>
      <circle cx="12" cy="12" r="9" fill="currentColor" fillOpacity={0.12} />
      <path d="M12 11v5.5M12 7.7h.01" />
    </>
  ),
  more: (
    <>
      <circle cx="5.5" cy="12" r="1.4" fill="currentColor" stroke="none" />
      <circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none" />
      <circle cx="18.5" cy="12" r="1.4" fill="currentColor" stroke="none" />
    </>
  ),
  logout: (
    <>
      <path d="M10 4.5H6.5A1.5 1.5 0 0 0 5 6v12a1.5 1.5 0 0 0 1.5 1.5H10" />
      <path d="M14.5 8l4 4-4 4M18.5 12H9.5" />
    </>
  ),
  heart: <path d="M12 20s-7.8-4.6-7.8-10.4A4.4 4.4 0 0 1 12 7a4.4 4.4 0 0 1 7.8 2.6C19.8 15.4 12 20 12 20Z" fill="currentColor" fillOpacity={0.16} />,
  layers: (
    <>
      <path d="m12 3.5 8.5 4.5L12 12.5 3.5 8Z" fill="currentColor" fillOpacity={0.16} />
      <path d="m3.5 12 8.5 4.5 8.5-4.5M3.5 16l8.5 4.5 8.5-4.5" />
    </>
  ),
  fire: (
    <>
      <Tint d="M12 21c-3.9 0-6.5-2.6-6.5-6.2 0-3.9 3.3-5.8 3.9-10.3 2.4 1.7 3.6 3.6 3.9 5.6.9-.6 1.5-1.6 1.6-2.9 2.1 1.9 3.6 4.4 3.6 7.6 0 3.6-2.6 6.2-6.5 6.2Z" />
      <path d="M12 21c-3.9 0-6.5-2.6-6.5-6.2 0-3.9 3.3-5.8 3.9-10.3 2.4 1.7 3.6 3.6 3.9 5.6.9-.6 1.5-1.6 1.6-2.9 2.1 1.9 3.6 4.4 3.6 7.6 0 3.6-2.6 6.2-6.5 6.2Z" />
    </>
  ),
  route: (
    <>
      <circle cx="6" cy="18" r="2.5" fill="currentColor" fillOpacity={0.16} />
      <circle cx="18" cy="6" r="2.5" fill="currentColor" fillOpacity={0.16} />
      <path d="M8.5 18H15a3 3 0 0 0 0-6H9a3 3 0 0 1 0-6h6.5" />
    </>
  ),
  pencil: (
    <>
      <Tint d="M15.5 4.5 19.5 8.5 9 19H5v-4Z" />
      <path d="M15.5 4.5 19.5 8.5 9 19H5v-4ZM13 7l4 4" />
    </>
  ),
  tiles: (
    <>
      <rect x="3" y="6" width="7" height="5.5" rx="1.5" fill="currentColor" fillOpacity={0.16} />
      <rect x="12" y="6" width="9" height="5.5" rx="1.5" />
      <rect x="3" y="13.5" width="10" height="5.5" rx="1.5" />
      <rect x="15" y="13.5" width="6" height="5.5" rx="1.5" fill="currentColor" fillOpacity={0.16} />
    </>
  ),
  lock: (
    <>
      <rect x="5" y="10.5" width="14" height="10" rx="2" fill="currentColor" fillOpacity={0.16} />
      <path d="M8 10.5V7.5a4 4 0 0 1 8 0v3" />
    </>
  ),
} satisfies Record<string, ReactNode>;

export type IconName = keyof typeof PATHS;
export const ICON_NAMES = Object.keys(PATHS) as IconName[];

export function Icon({ name, className = "size-6", strokeWidth = 2 }: { name: IconName; className?: string; strokeWidth?: number }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={`shrink-0 ${className}`}
    >
      {PATHS[name]}
    </svg>
  );
}

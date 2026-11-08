import { useId } from "react";

/**
 * The app's mark: a speech bubble holding "A" and "అ" on a teal tile (src/app/icon.svg is the same
 * drawing for the favicon and app icons). Decorative here: the link or heading around it carries the name.
 */
export function LogoMark({ className = "size-9" }: { className?: string }) {
  const gradient = useId();
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" className={`shrink-0 ${className}`}>
      <defs>
        <linearGradient id={gradient} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#14b8a6" />
          <stop offset="1" stopColor="#0f766e" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="16" fill={`url(#${gradient})`} />
      <path d="M13 15h38a5 5 0 0 1 5 5v20a5 5 0 0 1-5 5H31l-10 8.5V45h-8a5 5 0 0 1-5-5V20a5 5 0 0 1 5-5Z" fill="#ffffff" />
      <text x="22.5" y="38.5" textAnchor="middle" fontFamily="system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif" fontSize="21" fontWeight="800" fill="#0f766e">
        A
      </text>
      <text x="42" y="38.5" textAnchor="middle" fontFamily="'Noto Sans Telugu Variable', 'Telugu Sangam MN', sans-serif" fontSize="21" fontWeight="800" fill="#d97706">
        అ
      </text>
      <circle cx="53" cy="11" r="4.5" fill="#fbbf24" stroke="#ffffff" strokeWidth="2" />
    </svg>
  );
}

/** The mark with "EnglishEasy" beside it. */
export function Logo({ size = "md", className = "" }: { size?: "sm" | "md" | "lg"; className?: string }) {
  const mark = { sm: "size-8", md: "size-9", lg: "size-12" }[size];
  const text = { sm: "text-xl", md: "text-[1.4rem]", lg: "text-3xl" }[size];
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark className={mark} />
      <span className={`font-display leading-none font-bold tracking-tight ${text}`}>
        <span className="text-ink">English</span>
        <span className="text-brand">Easy</span>
      </span>
    </span>
  );
}

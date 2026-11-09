import Image, { type StaticImageData } from "next/image";

/**
 * A real app screen in a phone's frame. The pictures are ready-made WebP files (npm run images) shown as they are
 * (`unoptimized`: no image service needed); sizes are known, so nothing shifts. Both hero phones load early (either
 * can be the largest thing on screen, which the browser times as the page's first paint); the rest wait until seen.
 * Like a real phone, a status bar (time, the camera, signal and battery) sits above the app, so the camera never
 * covers the screen's top row. It is sized from the frame's width (container units), so it fits small and large
 * phones alike. Its colour is the screenshots' own background (they are Day screens), on purpose not a token.
 */
export function PhoneFrame({ src, alt, priority = false, className = "" }: { src: StaticImageData; alt: string; priority?: boolean; className?: string }) {
  return (
    <div className={`relative shrink-0 rounded-[2.6rem] bg-[#1c1917] p-2.5 shadow-[0_30px_60px_-24px_rgb(28_25_23/0.45),0_0_0_1px_rgb(255_255_255/0.06)_inset] dark:bg-[#0a0f10] ${className}`}>
      <div className="@container overflow-hidden rounded-[2rem] bg-[#fbf8f3]">
        <div aria-hidden="true" className="relative flex h-[11cqw] items-center justify-between px-[8cqw] text-[4.2cqw] font-semibold text-[#1c1917]">
          <span>9:41</span>
          <span className="absolute top-[2.4cqw] left-1/2 h-[6cqw] w-[26cqw] -translate-x-1/2 rounded-full bg-[#1c1917]" />
          <svg viewBox="0 0 34 12" className="h-[3.6cqw] w-auto" fill="currentColor">
            <rect x="0" y="8" width="3" height="4" rx="1" />
            <rect x="4.5" y="5.5" width="3" height="6.5" rx="1" />
            <rect x="9" y="3" width="3" height="9" rx="1" />
            <rect x="13.5" y="0.5" width="3" height="11.5" rx="1" />
            <rect x="19.5" y="1" width="12" height="10" rx="2.5" fill="none" stroke="currentColor" strokeWidth="1.2" />
            <rect x="21.5" y="3" width="8" height="6" rx="1.2" />
            <rect x="32.3" y="4" width="1.4" height="4" rx="0.7" />
          </svg>
        </div>
        <Image
          src={src}
          alt={alt}
          unoptimized
          sizes="(min-width: 768px) 300px, 70vw"
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "auto"}
          className="block h-auto w-full"
        />
      </div>
    </div>
  );
}

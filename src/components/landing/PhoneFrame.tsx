import Image, { type StaticImageData } from "next/image";

/**
 * A real app screen in a phone's frame. The pictures are ready-made WebP files (npm run images) shown as they are
 * (`unoptimized`: no image service needed); sizes are known, so nothing shifts. The first one loads early.
 */
export function PhoneFrame({ src, alt, priority = false, className = "" }: { src: StaticImageData; alt: string; priority?: boolean; className?: string }) {
  return (
    <div className={`relative shrink-0 rounded-[2.6rem] bg-[#1c1917] p-2.5 shadow-[0_30px_60px_-24px_rgb(28_25_23/0.45),0_0_0_1px_rgb(255_255_255/0.06)_inset] dark:bg-[#0a0f10] ${className}`}>
      <div aria-hidden="true" className="absolute top-4 left-1/2 z-10 h-5 w-20 -translate-x-1/2 rounded-full bg-[#1c1917] dark:bg-[#0a0f10]" />
      <Image
        src={src}
        alt={alt}
        unoptimized
        sizes="(min-width: 768px) 300px, 70vw"
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        className="block h-auto w-full rounded-[2rem]"
      />
    </div>
  );
}

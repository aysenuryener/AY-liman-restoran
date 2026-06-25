"use client";

import { useState } from "react";
import { SiteImage } from "@/components/SiteImage";

type GalleryImage = {
  src: string;
  alt: string;
  exists: boolean;
};

export function GalleryClient({ images }: { images: GalleryImage[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <>
      <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
        {images.map((image, index) => (
          <button
            key={image.src}
            type="button"
            onClick={() => setActiveIndex(index)}
            className="relative aspect-square overflow-hidden rounded-xl"
          >
            <SiteImage
              src={image.src}
              alt={image.alt}
              exists={image.exists}
              fill
              sizes="(min-width: 640px) 33vw, 50vw"
              className="object-cover transition-transform hover:scale-105"
            />
          </button>
        ))}
      </div>

      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/90 p-6"
          role="dialog"
          aria-modal="true"
          onClick={() => setActiveIndex(null)}
        >
          <button
            type="button"
            onClick={() => setActiveIndex(null)}
            className="absolute right-6 top-6 text-3xl text-cream-soft"
            aria-label="Kapat"
          >
            ×
          </button>
          <div
            className="relative h-[70vh] w-full max-w-3xl"
            onClick={(event) => event.stopPropagation()}
          >
            <SiteImage
              src={images[activeIndex].src}
              alt={images[activeIndex].alt}
              exists={images[activeIndex].exists}
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}

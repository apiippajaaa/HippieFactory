"use client";

import Image from "next/image";

import { ChevronLeft, ChevronRight } from "lucide-react";

import { useCarousel } from "@/hooks/use-carousel";

type Props = {
  images?: string[] | string;
  alt: string;
};

export default function ProductGallery({ images, alt }: Props) {
  // normalize image
  const normalizedImages = Array.isArray(images)
    ? images
    : images
    ? [images]
    : [];

  const { current, next, prev, goTo } = useCarousel({
    length: normalizedImages.length || 1,
    autoPlay: normalizedImages.length > 1,
    interval: 4000,
  });

  const currentImage = normalizedImages[current] || "/images/placeholder.webp";

  return (
    <div
      className="
        relative overflow-hidden
        rounded-[36px]
        border border-white/10
        bg-white/[0.03]
      "
    >
      {/* image */}
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={currentImage}
          alt={alt}
          fill
          priority
          className="
            object-cover transition duration-700
          "
        />

        {/* overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/50" />
      </div>

      {/* arrows */}
      {normalizedImages.length > 1 && (
        <>
          <button
            onClick={prev}
            className="
              absolute left-5 top-1/2 z-20
              flex h-11 w-11 -translate-y-1/2
              items-center justify-center
              rounded-full
              border border-white/10
              bg-black/40
              backdrop-blur-xl
              transition duration-300
              hover:bg-black/60
            "
          >
            <ChevronLeft className="h-5 w-5 text-white/70" />
          </button>

          <button
            onClick={next}
            className="
              absolute right-5 top-1/2 z-20
              flex h-11 w-11 -translate-y-1/2
              items-center justify-center
              rounded-full
              border border-white/10
              bg-black/40
              backdrop-blur-xl
              transition duration-300
              hover:bg-black/60
            "
          >
            <ChevronRight className="h-5 w-5 text-white/70" />
          </button>
        </>
      )}

      {/* dots */}
      {normalizedImages.length > 1 && (
        <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-3">
          {normalizedImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goTo(index)}
              className={`
                h-2 rounded-full transition-all duration-300
                ${
                  current === index
                    ? "w-10 bg-white"
                    : "w-2 bg-white/40 hover:bg-white/60"
                }
              `}
            />
          ))}
        </div>
      )}
    </div>
  );
}

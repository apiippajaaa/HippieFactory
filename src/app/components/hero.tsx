"use client";

import Image from "next/image";
import Link from "next/link";

import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

import { useCarousel } from "@/hooks/use-carousel";

const slides = [
  {
    id: 1,
    image: "/images/home/1.webp",
  },
  {
    id: 2,
    image: "/images/home/2.webp",
  },
  {
    id: 3,
    image: "/images/home/3.webp",
  },
];

export default function Hero() {
  const { current, goTo, next, prev } = useCarousel({
    length: slides.length,
    autoPlay: true,
    interval: 5000,
  });

  return (
    <section className="relative overflow-hidden px-6 py-4">
      <div className="relative mx-auto max-w-7xl">
        <div className="relative h-[85svh] overflow-hidden rounded-[40px] border border-white/10   ">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-all duration-1000 ${
                current === index
                  ? "z-10 opacity-100"
                  : "pointer-events-none opacity-0"
              }`}
            >
              <Image
                src={slide.image}
                alt={`Banner ${slide.id}`}
                fill
                priority={index === 0}
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/70 via-[#050816]/20 to-transparent" />
            </div>
          ))}

          <button
            onClick={prev}
            className="absolute left-6 top-1/2 z-30 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/20 text-white/80 backdrop-blur-xl transition duration-300 hover:scale-105 hover:bg-white/10"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={next}
            className="absolute right-6 top-1/2 z-30 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/20 text-white/80 backdrop-blur-xl transition duration-300 hover:scale-105 hover:bg-white/10"
          >
            <ChevronRight size={20} />
          </button>

          <div className="absolute inset-x-0 bottom-0 z-20 flex flex-col items-center justify-center px-6 pb-14">
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/product"
                className="group flex items-center gap-2 rounded-full bg-cyan-300 px-6 py-3 font-semibold text-black transition duration-300 hover:scale-105"
              >
                Explore Products
                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/become-reseller"
                className="rounded-full border border-white/10 bg-black/20 px-6 py-3 font-medium text-white/80 backdrop-blur-xl transition duration-300 hover:border-white/20 hover:bg-white/10"
              >
                Become Reseller
              </Link>
            </div>

            <div className="mt-8 flex items-center gap-3">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goTo(index)}
                  className={`rounded-full transition-all duration-300 ${
                    current === index
                      ? "h-2 w-10 bg-cyan-300"
                      : "h-2 w-2 bg-white/40"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

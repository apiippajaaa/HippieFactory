"use client";

import { useCallback, useEffect, useState } from "react";

type UseCarouselProps = {
  length: number;
  autoPlay?: boolean;
  interval?: number;
};

export function useCarousel({
  length,
  autoPlay = true,
  interval = 5000,
}: UseCarouselProps) {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % length);
  }, [length]);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + length) % length);
  }, [length]);

  const goTo = useCallback((index: number) => {
    setCurrent(index);
  }, []);

  useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(next, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval, next]);

  return {
    current,
    next,
    prev,
    goTo,
  };
}
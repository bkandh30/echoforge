"use client";

import { useEffect, useMemo, useRef, useState } from "react";

interface CountUpOnViewProps {
  to: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  useGrouping?: boolean;
}

export function CountUpOnView({
  to,
  duration = 900,
  prefix = "",
  suffix = "",
  useGrouping = false,
}: CountUpOnViewProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [value, setValue] = useState(0);

  const formatter = useMemo(
    () => new Intl.NumberFormat("en-US", { useGrouping }),
    [useGrouping],
  );

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    let frame = 0;
    let hasStarted = false;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting || hasStarted) {
          return;
        }

        hasStarted = true;

        if (reduceMotion) {
          setValue(to);
          observer.disconnect();
          return;
        }

        const startedAt = performance.now();

        const tick = (now: number) => {
          const progress = Math.min((now - startedAt) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);

          setValue(Math.round(to * eased));

          if (progress < 1) {
            frame = window.requestAnimationFrame(tick);
            return;
          }

          setValue(to);
        };

        frame = window.requestAnimationFrame(tick);
        observer.disconnect();
      },
      {
        threshold: 0.35,
      },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();

      if (frame) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, [duration, to]);

  return (
    <span ref={ref}>
      {prefix}
      {formatter.format(value)}
      {suffix}
    </span>
  );
}

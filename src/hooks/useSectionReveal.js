import { useRef } from "react";
import { gsap, ScrollTrigger, useGSAP } from "../lib/gsap.js";

export function useSectionReveal(options = {}) {
  const scope = useRef(null);
  const { start = "top 78%" } = options;

  useGSAP(
    () => {
      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      const items = gsap.utils.toArray("[data-animate]", scope.current);

      if (reducedMotion || items.length === 0) {
        gsap.set(items, { clearProps: "all" });
        return;
      }

      ScrollTrigger.create({
        trigger: scope.current,
        start,
        once: true,
        onEnter: () => {
          gsap.fromTo(
            items,
            { autoAlpha: 0, y: 34 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.75,
              ease: "power3.out",
              stagger: 0.12,
              clearProps: "transform,opacity,visibility",
            },
          );
        },
      });

      requestAnimationFrame(() => ScrollTrigger.refresh());
    },
    { scope },
  );

  return scope;
}

import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import heroImage from "../assets/heroo.png";
import { gsap, useGSAP } from "../lib/gsap.js";

export default function Hero({ onContactClick }) {
  const heroRef = useRef(null);

  useGSAP(
    () => {
      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      const heroItems = gsap.utils.toArray("[data-hero-item]", heroRef.current);

      if (reducedMotion) {
        gsap.set(heroItems, { clearProps: "all" });
        return;
      }

      gsap
        .timeline({ defaults: { ease: "power3.out" } })
        .from("[data-hero-bg]", {
          scale: 1.08,
          duration: 1.35,
        })
        .from(
          heroItems,
          {
            autoAlpha: 0,
            y: 38,
            duration: 0.8,
            stagger: 0.12,
          },
          "-=0.8",
        );
    },
    { scope: heroRef },
  );

  const scrollToProperties = (event) => {
    event.preventDefault();
    const target = document.querySelector("#properties");
    if (!target) return;

    const top = target.getBoundingClientRect().top + window.scrollY - 88;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <section
      id="top"
      ref={heroRef}
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      <div className="absolute inset-0 z-0">
        <img
          data-hero-bg
          src={heroImage}
          alt="Agadir"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/25 to-black/0"></div>
        <div className="absolute inset-0 bg-linear-to-t from-black/35 via-transparent to-black/10"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 w-full">
        <div className="relative max-w-3xl text-white">
          <div className="pointer-events-none absolute -inset-x-6 -inset-y-8 -z-10 bg-linear-to-r from-black/35 via-black/15 to-transparent blur-2xl md:-inset-x-10 md:-inset-y-12"></div>
          <div
            data-hero-item
            className="inline-flex items-center rounded-full border border-white/35 bg-white/20 px-4 py-1.5 text-sm font-semibold shadow-lg backdrop-blur-md mb-4"
          >
            Couximmo Agadir
          </div>

          <h1
            data-hero-item
            className="mt-7 text-5xl md:text-7xl font-bold leading-[1.05] drop-shadow-[0_3px_18px_rgba(0,0,0,0.45)]"
          >
            Trouvez votre bien ideal a Agadir
          </h1>

          <p
            data-hero-item
            className="mt-7 max-w-2xl text-lg md:text-xl text-white/95 leading-relaxed drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)]"
          >
            Achat, vente et location de biens immobiliers avec un accompagnement
            local, clair et professionnel.
          </p>

          <div data-hero-item className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="#properties"
              onClick={scrollToProperties}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary! px-8 py-3.5 font-semibold text-white! transition-colors hover:bg-primary/90!"
            >
              Voir les biens
              <ArrowRight size={18} />
            </a>
            <button
              type="button"
              onClick={onContactClick}
              className="inline-flex items-center justify-center rounded-full border border-white/45 bg-white/15 px-8 py-3.5 font-semibold cursor-pointer text-white! shadow-lg backdrop-blur-md transition-colors hover:bg-white/25"
            >
              Contacter l'agence
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

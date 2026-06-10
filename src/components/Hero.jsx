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
          scale: 1.12,
          duration: 1.5,
          ease: "power2.out",
        })
        .from(
          heroItems,
          {
            autoAlpha: 0,
            y: 45,
            duration: 0.85,
            stagger: 0.1,
          },
          "-=1",
        );
    },
    { scope: heroRef },
  );

  const scrollToProperties = (e) => {
    e.preventDefault();
    const target = document.querySelector("#properties");
    if (!target) return;
    const top = target.getBoundingClientRect().top + window.scrollY - 88;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          data-hero-bg
          src={heroImage}
          alt="Vue panoramique d'Agadir"
          className="w-full h-full object-cover object-center"
        />
        {/* Gradients for better text readability */}
        <div className="absolute inset-0 bg-linear-to-r from-black/40 via-black/25 to-black/10" />
        <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/10 to-transparent" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 w-full">
        <div className="relative max-w-3xl text-white">
          {/* Badge */}
          <div
            data-hero-item
            className="inline-flex items-center rounded-full border border-white/40 bg-white/15 px-5 py-1.5 text-sm font-semibold backdrop-blur-md mb-6 shadow-xl"
          >
            Couximmo Agadir
          </div>

          {/* Main Title */}
          <h1
            data-hero-item
            className="text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
          >
            Trouvez votre bien <span className="text-primary">idéal</span> à
            Agadir
          </h1>

          {/* Subtitle - More emotional & benefit-driven */}
          <p
            data-hero-item
            className="mt-6 max-w-2xl text-lg md:text-xl text-white/95 leading-relaxed drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)]"
          >
            Achat, vente et location de villas, appartements et terrains à
            Agadir avec un accompagnement{" "}
            <span className="font-semibold">
              local, transparent et professionnel
            </span>
            .
          </p>

          {/* CTA Buttons */}
          <div data-hero-item className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="#properties"
              onClick={scrollToProperties}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-9 py-4 font-semibold text-white transition-all hover:bg-primary/90 active:scale-[0.985]"
            >
              Découvrir les biens
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>

            <button
              type="button"
              onClick={onContactClick}
              className="inline-flex items-center justify-center rounded-full border border-white/50 bg-white/10 px-9 py-4 font-semibold backdrop-blur-md text-white transition-all hover:bg-white/20 hover:border-white/70 active:scale-[0.985]"
            >
              Contacter l'agence
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

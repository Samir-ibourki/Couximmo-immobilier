import { Building2, Home, MapPin, TrendingUp, Waves } from "lucide-react";
import coastlineImage from "../assets/area_3.webp";
import { investmentReasons } from "../data/investmentReasons.js";
import { useSectionReveal } from "../hooks/useSectionReveal.js";

const iconMap = {
  "coastal-city": Waves,
  "rental-demand": TrendingUp,
  "developing-areas": Building2,
  "taghazout-tamraght": MapPin,
  "dynamic-market": Home,
};

export default function WhyInvestAgadir() {
  const sectionRef = useSectionReveal();

  return (
    <section ref={sectionRef} className="py-20 bg-muted/20 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div data-animate className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            {"Pourquoi investir \u00e0 Agadir ?"}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {
              "Entre littoral, d\u00e9veloppement urbain et forte attractivit\u00e9 touristique, Agadir offre un cadre id\u00e9al pour habiter, louer ou investir."
            }
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-10 items-stretch">
          <div
            data-animate
            className="relative min-h-80 overflow-hidden rounded-2xl shadow-xl"
          >
            <img
              src={coastlineImage}
              alt="Littoral et quartiers d'Agadir"
              loading="lazy"
              decoding="async"
              className="h-full min-h-80 w-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <p className="text-sm font-semibold uppercase tracking-wider text-white/75">
                {"Agadir & r\u00e9gions"}
              </p>
              <p className="mt-2 text-2xl font-bold">
                {
                  "Un march\u00e9 port\u00e9 par le cadre de vie et la demande locative."
                }
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {investmentReasons.map((reason) => {
              const Icon = iconMap[reason.id];

              return (
                <article
                  key={reason.id}
                  data-animate
                  className={`rounded-2xl border p-6 shadow-sm ${
                    reason.highlighted
                      ? "bg-primary text-white border-primary sm:row-span-2"
                      : "bg-white text-foreground border-border/60"
                  }`}
                >
                  <div
                    className={`mb-6 flex h-12 w-12 items-center justify-center rounded-2xl ${
                      reason.highlighted
                        ? "bg-white/15 text-white"
                        : "bg-accent/10 text-accent"
                    }`}
                  >
                    <Icon size={24} strokeWidth={1.7} />
                  </div>
                  <h3 className="text-xl font-bold">{reason.title}</h3>
                  <p
                    className={`mt-3 leading-relaxed ${
                      reason.highlighted
                        ? "text-white/80"
                        : "text-muted-foreground"
                    }`}
                  >
                    {reason.description}
                  </p>
                  {reason.extraDescription ? (
                    <p
                      className={`mt-4 leading-relaxed ${
                        reason.highlighted
                          ? "text-white/80"
                          : "text-muted-foreground"
                      }`}
                    >
                      {reason.extraDescription}
                    </p>
                  ) : null}
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

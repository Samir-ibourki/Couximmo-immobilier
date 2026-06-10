import { stats } from "../data/areas";
import { useSectionReveal } from "../hooks/useSectionReveal.js";

export default function StatsSection() {
  const sectionRef = useSectionReveal();

  return (
    <section ref={sectionRef} className=" md:py-24 py-10 bg-muted/30">
      <div className="container mx-auto px-4 md:px-8">
        <div data-animate className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Votre partenaire immobilier de confiance a Agadir
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Couximmo Agadir accompagne les acheteurs, vendeurs, locataires et
            proprietaires avec une connaissance locale du marche immobilier.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {stats.map((stat) => (
            <div
              key={stat.title}
              data-animate
              className="bg-white border border-border p-8 rounded-2xl flex flex-col justify-center"
            >
              <span className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">
                {stat.subtitle}
              </span>
              <h3 className="text-xl font-bold text-foreground">
                {stat.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

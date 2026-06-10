import { properties } from "../data/properties.js";
import { useSectionReveal } from "../hooks/useSectionReveal.js";

export default function FeaturedProperties() {
  const sectionRef = useSectionReveal();

  return (
    <section
      id="properties"
      ref={sectionRef}
      className="py-24 bg-white scroll-mt-24"
    >
      <div className="container mx-auto px-4 md:px-8">
        <div
          data-animate
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Decouvrez votre prochain bien
            </h2>
            <p className="text-lg text-muted-foreground">
              Une selection de nos meilleures offres a Agadir et ses environs
            </p>
          </div>
          <a
            href="#properties"
            className="inline-flex items-center justify-center px-6 py-3 border border-border rounded-full font-medium hover:bg-muted transition-colors"
          >
            Voir tout
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 items-stretch">
          {properties.map((prop) => (
            <div
              key={prop.id}
              data-animate
              className="group bg-white rounded-2xl shadow-sm hover:shadow-xl border border-border/50 overflow-hidden transition-shadow duration-300 flex flex-col"
            >
              <div className="relative aspect-4/3 overflow-hidden">
                <img
                  src={prop.image}
                  alt={prop.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary uppercase tracking-wider">
                  {prop.type}
                </div>
              </div>
              <div className="p-6 flex flex-col grow">
                <h3 className="text-lg font-bold mb-2 text-foreground line-clamp-2">
                  {prop.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {prop.location}
                </p>
                <div className="mt-auto">
                  <div className="flex items-center gap-4 text-sm text-foreground/80 mb-6 font-medium">
                    <span>{prop.surface}</span>
                    <span className="w-1 h-1 rounded-full bg-border"></span>
                    <span>{prop.rooms}</span>
                  </div>
                  <span className="block text-lg mb-3 font-bold text-primary">
                    {prop.price}
                  </span>
                  <button
                    type="button"
                    className="w-full mt-6 py-3 bg-muted text-foreground rounded-xl font-medium cursor-pointer transition-colors hover:bg-primary! hover:text-white!"
                  >
                    Voir le detail
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { areas } from "../data/areas.js";
import { useSectionReveal } from "../hooks/useSectionReveal.js";

export default function AreasSection() {
  const sectionRef = useSectionReveal();

  return (
    <section
      id="areas"
      ref={sectionRef}
      className="py-16 bg-muted/20 scroll-mt-24"
    >
      <div className="container mx-auto px-4 md:px-8">
        <div data-animate className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Nos quartiers et secteurs
          </h2>
          <p className="text-lg text-muted-foreground">
            Nous operons dans tout Agadir et ses environs
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {areas.map((area) => (
            <div
              key={area.id}
              data-animate
              className="group relative h-70 rounded-2xl overflow-hidden cursor-pointer shadow-sm"
            >
              <img
                src={area.image}
                alt={area.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white text-2xl font-bold mb-1">
                  {area.title}
                </h3>
                <p className="text-white/80 text-sm font-medium">{area.hint}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

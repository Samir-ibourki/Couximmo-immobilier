import { ArrowRight } from "lucide-react";
import collectionImage from "../assets/collection.png";
import { useSectionReveal } from "../hooks/useSectionReveal.js";

export default function CollectionSection() {
  const sectionRef = useSectionReveal();

  return (
    <section
      ref={sectionRef}
      className="md:py-24 py-10 bg-white overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div data-animate className="w-full lg:w-1/2 max-w-xl">
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-accent/10 text-accent text-sm font-semibold uppercase tracking-wider">
              Prestige
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-foreground leading-tight">
              Collection exclusive
            </h2>
            <p className="text-xl text-foreground/80 mb-6 font-medium">
              Une selection de biens pour vivre, investir et profiter pleinement
              d'Agadir.
            </p>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              Des villas en bord de mer aux appartements contemporains, notre
              collection exclusive vous ouvre les portes des proprietes les plus
              recherchees d'Agadir.
            </p>
            <a
              href="#properties"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-colors"
            >
              <span>Explorer</span>
              <ArrowRight size={20} />
            </a>
          </div>
          <div data-animate className="w-full lg:w-1/2 relative">
            <div className="absolute inset-0 bg-accent/5 rounded-3xl translate-x-4 translate-y-4 -z-10"></div>
            <img
              src={collectionImage}
              alt="Collection exclusive Agadir"
              className="w-full h-auto aspect-4/3 object-cover rounded-3xl shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

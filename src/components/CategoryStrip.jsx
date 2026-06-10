import { categories } from "../data/categories.js";
import { useSectionReveal } from "../hooks/useSectionReveal.js";

export default function CategoryStrip() {
  const sectionRef = useSectionReveal();

  return (
    <section
      id="categories"
      ref={sectionRef}
      className="py-20 bg-white scroll-mt-24"
    >
      <div className="container mx-auto px-4 md:px-8">
        <div data-animate className="mb-10 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Types de biens
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">
            Selectionnez le type de propriete qui correspond a votre projet.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {categories.map((cat) => (
            <div
              key={cat.id}
              data-animate
              className="group relative h-80 rounded-3xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={cat.image}
                alt={cat.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-white text-2xl font-bold tracking-tight">
                  {cat.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

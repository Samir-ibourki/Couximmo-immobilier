import { useSectionReveal } from "../hooks/useSectionReveal.js";

export default function CTASection({ onContactClick }) {
  const sectionRef = useSectionReveal();

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 px-4 md:px-8 bg-white scroll-mt-24"
    >
      <div className="container mx-auto">
        <div
          data-animate
          className="bg-primary rounded-[2.5rem] p-10 md:p-20 text-center text-white overflow-hidden relative"
        >
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Vous avez un projet immobilier a Agadir ?
            </h2>
            <p className="text-xl text-white/80 mb-10 font-medium">
              Parlez-nous de votre projet et laissez Couximmo Agadir vous accompagner vers le bien qui vous correspond.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                type="button"
                onClick={onContactClick}
                className="w-full sm:w-auto px-8 py-4 !bg-white !text-primary rounded-full font-bold hover:!bg-white/90 transition-colors"
              >
                Contacter l'agence
              </button>
              <button
                type="button"
                onClick={onContactClick}
                className="w-full sm:w-auto px-8 py-4 !bg-transparent !text-white border border-white/30 rounded-full font-bold hover:!bg-white/10 transition-colors"
              >
                Demander une visite
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

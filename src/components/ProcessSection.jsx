import { ClipboardList, Search, Calendar, CheckCircle } from "lucide-react";
import { processSteps } from "../data/processSteps.js";
import { useSectionReveal } from "../hooks/useSectionReveal.js";

const iconMap = { ClipboardList, Search, Calendar, CheckCircle };

export default function ProcessSection() {
  const sectionRef = useSectionReveal();

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div data-animate className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Comment ca marche
          </h2>
          <p className="text-lg text-muted-foreground">
            Un processus clair et transparent pour concretiser votre projet
          </p>
        </div>

        <div className="relative">
          <div
            data-animate
            className="hidden lg:block absolute top-11 left-[12%] right-[12%] h-0.5 border-t-2 border-dashed border-border/60"
          ></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {processSteps.map((step) => {
              const Icon = iconMap[step.icon];
              return (
                <div
                  key={step.id}
                  data-animate
                  className="relative flex flex-col items-center text-center"
                >
                  <div className="w-24 h-24 rounded-full bg-white border-4 border-muted flex items-center justify-center mb-6 shadow-sm relative z-10">
                    <Icon size={32} className="text-accent" strokeWidth={1.5} />
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm border-2 border-white">
                      {step.id}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed px-4">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

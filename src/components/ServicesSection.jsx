import {
  Home,
  Key,
  TrendingUp,
  BarChart3,
  Briefcase,
  FileText,
} from "lucide-react";
import { services } from "../data/services.js";
import { useSectionReveal } from "../hooks/useSectionReveal.js";

const iconMap = {
  Home,
  Key,
  TrendingUp,
  BarChart3,
  Briefcase,
  FileText,
};

export default function ServicesSection() {
  const sectionRef = useSectionReveal();

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-20 bg-muted/30 scroll-mt-24"
    >
      <div className="container mx-auto px-4 md:px-8">
        <div data-animate className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Nos services
          </h2>
          <p className="text-lg text-muted-foreground">
            Un accompagnement complet de A a Z
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {services.map((svc) => {
            const Icon = iconMap[svc.icon];
            return (
              <div
                key={svc.id}
                data-animate
                className="bg-white p-8 rounded-2xl shadow-sm border border-border/50 hover:-translate-y-1 hover:shadow-md transition-all duration-300"
              >
                <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center mb-6 text-primary">
                  <Icon size={28} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">
                  {svc.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {svc.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

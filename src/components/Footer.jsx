import { Building2 } from "lucide-react";

const footerLinks = [
  { label: "Accueil", href: "#home" },
  { label: "Proprietes", href: "#properties" },
  { label: "Services", href: "#services" },
  { label: "Agence", href: "#agency" },
  { label: "Quartiers", href: "#areas" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-border pt-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 mb-16">
          <div className="col-span-2 md:col-span-2 lg:col-span-1">
            <a
              href="#home"
              className="flex items-center gap-2 text-primary mb-6"
            >
              <Building2 size={32} strokeWidth={2} />
              <span className="text-2xl font-bold tracking-tight">
                Couximmo
              </span>
            </a>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Votre partenaire immobilier a Agadir depuis 2003. Achat, vente,
              location et gestion de biens de prestige.
            </p>
            <p className="text-sm text-muted-foreground font-medium">
              Unofficial redesign concept — personal portfolio project.
            </p>
          </div>

          <div className="col-span-1">
            <h4 className="text-lg font-bold text-foreground mb-6">
              Navigation
            </h4>
            <ul className="space-y-4">
              {footerLinks.slice(0, 3).map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors font-medium"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="text-lg font-bold text-foreground mb-6">
              Liens utiles
            </h4>
            <ul className="space-y-4">
              {footerLinks.slice(3).map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors font-medium"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1">
            <h4 className="text-lg font-bold text-foreground mb-6">Contact</h4>
            <ul className="space-y-4 text-muted-foreground font-medium">
              <li>Agadir, Maroc</li>
              <li>
                <a
                  href="tel:+212674602018"
                  className="hover:text-primary transition-colors"
                >
                  +212 674 60 20 18
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@immobilieragadir.com"
                  className="hover:text-primary transition-colors"
                >
                  info@immobilieragadir.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/212674602018"
                  className="hover:text-primary transition-colors"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground font-medium">
            2026 Couximmo Agadir. Tous droits reserves.
          </p>
        </div>
      </div>
    </footer>
  );
}

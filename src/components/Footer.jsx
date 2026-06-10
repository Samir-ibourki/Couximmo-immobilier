import { Building2 } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const footerLinks = [
  { label: "Categories", href: "#categories" },
  { label: "Proprietes", href: "#properties" },
  { label: "Services", href: "#services" },
  { label: "Quartiers", href: "#areas" },
  { label: "Contact", href: "#contact" },
];

const legalLinks = ["Mentions legales", "Politique de confidentialite", "CGU"];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-border pt-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 mb-16">
          <div className="col-span-2 md:col-span-2 lg:col-span-1">
            <a
              href="#top"
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
            <div className="flex gap-4">
              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-colors"
              >
                <FaFacebook size={18} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-colors"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-colors"
              >
                <FaLinkedin size={18} />
              </a>
            </div>
          </div>

          <div className="col-span-1">
            <h4 className="text-lg font-bold text-foreground mb-6">
              Navigation
            </h4>
            <ul className="space-y-4">
              {footerLinks.map((link) => (
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
            <h4 className="text-lg font-bold text-foreground mb-6">Legal</h4>
            <ul className="space-y-4">
              {legalLinks.map((label) => (
                <li key={label}>
                  <a
                    href="#contact"
                    className="text-muted-foreground hover:text-primary transition-colors font-medium"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1">
            <h4 className="text-lg font-bold text-foreground mb-6">Contact</h4>
            <ul className="space-y-4 text-muted-foreground font-medium">
              <li>Agadir, Maroc</li>
              <li>+212 674 60 20 18</li>
              <li>info@immobilieragadir.com</li>
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

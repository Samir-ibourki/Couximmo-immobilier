import { useEffect, useState } from "react";
import { Building2, Menu, X } from "lucide-react";
import { navItems } from "../data/areas";

export default function Header({ onContactClick }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const scrollToSection = (event, href) => {
    event.preventDefault();
    setMenuOpen(false);

    const target = document.querySelector(href);
    if (!target) return;

    const top = target.getBoundingClientRect().top + window.scrollY - 88;
    window.scrollTo({ top, behavior: "smooth" });
  };

  const handleContactClick = () => {
    setMenuOpen(false);
    onContactClick();
  };

  const headerClass =
    scrolled || menuOpen
      ? "bg-white/90 backdrop-blur-md border-b border-border py-4"
      : "bg-transparent py-6";
  const isSolid = scrolled || menuOpen;
  const brandClass = isSolid
    ? "text-primary"
    : "text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)]";
  const navClass = isSolid
    ? "text-foreground"
    : "text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)]";
  const menuButtonClass = isSolid ? "text-primary" : "!text-white";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerClass}`}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        <a
          href="#top"
          onClick={(event) => scrollToSection(event, "#top")}
          className={`flex items-center gap-2 transition-colors ${brandClass}`}
        >
          <Building2 size={28} strokeWidth={2} />
          <span className="text-xl font-bold tracking-tight">Couximmo</span>
        </a>

        <nav
          className={`hidden md:flex items-center gap-8 text-sm font-medium transition-colors ${navClass}`}
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(event) => scrollToSection(event, item.href)}
              className="hover:text-accent transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <button
            type="button"
            onClick={handleContactClick}
            className="px-6 py-2.5 bg-primary! text-white! rounded-full text-sm font-medium cursor-pointer hover:bg-primary/90! transition-colors"
          >
            Contacter l'agence
          </button>
        </div>

        <button
          type="button"
          className={`md:hidden p-2 transition-colors ${menuButtonClass}`}
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden absolute left-0 right-0 top-full bg-white border-b border-border shadow-lg">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="rounded-lg px-3 py-3 text-base font-medium text-foreground hover:bg-muted"
                onClick={(event) => scrollToSection(event, item.href)}
              >
                {item.label}
              </a>
            ))}
            <button
              type="button"
              className="mt-2 rounded-full bg-primary! px-5 py-3 text-center text-sm font-medium text-white!"
              onClick={handleContactClick}
            >
              Contacter l'agence
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}

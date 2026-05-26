import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useLocation } from "react-router-dom";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#events", label: "Events" },
  { href: "#menu", label: "Menu" },
  { href: "#gallery", label: "Gallery" },
  { href: "#reviews", label: "Reviews" },
  { href: "#location", label: "Location" },
  { href: "#faq", label: "FAQ" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";
  const prefix = isHome ? "" : "/";
  const homeHref = isHome ? "#" : "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/95 backdrop-blur-md shadow-gold" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <a href="#" className="font-heading text-3xl font-light tracking-wide text-primary">
          Cherish
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-body font-light tracking-widest uppercase text-foreground/70 hover:text-primary transition-colors duration-300"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#reservation"
            className="bg-gradient-gold text-primary-foreground px-6 py-2.5 text-xs font-semibold tracking-widest uppercase rounded-sm hover:opacity-90 transition-opacity"
          >
            Book a Table
          </a>
        </div>

        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background/98 backdrop-blur-md border-t border-gold px-6 py-6 space-y-4">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-sm font-body tracking-widest uppercase text-foreground/70 hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#reservation"
            onClick={() => setOpen(false)}
            className="block text-center bg-gradient-gold text-primary-foreground px-6 py-3 text-xs font-semibold tracking-widest uppercase rounded-sm"
          >
            Book a Table
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

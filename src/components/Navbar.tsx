import { useState, useEffect } from "react";
import { Menu, X, Instagram } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import logoAsset from "@/assets/cherish-logo-white-new.png.asset.json";
import { assetUrl } from "@/lib/assetUrl";

type NavLink = { hash: string; label: string; path?: never } | { path: string; label: string; hash?: never };

const navLinks: NavLink[] = [
  { hash: "about", label: "About" },
  { hash: "events", label: "Events" },
  { path: "/menu", label: "Menu" },
  { hash: "gallery", label: "Gallery" },
  { hash: "reviews", label: "Reviews" },
  { hash: "location", label: "Location" },
  { hash: "faq", label: "FAQ" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // When landing on "/" with a hash, smoothly scroll to it
  useEffect(() => {
    if (location.pathname === "/" && location.hash) {
      const id = location.hash.replace("#", "");
      // wait for sections to mount
      requestAnimationFrame(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  }, [location.pathname, location.hash]);

  const handleNav = (e: React.MouseEvent, hash?: string, path?: string) => {
    e.preventDefault();
    setOpen(false);
    if (path) {
      navigate(path);
      return;
    }
    if (hash) {
      if (isHome) {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        window.history.replaceState(null, "", `#${hash}`);
      } else {
        navigate(`/#${hash}`);
      }
    }
  };

  const handleLogo = (e: React.MouseEvent) => {
    e.preventDefault();
    setOpen(false);
    if (isHome) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/95 backdrop-blur-md shadow-gold" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto relative flex items-center justify-between py-3 px-4">
        <a
          href="/"
          onClick={handleLogo}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-auto"
        >
          <img
            src={assetUrl(logoAsset)}
            alt="Cherish Restaurant & Bar"
            className="h-8 sm:h-10 md:h-12 w-auto max-w-[50vw] object-contain"
          />
        </a>
        <div className="flex-1 md:hidden" aria-hidden="true" />

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.path || l.hash}
              href={l.path || `/#${l.hash}`}
              onClick={(e) => handleNav(e, l.hash, l.path)}
              className="text-sm font-body font-light tracking-widest uppercase text-foreground/70 hover:text-primary transition-colors duration-300"
            >
              {l.label}
            </a>
          ))}
          <a
            href="/#reservation"
            onClick={(e) => handleNav(e, "reservation")}
            className="bg-gradient-gold text-primary-foreground px-6 py-2.5 text-xs font-semibold tracking-widest uppercase rounded-sm hover:opacity-90 transition-opacity"
          >
            Book a Table
          </a>
          <a
            href="https://www.instagram.com/cherish.restaurant"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-foreground/70 hover:text-[#E4405F] transition-colors"
          >
            <Instagram size={20} />
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
              key={l.path || l.hash}
              href={l.path || `/#${l.hash}`}
              onClick={(e) => handleNav(e, l.hash, l.path)}
              className="block text-sm font-body tracking-widest uppercase text-foreground/70 hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="/#reservation"
            onClick={(e) => handleNav(e, "reservation")}
            className="block text-center bg-gradient-gold text-primary-foreground px-6 py-3 text-xs font-semibold tracking-widest uppercase rounded-sm"
          >
            Book a Table
          </a>
          <a
            href="https://www.instagram.com/cherish.restaurant"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="flex items-center justify-center gap-2 text-sm font-body tracking-widest uppercase text-foreground/70 hover:text-[#E4405F] transition-colors"
          >
            <Instagram size={18} /> Instagram
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

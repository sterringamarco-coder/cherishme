import { Home, Phone, Facebook, Instagram, MessageCircle } from "lucide-react";
import grabLogo from "@/assets/grab-logo.png";
import logoAsset from "@/assets/cherish-logo-white-new.png.asset.json";

const FooterSection = () => (
  <footer className="py-16 border-t border-gold">
    <div className="container mx-auto px-4 max-w-5xl text-center">
      <a href="/" className="inline-block">
        <img
          src={logoAsset.url}
          alt="Cherish Restaurant & Bar"
          className="h-24 w-auto object-contain mx-auto"
        />
      </a>
      <p className="font-body text-sm text-muted-foreground max-w-2xl mx-auto mt-6 leading-relaxed">
        Cherish Restaurant & Bar Restaurant and Bar is a top-rated beachfront restaurant in Koh Samui offering
        fresh seafood, Thai cuisine, and unforgettable sunset dining
        experiences. Located in Bangpor, a short drive from Fisherman's Village, it is the
        perfect place for romantic dinners and oceanfront dining.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
        <a
          href="#reservation"
          className="bg-gradient-gold text-primary-foreground px-10 py-4 text-sm font-semibold tracking-widest uppercase rounded-sm hover:opacity-90 transition-opacity"
        >
          Book a Table
        </a>
        <a
          href="https://r.grab.com/o/J3mQ7jiy"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Order on Grab"
          className="hover:opacity-90 transition-opacity"
        >
          <img src={grabLogo} alt="Order on Grab" className="h-12 w-auto rounded-md" />
        </a>
      </div>

      <div className="flex flex-wrap justify-center gap-8 mt-10">
        {["About", "Menu", "Gallery", "Reviews", "Location", "FAQ"].map((l) => {
          const href = l === "Menu" ? "/menu" : `#${l.toLowerCase()}`;
          return (
            <a
              key={l}
              href={href}
              className="font-body text-xs tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors"
            >
              {l}
            </a>
          );
        })}
      </div>

      <div className="divider-gold mt-10 mb-8" />

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto mb-8">
        <div className="flex items-center gap-3 justify-center sm:justify-start">
          <Home className="w-5 h-5 text-primary shrink-0" />
          <a href="#location" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">92/32 Bang Po, Koh Samui</a>
        </div>
        <div className="flex items-center gap-3 justify-center sm:justify-start">
          <Phone className="w-5 h-5 text-primary shrink-0" />
          <a href="tel:+66802494528" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">080 249 4528</a>
        </div>
        <div className="flex items-center gap-3 justify-center sm:justify-start">
          <Globe className="w-5 h-5 text-primary shrink-0" />
          <a href="https://cherish.restaurant" target="_blank" rel="noopener noreferrer" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">cherish.restaurant</a>
        </div>
        <div className="flex items-center gap-3 justify-center sm:justify-start">
          <MessageCircle className="w-5 h-5 text-[#00C300] shrink-0" />
          <a href="https://line.me/ti/p/~0802494528" target="_blank" rel="noopener noreferrer" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">LINE: 080 249 4528</a>
        </div>
        <div className="flex items-center gap-3 justify-center sm:justify-start">
          <MessageCircle className="w-5 h-5 text-[#25D366] shrink-0" />
          <a href="https://wa.me/66802494528" target="_blank" rel="noopener noreferrer" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">WhatsApp: +66 (0) 80 249 4528</a>
        </div>
        <div className="flex items-center gap-3 justify-center sm:justify-start">
          <Facebook className="w-5 h-5 text-[#1877F2] shrink-0" />
          <a href="https://www.facebook.com/CherishRestaurantBar" target="_blank" rel="noopener noreferrer" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">Cherish Restaurant &amp; Bar</a>
        </div>
        <div className="flex items-center gap-3 justify-center sm:col-start-2">
          <Instagram className="w-5 h-5 text-[#E4405F] shrink-0" />
          <a href="https://www.instagram.com/cherish.restaurant" target="_blank" rel="noopener noreferrer" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">cherish.restaurant</a>
        </div>
      </div>

      <div className="divider-gold mb-6" />
      <p className="font-body text-xs text-muted-foreground">
        © {new Date().getFullYear()} Cherish Restaurant & Bar. All rights reserved. | Bophut, Koh Samui, Thailand
      </p>
      <p className="font-body text-xs text-muted-foreground mt-2">
        Made by{" "}
        <a
          href="https://siam.digital.marketing.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:opacity-80 transition-opacity"
        >
          Siam.Digital.Marketing.com
        </a>
      </p>
    </div>
  </footer>
);

export default FooterSection;

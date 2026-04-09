const FooterSection = () => (
  <footer className="py-16 border-t border-gold">
    <div className="container mx-auto px-4 max-w-5xl text-center">
      <a href="#" className="font-heading text-4xl font-light text-primary">
        Cherish
      </a>
      <p className="font-body text-sm text-muted-foreground max-w-2xl mx-auto mt-6 leading-relaxed">
        Cherish Samui is a top-rated beachfront restaurant in Koh Samui offering
        fresh seafood, Thai cuisine, and unforgettable sunset dining
        experiences. Located in Bophut near Fisherman's Village, it is the
        perfect place for romantic dinners and oceanfront dining.
      </p>

      <div className="flex flex-wrap justify-center gap-8 mt-8">
        {["About", "Menu", "Gallery", "Reviews", "Location", "FAQ"].map((l) => (
          <a
            key={l}
            href={`#${l.toLowerCase()}`}
            className="font-body text-xs tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors"
          >
            {l}
          </a>
        ))}
      </div>

      <div className="divider-gold mt-10 mb-6" />
      <p className="font-body text-xs text-muted-foreground">
        © {new Date().getFullYear()} Cherish Samui. All rights reserved. | Bophut, Koh Samui, Thailand
      </p>
    </div>
  </footer>
);

export default FooterSection;

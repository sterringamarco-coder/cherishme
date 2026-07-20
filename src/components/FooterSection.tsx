import grabLogo from "@/assets/grab-logo.png";

const FooterSection = () => (
  <footer className="py-16 border-t border-gold">
    <div className="container mx-auto px-4 max-w-5xl text-center">
      <a href="#" className="font-heading text-4xl font-light text-primary">
        Cherish
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

      <div className="divider-gold mt-10 mb-6" />
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

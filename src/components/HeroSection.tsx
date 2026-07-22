import { motion } from "framer-motion";
import heroAsset from "@/assets/cherish-bar-restaurant-2026.jpeg.asset.json";
import { assetUrl } from "@/lib/assetUrl";
const heroImg = assetUrl(heroAsset);
import grabLogo from "@/assets/grab-logo.png";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
    <img
      src={heroImg}
      alt=""
      aria-hidden="true"
      className="absolute inset-0 w-full h-full object-cover object-center scale-105 blur-xl opacity-60"
    />
    <img
      src={heroImg}
      alt="Beachfront sunset dining at Cherish Restaurant & Bar restaurant Koh Samui"
      className="absolute inset-0 w-full h-full object-contain object-center"
      width={1086}
      height={1449}
      // @ts-ignore - React 18 dev warns on camelCase fetchPriority; lowercase is the valid DOM attribute
      fetchpriority="high"
    />

    <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30 z-0" aria-hidden="true" />

    <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl [text-shadow:0_2px_12px_rgba(0,0,0,0.5)]">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-primary font-body text-xs tracking-[0.35em] uppercase mb-6"
      >
        Bophut · Koh Samui · Thailand
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="font-heading text-4xl md:text-6xl lg:text-7xl font-light leading-tight mb-6"
      >
        Best Beachfront Restaurant on{" "}
        <span className="text-gradient-gold">Koh Samui</span> – Cherish Restaurant & Bar Restaurant
      </motion.h1>

      <div className="bg-black/40 backdrop-blur-sm py-8 px-6 rounded-lg inline-block max-w-3xl mx-auto mb-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-body text-base md:text-lg font-light text-foreground/80 max-w-2xl mx-auto mb-4 leading-relaxed"
        >
          Experience unforgettable sunset dining on Koh Samui with beautiful food,
          handcrafted cocktails, and breathtaking ocean views.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="font-body text-sm font-light text-white max-w-xl mx-auto leading-relaxed"
        >
          Looking for the best restaurant on Koh Samui? Cherish Samui Restaurant & Bar offers a
          unique beachfront dining experience where great food meets stunning
          sunsets. Perfect for romantic dinners, special occasions, and
          unforgettable evenings by the sea.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        className="flex flex-col sm:flex-row gap-4 justify-center"
      >
        <a
          href="#reservation"
          className="bg-white text-primary-foreground px-10 py-4 text-sm font-semibold tracking-widest uppercase rounded-sm hover:bg-primary hover:text-primary-foreground transition-colors shadow-sm"
        >
          Book a Table
        </a>
        <a
          href="/menu"
          className="bg-white text-primary-foreground px-10 py-4 text-sm font-semibold tracking-widest uppercase rounded-sm hover:bg-primary hover:text-primary-foreground transition-colors shadow-sm"
        >
          View Menu
        </a>
      </motion.div>

      <motion.a
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.1 }}
        href="https://r.grab.com/o/J3mQ7jiy"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Order on Grab"
        className="inline-block mt-8 hover:opacity-90 transition-opacity"
      >
        <img src={grabLogo} alt="Order on Grab" className="h-12 w-auto rounded-md" />
      </motion.a>
    </div>

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 1 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2"
    >
      <div className="w-px h-16 bg-gradient-to-b from-primary/60 to-transparent" />
    </motion.div>
  </section>
);

export default HeroSection;

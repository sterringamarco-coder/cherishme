import { motion } from "framer-motion";

const MenuSection = () => (
  <section id="menu" className="py-24 md:py-32">
    <div className="container mx-auto px-4 max-w-5xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-16"
      >
        <p className="text-primary font-body text-xs tracking-[0.3em] uppercase mb-4">
          Our Menu
        </p>
        <h2 className="font-heading text-3xl md:text-5xl font-light mb-6">
          Fresh Seafood & Thai Cuisine in{" "}
          <span className="text-gradient-gold">Koh Samui</span>
        </h2>
        <div className="divider-gold mb-6" />
        <p className="font-body text-sm text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Our menu is designed to offer one of the best dining experiences in Koh
          Samui, featuring fresh seafood, authentic Thai dishes, and
          international favorites. As a leading seafood restaurant in Koh Samui,
          we focus on quality, flavor, and presentation.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <p className="font-body text-sm text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Our menu changes daily based on the freshest catches and seasonal
          ingredients. Visit us to discover today's selections, or contact us
          for a preview of what we're serving.
        </p>
      </motion.div>
    </div>
  </section>
);

export default MenuSection;

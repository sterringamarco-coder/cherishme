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
          Welcome to{" "}
          <span className="text-gradient-gold">Cherish Restaurant</span>
        </h2>
        <div className="divider-gold mb-6" />
        <p className="font-body text-sm text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          At Cherish Restaurant, Chef Somkid brings years of experience from top
          international hotels to create a unique blend of Thai and Western cuisine.
        </p>
        <p className="font-body text-sm text-muted-foreground max-w-2xl mx-auto leading-relaxed mt-4">
          Our menu is carefully crafted using the finest ingredients, offering
          everything from flavorful Thai classics to refined Western dishes, along
          with a selection of tapas and lounge bites—perfect for any moment of the day.
        </p>
        <p className="font-body text-sm text-muted-foreground max-w-2xl mx-auto leading-relaxed mt-4">
          Enjoy your dining experience with our curated wine selection, chosen to
          perfectly complement every dish.
        </p>
        <p className="font-body text-sm text-muted-foreground max-w-2xl mx-auto leading-relaxed mt-4">
          Whether you’re here for breakfast, lunch, or dinner, we invite you to
          relax, explore our menu, and enjoy exceptional food in a welcoming atmosphere.
        </p>
        <p className="font-body text-sm text-muted-foreground max-w-2xl mx-auto leading-relaxed mt-4">
          We look forward to serving you.
        </p>
      </motion.div>

    </div>
  </section>
);

export default MenuSection;

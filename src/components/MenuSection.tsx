import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import chefSomkid from "@/assets/chef-somkid.png";

const MenuSection = () => (
  <section id="menu" className="py-24 md:py-32">
    <div className="container mx-auto px-4 max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-12"
      >
        <p className="text-primary font-body text-xs tracking-[0.3em] uppercase mb-4">
          OUR CHEF
        </p>
        <h2 className="font-heading text-3xl md:text-5xl font-light mb-6">
          Welcome to{" "}
          <span className="text-gradient-gold">Cherish Restaurant</span>
        </h2>
        <div className="divider-gold mb-6 mx-auto" />
      </motion.div>

      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-shrink-0 order-2 md:order-1"
        >
          <div className="relative w-48 md:w-56 lg:w-64">
            <img
              src={chefSomkid}
              alt="Chef Somkid at Cherish Restaurant holding a seafood platter"
              className="w-full h-auto rounded-md shadow-elegant"
              loading="lazy"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-1 order-1 md:order-2"
        >
          <p className="font-body text-sm text-muted-foreground leading-relaxed">
            At Cherish Restaurant, Chef Somkid brings years of experience from top
            international hotels to create a unique blend of Thai and Western cuisine.
          </p>
          <p className="font-body text-sm text-muted-foreground leading-relaxed mt-4">
            Our menu is carefully crafted using the finest ingredients, offering
            everything from flavorful Thai classics to refined Western dishes, along
            with a selection of tapas and lounge bites—perfect for any moment of the day.
          </p>
          <p className="font-body text-sm text-muted-foreground leading-relaxed mt-4">
            Enjoy your dining experience with our curated wine selection, chosen to
            perfectly complement every dish.
          </p>
          <p className="font-body text-sm text-muted-foreground leading-relaxed mt-4">
            Whether you’re here for breakfast, lunch, or dinner, we invite you to
            relax, explore our menu, and enjoy exceptional food in a welcoming atmosphere.
          </p>
          <p className="font-body text-sm text-muted-foreground leading-relaxed mt-4">
            We look forward to serving you.
          </p>
          <Link
            to="/menu"
            className="inline-block mt-6 font-body text-sm tracking-[0.2em] uppercase text-primary border border-primary px-6 py-3 hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            View OUR CHEF
          </Link>
        </motion.div>
      </div>
    </div>
  </section>
);

export default MenuSection;

import { motion } from "framer-motion";
import menuStarters from "@/assets/menu-starters.jpg";
import menuMains from "@/assets/menu-mains.jpg";
import menuSeafood from "@/assets/menu-seafood.jpg";
import menuDrinks from "@/assets/menu-drinks.jpg";

const menuCategories = [
  {
    title: "Starters",
    desc: "Fresh Thai-inspired starters made with local ingredients",
    image: menuStarters,
    alt: "Thai starters spring rolls tom yum soup Koh Samui restaurant",
    items: [
      { name: "Spring Rolls", desc: "Crispy vegetable spring rolls with sweet chili dipping sauce", price: "฿160" },
      { name: "Tom Yum Goong", desc: "Classic spicy Thai shrimp soup with lemongrass and kaffir lime", price: "฿220" },
      { name: "Chicken Satay", desc: "Grilled marinated chicken skewers with peanut sauce and cucumber relish", price: "฿190" },
      { name: "Fresh Oysters", desc: "Half-dozen locally sourced oysters served on ice with Thai mignonette", price: "฿380" },
    ],
  },
  {
    title: "Main Courses",
    desc: "Authentic Thai flavors & fresh seafood in Koh Samui",
    image: menuMains,
    alt: "Grilled sea bass fillet fine dining Koh Samui beachfront restaurant",
    items: [
      { name: "Grilled Sea Bass Fillet", desc: "Grilled white snapper fillet, grilled vegetables, mashed potato with white wine cream sauce", price: "฿420" },
      { name: "Deep Water Salmon", desc: "Grilled Norwegian salmon, sautéed vegetables, spinach, cherry tomatoes with dill cream", price: "฿450" },
      { name: "Pad Thai Goong", desc: "Traditional stir-fried rice noodles with tiger prawns, tamarind sauce, crushed peanuts", price: "฿280" },
      { name: "Massaman Lamb Curry", desc: "Slow-braised lamb in aromatic Massaman curry with potatoes and roasted peanuts", price: "฿380" },
      { name: "Green Curry Chicken", desc: "Fragrant Thai green curry with tender chicken, bamboo shoots, and sweet basil", price: "฿260" },
    ],
  },
  {
    title: "Seafood Specialties",
    desc: "Best seafood restaurant experience in Koh Samui — grilled seafood by the beach",
    image: menuSeafood,
    alt: "Seafood platter grilled prawns snapper lobster beachfront Koh Samui",
    items: [
      { name: "Grilled Tiger Prawns", desc: "Jumbo tiger prawns grilled with garlic butter and fresh herbs", price: "฿520" },
      { name: "Whole Grilled Snapper", desc: "Locally caught snapper grilled whole with Thai herbs and spicy lime dressing", price: "฿580" },
      { name: "Seafood Platter for Two", desc: "A grand selection of lobster, prawns, squid, mussels, and grilled fish", price: "฿1,680" },
      { name: "Steamed Sea Bass", desc: "Steamed with lime, chili, and garlic in classic Thai style", price: "฿460" },
    ],
  },
  {
    title: "Drinks & Cocktails",
    desc: "Signature cocktails in Koh Samui — beachfront drinks at sunset",
    image: menuDrinks,
    alt: "Tropical cocktails sunset beachfront bar Koh Samui",
    items: [
      { name: "Cherish Sunset", desc: "Our signature cocktail with rum, passion fruit, mango, and a splash of grenadine", price: "฿280" },
      { name: "Thai Basil Mojito", desc: "Fresh mint and Thai basil muddled with lime, sugar, and premium rum", price: "฿260" },
      { name: "Coconut Margarita", desc: "Smooth tequila blended with fresh coconut cream and lime", price: "฿280" },
      { name: "Premium Wine Selection", desc: "Curated list of red, white, and rosé wines from around the world", price: "from ฿250" },
    ],
  },
];

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

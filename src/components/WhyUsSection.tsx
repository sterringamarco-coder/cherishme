import { motion } from "framer-motion";
import { Waves, Sunset, Heart, Fish, Wine, MapPin } from "lucide-react";

const features = [
  { icon: Waves, title: "Beachfront Dining", desc: "Panoramic ocean views from every table, with the sound of waves as your soundtrack." },
  { icon: Sunset, title: "Best Sunset Spot", desc: "Consistently rated as one of the best sunset restaurants in Koh Samui." },
  { icon: Heart, title: "Romantic Atmosphere", desc: "Candlelit tables on the sand — perfect for couples and special celebrations." },
  { icon: Fish, title: "Fresh Local Seafood", desc: "Daily catch sourced from local fishermen, prepared by our expert chefs." },
  { icon: Wine, title: "Signature Cocktails", desc: "Handcrafted tropical cocktails and a curated selection of premium wines." },
  { icon: MapPin, title: "Near Fisherman's Village", desc: "Conveniently located in Bophut, minutes from Fisherman's Village." },
];

const WhyUsSection = () => (
  <section className="py-24 md:py-32 bg-gradient-warm">
    <div className="container mx-auto px-4 max-w-5xl text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <p className="text-primary font-body text-xs tracking-[0.3em] uppercase mb-4">
          What Makes Us Special
        </p>
        <h2 className="font-heading text-3xl md:text-5xl font-light mb-6">
          Why Cherish Samui is One of the Best Restaurants in{" "}
          <span className="text-gradient-gold">Koh Samui</span>
        </h2>
        <div className="divider-gold mb-12" />
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className="bg-card border border-gold rounded-sm p-8 text-center hover:shadow-gold transition-shadow duration-500"
          >
            <f.icon size={32} className="mx-auto mb-4 text-primary" strokeWidth={1.2} />
            <h3 className="font-heading text-xl mb-2">{f.title}</h3>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyUsSection;

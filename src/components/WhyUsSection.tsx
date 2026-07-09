import { motion } from "framer-motion";
import { Waves, Sunset, Heart, Fish, Wine, MapPin } from "lucide-react";

const features = [
  {
    icon: Waves,
    title: "Beachfront Dining",
    desc: "Panoramic ocean views from every table, with the sound of waves as your soundtrack.",
    detail: "Unlike many restaurants in Koh Samui that claim ocean views, Cherish Samui Restaurant and Bar sits directly on the sand. Your table is steps from the water's edge, with unobstructed views of the Gulf of Thailand stretching to the horizon.",
  },
  {
    icon: Sunset,
    title: "Best Sunset Spot",
    desc: "Consistently rated as one of the best sunset restaurants in Koh Samui.",
    detail: "Our west-facing beachfront offers Bophut's most spectacular sunset panorama. Arrive at 5:30 PM to watch the sky transform from golden amber to deep crimson — a nightly show that makes dinner at Cherish truly magical.",
  },
  {
    icon: Heart,
    title: "Romantic Atmosphere",
    desc: "Candlelit tables on the sand — perfect for couples and special celebrations.",
    detail: "Whether you're celebrating an anniversary, proposing, or enjoying a quiet evening for two, our team creates intimate, personalized moments with candlelight, flowers, and attentive yet discreet service.",
  },
  {
    icon: Fish,
    title: "Fresh Local Seafood",
    desc: "Daily catch sourced from local fishermen, prepared by our expert chefs.",
    detail: "Every morning, our chef visits the local Bophut fish market to hand-select the finest catch of the day. From succulent tiger prawns to whole grilled snapper, our seafood is never frozen — always fresh, always exceptional.",
  },
  {
    icon: Wine,
    title: "Signature Cocktails",
    desc: "Handcrafted tropical cocktails and a curated selection of premium wines.",
    detail: "Our mixologists create bespoke cocktails using fresh Thai herbs, tropical fruits, and premium spirits. The Cherish Sunset — our signature blend of rum, passion fruit, and mango — is the perfect companion to a Koh Samui evening.",
  },
  {
    icon: MapPin,
    title: "Close to Fisherman's Village",
    desc: "Located in Bophut, just 11 km (15-minute drive) from Fisherman's Village.",
    detail: "Situated along Bophut's scenic beachfront, we're a short and easy drive from the famous Fisherman's Village walking street. Many guests combine a visit to the night market with an unforgettable dinner at Cherish Samui Restaurant and Bar.",
  },
];

const WhyUsSection = () => (
  <section className="py-24 md:py-32 bg-gradient-warm">
    <div className="container mx-auto px-4 max-w-5xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-6"
      >
        <p className="text-primary font-body text-xs tracking-[0.3em] uppercase mb-4">
          What Makes Us Special
        </p>
        <h2 className="font-heading text-3xl md:text-5xl font-light mb-6">
          Why customers consider Cherish restaurant en bar as their preferred restaurant
        </h2>
        <div className="divider-gold mb-6" />
        <p className="font-body text-sm text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-12">
          There are many places to eat in Koh Samui, but very few combine
          world-class cuisine, a genuine beachfront location, and an atmosphere
          designed to make every guest feel truly special. Here's what sets
          Cherish Samui Restaurant and Bar apart from other restaurants on the island.
        </p>
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
            <p className="font-body text-sm text-muted-foreground leading-relaxed mb-3">{f.desc}</p>
            <p className="font-body text-xs text-muted-foreground/80 leading-relaxed">{f.detail}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyUsSection;

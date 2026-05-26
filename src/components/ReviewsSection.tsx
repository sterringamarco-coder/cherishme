import { motion } from "framer-motion";
import { Star, MapPin } from "lucide-react";

const reviews = [
  {
    text: "The most magical sunset dinner we've ever experienced. The seafood was incredibly fresh and the service impeccable. We sat right on the sand with our toes in the warm beach — truly the best beachfront dining in Koh Samui.",
    author: "Sarah & James",
    origin: "London, UK",
    rating: 5,
  },
  {
    text: "Absolutely the best restaurant in Koh Samui. The beachfront atmosphere is unmatched. We came back three times during our holiday! The grilled tiger prawns and Tom Yum were out of this world.",
    author: "Marco R.",
    origin: "Milan, Italy",
    rating: 5,
  },
  {
    text: "A perfect romantic dinner spot. The cocktails, the view, the food — everything was beyond our expectations. The Cherish Sunset cocktail is a must-try while watching the sky turn golden.",
    author: "Emily T.",
    origin: "Sydney, Australia",
    rating: 5,
  },
  {
    text: "We were looking for somewhere special near Fisherman's Village and Cherish Samui exceeded every expectation. The seafood platter for two was generous, beautifully presented, and bursting with flavor.",
    author: "David & Yuki",
    origin: "Tokyo, Japan",
    rating: 5,
  },
  {
    text: "This is hands down the best sunset restaurant in Koh Samui. We celebrated our anniversary here and the staff made it unforgettable — candles on the table, a complimentary dessert, and the most stunning ocean view.",
    author: "Anna K.",
    origin: "Stockholm, Sweden",
    rating: 5,
  },
  {
    text: "We've eaten at many restaurants across Thailand, but Cherish Samui stands out. The combination of fresh local seafood, authentic Thai flavors, and that incredible beachfront setting is hard to beat anywhere on the island.",
    author: "Pierre & Claire",
    origin: "Paris, France",
    rating: 5,
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7 },
  }),
};

const ReviewsSection = () => (
  <section id="reviews" className="py-24 md:py-32 bg-gradient-warm">
    <div className="container mx-auto px-4 max-w-5xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-16"
      >
        <p className="inline-flex items-center gap-2 text-primary font-body text-xs tracking-[0.3em] uppercase mb-4">
          <MapPin size={14} />
          Loved by Travelers & Locals
        </p>
        <h2 className="font-heading text-3xl md:text-5xl font-light mb-6">
          Top Rated Restaurant in <span className="text-gradient-gold">Koh Samui</span>
        </h2>
        <div className="divider-gold mb-6" />
        <p className="font-body text-sm text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Cherish Samui is consistently rated as one of the best beachfront
          restaurants in Koh Samui, with hundreds of happy guests praising our
          sunset views, fresh seafood, and exceptional service. Whether visitors
          come for a romantic dinner, a family celebration, or a casual evening
          by the ocean, they leave with memories that last a lifetime.
        </p>

        <div className="flex items-center justify-center gap-1 mt-6">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={22} className="fill-primary text-primary" />
          ))}
          <span className="ml-2 text-sm text-foreground/70 font-body">4.9 / 5 · 320+ reviews</span>
        </div>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {reviews.map((r, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="bg-card border border-gold rounded-sm p-8 flex flex-col"
          >
            <div className="flex gap-0.5 mb-4">
              {[...Array(r.rating)].map((_, j) => (
                <Star key={j} size={14} className="fill-primary text-primary" />
              ))}
            </div>
            <p className="font-body text-sm text-foreground/80 italic leading-relaxed flex-1">
              "{r.text}"
            </p>
            <div className="mt-6 pt-4 border-t border-gold">
              <p className="font-heading text-lg text-foreground">{r.author}</p>
              <p className="font-body text-xs text-muted-foreground tracking-wide">{r.origin}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mt-10 font-body text-sm text-muted-foreground italic max-w-xl mx-auto leading-relaxed"
      >
        "Guests describe Cherish Samui as the perfect place for a romantic sunset
        dinner in Koh Samui — a hidden gem where world-class food meets an
        unforgettable beachfront setting."
      </motion.p>
    </div>
  </section>
);

export default ReviewsSection;

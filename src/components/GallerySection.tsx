import { motion } from "framer-motion";
import sunsetImg from "@/assets/gallery-sunset.jpg";
import romanticImg from "@/assets/gallery-romantic.jpg";
import foodImg from "@/assets/gallery-food.jpg";
import cocktailsImg from "@/assets/gallery-cocktails.jpg";
import grabLogo from "@/assets/grab-logo.png";

const images = [
  { src: sunsetImg, alt: "Stunning sunset view from beachfront restaurant Koh Samui", span: "md:col-span-2 md:row-span-2", caption: "Golden hour at Cherish Samui — our beachfront tables offer the best sunset views in Koh Samui" },
  { src: romanticImg, alt: "Romantic dinner on the beach Koh Samui", span: "", caption: "Candlelit dinners on the sand for couples and celebrations" },
  { src: foodImg, alt: "Fresh seafood dish at Cherish Samui restaurant Koh Samui", span: "", caption: "Daily-catch seafood prepared by our expert Thai chefs" },
  { src: cocktailsImg, alt: "Signature tropical cocktails at sunset Koh Samui beach bar", span: "md:col-span-2", caption: "Handcrafted tropical cocktails enjoyed beachside at sunset" },
];

const GallerySection = () => (
  <section id="gallery" className="py-24 md:py-32 bg-gradient-warm">
    <div className="container mx-auto px-4 max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-6"
      >
        <p className="text-primary font-body text-xs tracking-[0.3em] uppercase mb-4">
          Gallery
        </p>
        <h2 className="font-heading text-3xl md:text-5xl font-light mb-6">
          Discover the <span className="text-gradient-gold">Atmosphere</span>
        </h2>
        <div className="divider-gold mb-6" />
        <p className="font-body text-sm text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-12">
          Step inside the Cherish Samui experience — from breathtaking Koh Samui
          sunsets and romantic beachfront tables to beautifully plated seafood
          and signature cocktails. Every evening here is a feast for all the
          senses, and our gallery captures just a glimpse of what awaits you.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-4 gap-3">
        {images.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className={`overflow-hidden rounded-sm group relative ${img.span}`}
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              width={800}
              height={600}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/80 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <p className="font-body text-xs text-foreground/90 leading-relaxed">{img.caption}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-center mt-8 font-body text-xs text-muted-foreground leading-relaxed max-w-xl mx-auto"
      >
        Every photo tells a story of what makes Cherish Samui one of the most
        photographed beachfront restaurants in Koh Samui. Visit us and create
        your own unforgettable memories by the sea.
      </motion.p>
    </div>
  </section>
);

export default GallerySection;

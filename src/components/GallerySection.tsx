import { motion } from "framer-motion";
import sunsetImg from "@/assets/gallery-sunset.jpg";
import romanticImg from "@/assets/gallery-romantic.jpg";
import foodImg from "@/assets/gallery-food.jpg";
import cocktailsImg from "@/assets/gallery-cocktails.jpg";

const images = [
  { src: sunsetImg, alt: "Stunning sunset view from beachfront restaurant Koh Samui", span: "md:col-span-2 md:row-span-2" },
  { src: romanticImg, alt: "Romantic dinner on the beach Koh Samui", span: "" },
  { src: foodImg, alt: "Fresh seafood dish at Cherish Samui restaurant Koh Samui", span: "" },
  { src: cocktailsImg, alt: "Signature tropical cocktails at sunset Koh Samui beach bar", span: "md:col-span-2" },
];

const GallerySection = () => (
  <section id="gallery" className="py-24 md:py-32 bg-gradient-warm">
    <div className="container mx-auto px-4 max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-12"
      >
        <p className="text-primary font-body text-xs tracking-[0.3em] uppercase mb-4">
          Gallery
        </p>
        <h2 className="font-heading text-3xl md:text-5xl font-light mb-6">
          Discover the <span className="text-gradient-gold">Atmosphere</span>
        </h2>
        <div className="divider-gold" />
      </motion.div>

      <div className="grid md:grid-cols-4 gap-3">
        {images.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className={`overflow-hidden rounded-sm ${img.span}`}
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              width={800}
              height={600}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;

import { motion } from "framer-motion";
import restaurantNightImg from "@/assets/gallery-restaurant-night.jpg";
import sunsetLoungerImg from "@/assets/gallery-sunset-lounger.jpg";
import sunsetPalmsImg from "@/assets/gallery-sunset-palms.jpg";
import sunsetHeartImg from "@/assets/gallery-sunset-heart.jpg";
import beachDayImg from "@/assets/gallery-beach-day.jpg";
import grabLogo from "@/assets/grab-logo.png";
import sunsetPalmDinner from "@/assets/upload-14-54.33_1.jpeg.asset.json";
import beachTablesBlueHour from "@/assets/upload-14-54.33.jpeg.asset.json";
import eveningEventPalms from "@/assets/upload-14-54.34_1.jpeg.asset.json";
import windowDiningGuests from "@/assets/upload-14-54.34.jpeg.asset.json";
import buffetGuests from "@/assets/upload-14-54.35_1.jpeg.asset.json";
import buffetTable from "@/assets/upload-14-54.35.jpeg.asset.json";
import beachsideEvent from "@/assets/upload-14-54.36.jpeg.asset.json";
import barLanterns from "@/assets/upload-14-54.38_1.jpeg.asset.json";
import cherishBarSea from "@/assets/upload-14-54.38.jpeg.asset.json";
import { assetUrl } from "@/lib/assetUrl";

const images = [
  { src: sunsetPalmsImg, alt: "Pastel sunset over the sea framed by palm trees at Cherish Restaurant & Bar", span: "md:col-span-2 md:row-span-2", caption: "Pastel skies and palm silhouettes — dinner with a view" },
  { src: sunsetHeartImg, alt: "Iconic heart-shaped beach lounger at sunset Cherish Restaurant & Bar", span: "", caption: "Our signature heart lounger — a favorite sunset spot" },
  { src: restaurantNightImg, alt: "Cherish Restaurant & Bar restaurant at night with warm lanterns and bar", span: "", caption: "Warm evenings under handwoven lanterns" },
  { src: sunsetLoungerImg, alt: "Sculptural beach lounger silhouetted against the Koh Samui sunset", span: "md:col-span-2", caption: "Sculptural loungers built for slow, golden evenings" },
  { src: beachDayImg, alt: "Cherish Restaurant & Bar beach umbrellas and sun loungers on white sand", span: "md:col-span-2", caption: "Daytime on the sand — Cherish loungers, sea, and shade" },
  { src: assetUrl(sunsetPalmDinner), alt: "Guests dining at sunset under palm trees at Cherish Restaurant & Bar", span: "md:col-span-2", caption: "Sunset dinners framed by swaying palms" },
  { src: assetUrl(cherishBarSea), alt: "Cherish bar with sea view and warm pendant lights", span: "", caption: "Our beachfront bar — sea views on tap" },
  { src: assetUrl(barLanterns), alt: "Cherish bar interior with lantern lighting and stocked shelves", span: "", caption: "Handcrafted cocktails under warm lanterns" },
  { src: assetUrl(beachTablesBlueHour), alt: "Beachfront tables at blue hour at Cherish Restaurant & Bar", span: "md:col-span-2", caption: "Tables in the sand at blue hour" },
  { src: assetUrl(eveningEventPalms), alt: "Evening celebration on the beach at Cherish Restaurant & Bar", span: "md:col-span-2", caption: "Celebrations under the palms" },
  { src: assetUrl(windowDiningGuests), alt: "Guests dining inside Cherish Restaurant & Bar through lantern-lit windows", span: "", caption: "Warm interiors, glowing windows" },
  { src: assetUrl(buffetTable), alt: "Elegant buffet spread at Cherish Restaurant & Bar", span: "", caption: "Bespoke buffets for private events" },
  { src: assetUrl(buffetGuests), alt: "Guests enjoying a buffet event at Cherish Restaurant & Bar", span: "md:col-span-2", caption: "Private events by the sea" },
  { src: assetUrl(beachsideEvent), alt: "Beachside event with pendant lights and buffet at Cherish Restaurant & Bar", span: "md:col-span-2", caption: "Golden-hour gatherings on the deck" },
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
          Step inside the Cherish Samui Restaurant and Bar experience — from breathtaking Koh Samui
          sunsets and romantic beachfront tables to beautifully plated seafood
          and signature cocktails. Every evening here is a unique experience for all the
          senses, and our gallery just captures a glimpse of what awaits you when you arrive.
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
        Every photo tells a story of what makes Cherish Restaurant & Bar Restaurant and Bar one of the most
        photographed beachfront restaurants on Koh Samui. Visit us and create
        your own unforgettable memories by the sea.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
      >
        <a
          href="#reservation"
          className="bg-gradient-gold text-primary-foreground px-10 py-4 text-sm font-semibold tracking-widest uppercase rounded-sm hover:opacity-90 transition-opacity"
        >
          Book a Table
        </a>
        <a
          href="https://r.grab.com/o/J3mQ7jiy"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Order on Grab"
          className="hover:opacity-90 transition-opacity"
        >
          <img src={grabLogo} alt="Order on Grab" className="h-12 w-auto rounded-md" />
        </a>
      </motion.div>
    </div>
  </section>
);

export default GallerySection;

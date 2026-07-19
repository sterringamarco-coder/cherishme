import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ambianceImg from "@/assets/cherish-restaurant-evening.jpg";
import grabLogo from "@/assets/grab-logo.png";

const AboutSection = () => (
  <section id="about" className="py-24 md:py-32">
    <div className="container mx-auto px-4 max-w-6xl">
      <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={ambianceImg}
            alt="Beachfront restaurant ambiance Koh Samui evening"
            className="rounded-sm shadow-gold w-full h-auto object-cover aspect-[4/3]"
            loading="lazy"
            width={800}
            height={600}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-primary font-body text-xs tracking-[0.3em] uppercase mb-4">
            Our Story
          </p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-light mb-6 leading-tight">
            An Unique Beachfront Dining Experience in{" "}
            <span className="text-gradient-gold">Koh Samui</span>
          </h2>
          <div className="divider-gold mb-6 !mx-0" />
          <p className="font-body text-sm text-foreground/80 leading-relaxed mb-4">
            Located in Bangpor, a scenic 15-minute drive from Fisherman's Village, Cherish Samui Restaurant & Bar combines
            the best of Thai cuisine, fresh seafood, and Western flavors
            in a stunning beachfront setting. Born from a passion for exceptional
            food and the island's natural beauty, our restaurant was created to
            offer guests a dining experience unlike any other on Koh Samui.
          </p>
          <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
            We are more than just a restaurant in Koh Samui — we create
            unforgettable moments. Whether you're enjoying a sunset dinner,
            celebrating a special occasion, or just looking for the best place
            to eat in Koh Samui, our atmosphere, food, and service make every
            visit special.
          </p>
          <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
            Our head chef draws inspiration from traditional Thai recipes passed
            down through generations, blending them with modern culinary
            techniques and the freshest ingredients sourced daily from local
            fishermen and organic farms across the island. Every dish tells a
            story of Koh Samui's rich culinary heritage.
          </p>
          <p className="font-body text-sm text-muted-foreground leading-relaxed">
            From the moment you step onto the soft sand and feel the warm
            ocean breeze, you'll understand why guests return to Cherish Restaurant & Bar Restaurant and Bar
            year after year. It's not just dinner — it's an experience that
            captures the magic of beachfront dining in Koh Samui.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 mt-8">
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
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;

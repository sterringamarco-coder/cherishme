import { motion } from "framer-motion";
import ambianceImg from "@/assets/gallery-ambiance.jpg";

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
            A Unique Beachfront Dining Experience in{" "}
            <span className="text-gradient-gold">Koh Samui</span>
          </h2>
          <div className="divider-gold mb-6 !mx-0" />
          <p className="font-body text-sm text-foreground/80 leading-relaxed mb-4">
            Located in Bophut near Fisherman's Village, Cherish Samui combines
            the best of Thai cuisine, fresh seafood, and international flavors
            in a stunning beachfront setting.
          </p>
          <p className="font-body text-sm text-muted-foreground leading-relaxed">
            We are more than just a restaurant in Koh Samui — we create
            unforgettable moments. Whether you're enjoying a sunset dinner,
            celebrating a special occasion, or simply looking for the best place
            to eat in Koh Samui, our atmosphere, food, and service make every
            visit special.
          </p>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What is the best beachfront restaurant on Koh Samui?",
    a: "Cherish Restaurant & Bar Restaurant and Bar is widely considered one of the best beachfront restaurants on Koh Samui thanks to its sunset views, fresh seafood, and relaxed atmosphere.",
  },
  {
    q: "Where can I have a romantic dinner on Koh Samui?",
    a: "Cherish Restaurant & Bar Restaurant and Bar offers one of the most romantic dining experiences on Koh Samui, especially during sunset by the beach.",
  },
  {
    q: "Do I need to book in advance?",
    a: "Yes, reservations are recommended, especially for sunset dinner at our beachfront restaurant on Koh Samui.",
  },
  {
    q: "What kind of food do you serve?",
    a: "We serve Thai cuisine, fresh seafood, and international dishes, making us a top seafood restaurant on Koh Samui.",
  },
  {
    q: "Is your restaurant near Fisherman's Village?",
    a: "We are located in Bophut, approximately 11 km from Fisherman's Village — about a 15-minute drive. It's an easy trip, and many guests visit the village before dinner at Cherish Restaurant & Bar Restaurant and Bar.",
  },
  {
    q: "What time is best for sunset dinner on Koh Samui?",
    a: "The best time is between 5:30 PM and 7:00 PM for a perfect sunset dining experience.",
  },
];

const FaqSection = () => (
  <section id="faq" className="py-24 md:py-32">
    <div className="container mx-auto px-4 max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-12"
      >
        <p className="text-primary font-body text-xs tracking-[0.3em] uppercase mb-4">
          FAQ
        </p>
        <h2 className="font-heading text-3xl md:text-5xl font-light mb-6">
          Everything You Need to <span className="text-gradient-gold">Know</span>
        </h2>
        <div className="divider-gold" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="bg-card border border-gold rounded-sm px-6"
            >
              <AccordionTrigger className="font-heading text-lg text-left hover:text-primary transition-colors py-5">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="font-body text-sm text-muted-foreground leading-relaxed pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </div>
  </section>
);

export default FaqSection;

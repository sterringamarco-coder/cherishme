import { motion } from "framer-motion";
import { PartyPopper, Heart, Users, Sparkles } from "lucide-react";

const events = [
  {
    icon: PartyPopper,
    title: "Birthday Celebrations",
    desc: "Make your birthday unforgettable with a private beachfront dinner under the stars. Our team arranges personalized decorations, a custom cake, and a dedicated dining area right on the sand — the most magical birthday venue in Koh Samui.",
  },
  {
    icon: Heart,
    title: "Weddings & Proposals",
    desc: "Say 'I do' or pop the question with the golden Koh Samui sunset as your backdrop. Cherish Restaurant & Bar Restaurant and Bar hosts intimate beach weddings and romantic proposals with candlelit setups, flowers, and bespoke menus crafted for your special moment.",
  },
  {
    icon: Users,
    title: "Private Group Dining",
    desc: "Hosting a family reunion, corporate dinner, or friends' getaway? Our beachfront restaurant in Bophut offers flexible group arrangements with tailored menus, ensuring every guest enjoys a memorable evening by the sea.",
  },
  {
    icon: Sparkles,
    title: "Anniversary & Special Occasions",
    desc: "Celebrate milestones in the most romantic setting Koh Samui has to offer. From intimate candlelit tables for two to curated tasting menus, we create experiences that turn anniversaries and celebrations into cherished memories.",
  },
];

const EventsSection = () => (
  <section id="events" className="py-24 md:py-32">
    <div className="container mx-auto px-4 max-w-5xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-6"
      >
        <p className="text-primary font-body text-xs tracking-[0.3em] uppercase mb-4">
          Celebrate With Us
        </p>
        <h2 className="font-heading text-3xl md:text-5xl font-light mb-6">
          The Perfect Venue for{" "}
          <span className="text-gradient-gold">Events & Celebrations</span>{" "}
          on Koh Samui
        </h2>
        <div className="divider-gold mb-6" />
        <p className="font-body text-sm text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-4">
          Looking for the perfect event venue in Koh Samui? Cherish Samui Restaurant and Bar transforms
          birthdays, weddings or proposals, and private celebrations into extraordinary
          beachfront life time experiences. With the sound of the waves, a breathtaking sunset,
          and our dedicated events team, every occasion becomes truly unforgettable.
        </p>
        <p className="font-body text-sm text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-12">
          Whether you're planning an intimate dinner for two or a lively beach
          party for thirty, our Bangpor beachfront location — just 11 km from Fisherman's Village —
          offers the most atmospheric and versatile event space on the island. We
          handle every detail — from table styling & decorations, floral arrangements
          and live music or DJ performances to customized set menus, cocktail parties
          or extensive buffets and champagne toasts for up to 100 guests — so you
          and your family & friends can only focus on creating unforgettable
          memories that last a lifetime.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-8">
        {events.map((e, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className="bg-card border border-gold rounded-sm p-8 hover:shadow-gold transition-shadow duration-500"
          >
            <e.icon size={32} className="mb-4 text-primary" strokeWidth={1.2} />
            <h3 className="font-heading text-xl mb-2">{e.title}</h3>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              {e.desc}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="font-body text-sm text-muted-foreground max-w-2xl mx-auto leading-relaxed text-center mt-12"
      >
        To enquire about hosting your event at Cherish Restaurant & Bar Restaurant and Bar, please contact us
        directly or use our reservation form below. We recommend booking at least
        two weeks in advance for private events, especially during Koh Samui's
        peak season from December to March.
      </motion.p>
    </div>
  </section>
);

export default EventsSection;

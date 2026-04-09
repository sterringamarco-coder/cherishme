import { motion } from "framer-motion";

const ReservationSection = () => (
  <section id="reservation" className="py-24 md:py-32 bg-gradient-warm relative overflow-hidden">
    <div className="absolute inset-0 opacity-5">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-accent blur-[100px]" />
    </div>

    <div className="container mx-auto px-4 max-w-2xl relative z-10 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <p className="text-primary font-body text-xs tracking-[0.3em] uppercase mb-4">
          Reservations
        </p>
        <h2 className="font-heading text-3xl md:text-5xl font-light mb-6">
          Reserve Your <span className="text-gradient-gold">Sunset Dinner</span>
        </h2>
        <div className="divider-gold mb-6" />
        <p className="font-body text-sm text-muted-foreground leading-relaxed mb-10">
          Book your table at Cherish Samui and enjoy one of the best sunset
          dining experiences in Koh Samui. Ideal for romantic dinners,
          celebrations, and unforgettable evenings by the beach.
        </p>

        <div className="bg-card border border-gold rounded-sm p-8 md:p-10 text-left space-y-6">
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="block font-body text-xs tracking-widest uppercase text-muted-foreground mb-2">
                Name
              </label>
              <input
                type="text"
                className="w-full bg-secondary border border-gold rounded-sm px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block font-body text-xs tracking-widest uppercase text-muted-foreground mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full bg-secondary border border-gold rounded-sm px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder="your@email.com"
              />
            </div>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            <div>
              <label className="block font-body text-xs tracking-widest uppercase text-muted-foreground mb-2">
                Date
              </label>
              <input
                type="date"
                className="w-full bg-secondary border border-gold rounded-sm px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
            <div>
              <label className="block font-body text-xs tracking-widest uppercase text-muted-foreground mb-2">
                Time
              </label>
              <select className="w-full bg-secondary border border-gold rounded-sm px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary">
                <option>5:30 PM (Sunset)</option>
                <option>6:00 PM</option>
                <option>6:30 PM</option>
                <option>7:00 PM</option>
                <option>7:30 PM</option>
                <option>8:00 PM</option>
                <option>8:30 PM</option>
              </select>
            </div>
            <div>
              <label className="block font-body text-xs tracking-widest uppercase text-muted-foreground mb-2">
                Guests
              </label>
              <select className="w-full bg-secondary border border-gold rounded-sm px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary">
                <option>2 Guests</option>
                <option>3 Guests</option>
                <option>4 Guests</option>
                <option>5 Guests</option>
                <option>6+ Guests</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block font-body text-xs tracking-widest uppercase text-muted-foreground mb-2">
              Special Requests
            </label>
            <textarea
              rows={3}
              className="w-full bg-secondary border border-gold rounded-sm px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary resize-none"
              placeholder="Anniversary, birthday, dietary requirements..."
            />
          </div>
          <button className="w-full bg-gradient-gold text-primary-foreground py-4 text-sm font-semibold tracking-widest uppercase rounded-sm hover:opacity-90 transition-opacity">
            Reserve Now
          </button>
          <p className="text-center font-body text-xs text-muted-foreground">
            ✨ Sunset tables (5:30–7:00 PM) are highly requested — book early!
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default ReservationSection;

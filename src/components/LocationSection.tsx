import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Mail } from "lucide-react";

const LocationSection = () => (
  <section id="location" className="py-24 md:py-32">
    <div className="container mx-auto px-4 max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-12"
      >
        <p className="text-primary font-body text-xs tracking-[0.3em] uppercase mb-4">
          Find Us
        </p>
        <h2 className="font-heading text-3xl md:text-5xl font-light mb-6">
          Beachfront Restaurant in{" "}
          <span className="text-gradient-gold">Bophut, Koh Samui</span>
        </h2>
        <div className="divider-gold mb-6" />
        <p className="font-body text-sm text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-3">
          Located in Bophut, just 11 km from Fisherman's Village (a quick 15-minute drive), Cherish Restaurant & Bar Restaurant and Bar
          is one of the most accessible and scenic beachfront restaurants in Koh
          Samui. Whether you're staying in Chaweng, Lamai, or Maenam, our
          restaurant is an easy drive or taxi ride away — and well worth the trip.
        </p>
        <p className="font-body text-sm text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          The Bophut area is known for its charming Fisherman's Village, a
          walkable street lined with boutique shops, art galleries, and local
          markets. After exploring the village, make your way to Cherish Restaurant & Bar
          for a sunset dinner you'll never forget. We're located directly on the
          beach, so you can walk barefoot from the sand straight to your table.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-sm overflow-hidden aspect-video"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.0!2d100.0!3d9.56!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sCherish+Samui!5e0!3m2!1sen!2sth!4v1"
            className="w-full h-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Cherish Restaurant & Bar restaurant location map Bophut Koh Samui"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="bg-card border border-gold rounded-sm p-8 flex flex-col justify-center space-y-6"
        >
          <div className="flex items-start gap-4">
            <MapPin size={20} className="text-primary mt-0.5 shrink-0" strokeWidth={1.5} />
            <div>
              <h3 className="font-heading text-lg mb-1">Address</h3>
              <p className="font-body text-sm text-muted-foreground">
                Bophut, Koh Samui, Surat Thani 84320, Thailand<br />
                11 km from Fisherman's Village (approx. 15-minute drive)
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Clock size={20} className="text-primary mt-0.5 shrink-0" strokeWidth={1.5} />
            <div>
              <h3 className="font-heading text-lg mb-1">Opening Hours</h3>
              <p className="font-body text-sm text-muted-foreground">
                Daily: 11:00 AM – 11:00 PM<br />
                Sunset Dinner: 5:30 PM – 7:00 PM (recommended)
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Phone size={20} className="text-primary mt-0.5 shrink-0" strokeWidth={1.5} />
            <div>
              <h3 className="font-heading text-lg mb-1">Phone</h3>
              <p className="font-body text-sm text-muted-foreground">+66 80 249 4528</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Mail size={20} className="text-primary mt-0.5 shrink-0" strokeWidth={1.5} />
            <div>
              <h3 className="font-heading text-lg mb-1">Email</h3>
              <p className="font-body text-sm text-muted-foreground">info@cherishsamui.com</p>
            </div>
          </div>

          <div className="pt-4 border-t border-gold">
            <h3 className="font-heading text-lg mb-2">How to Get Here</h3>
            <ul className="font-body text-sm text-muted-foreground space-y-1 leading-relaxed">
              <li>• <strong>From Chaweng:</strong> 20-minute drive along the coastal road</li>
              <li>• <strong>From the Airport:</strong> 10-minute taxi or hotel transfer</li>
              <li>• <strong>From Lamai:</strong> 30-minute scenic coastal drive</li>
              <li>• <strong>Parking:</strong> Free parking available nearby</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default LocationSection;

import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";

const pages = Array.from({ length: 30 }, (_, i) => `/menu/page-${String(i + 1).padStart(2, "0")}.jpg`);

const Menu = () => (
  <>
    <Navbar />
    <main className="min-h-screen bg-background pt-28 pb-20">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-10">
          <p className="text-primary font-body text-xs tracking-[0.3em] uppercase mb-4">
            Our Menu
          </p>
          <h1 className="font-heading text-4xl md:text-5xl font-light mb-6">
            <span className="text-gradient-gold">Cherish Restaurant</span>
          </h1>
          <div className="divider-gold mb-8 mx-auto" />
          <Link
            to="/#menu"
            className="inline-flex items-center gap-2 font-body text-sm tracking-[0.2em] uppercase text-primary border border-primary px-6 py-3 hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Our Menu
          </Link>
        </div>

        <div className="flex flex-col gap-6 md:gap-8">
          {pages.map((src, i) => (
            <img
              key={src}
              src={src}
              alt={`Cherish Restaurant menu page ${i + 1}`}
              className="w-full h-auto rounded-md shadow-elegant"
              loading={i < 2 ? "eager" : "lazy"}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/#menu"
            className="inline-flex items-center gap-2 font-body text-sm tracking-[0.2em] uppercase text-primary border border-primary px-6 py-3 hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Our Menu
          </Link>
        </div>
      </div>
    </main>
    <FooterSection />
  </>
);

export default Menu;

import { Link } from "react-router-dom";

const pages = Array.from({ length: 30 }, (_, i) => `/menu/page-${String(i + 1).padStart(2, "0")}.jpg`);

const Menu = () => (
  <main className="min-h-screen bg-background py-12 md:py-20">
    <div className="container mx-auto px-4 max-w-5xl">
      <div className="text-center mb-12">
        <p className="text-primary font-body text-xs tracking-[0.3em] uppercase mb-4">
          Our Menu
        </p>
        <h1 className="font-heading text-4xl md:text-5xl font-light mb-6">
          <span className="text-gradient-gold">Cherish Restaurant</span>
        </h1>
        <div className="divider-gold mb-6 mx-auto" />
        <Link
          to="/"
          className="font-body text-sm text-primary hover:underline tracking-wider uppercase"
        >
          ← Back to Home
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
    </div>
  </main>
);

export default Menu;

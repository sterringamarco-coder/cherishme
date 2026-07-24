import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ribs from "@/assets/dish-ribs.jpg";
import salmonBowl from "@/assets/dish-salmon-bowl.jpg";
import salmonToast from "@/assets/dish-salmon-toast.jpg";
import avocadoSalmon from "@/assets/dish-avocado-salmon.jpg";
import surfTurf from "@/assets/dish-surf-turf.jpg";
import breakfastBowl from "@/assets/dish-breakfast-bowl.jpg";
import scallops from "@/assets/dish-scallops.jpg";
import quinoaSalad from "@/assets/dish-quinoa-salad.jpg";
import eggsBenedict from "@/assets/dish-eggs-benedict.jpg";
import chickenPlate from "@/assets/dish-chicken-plate.jpg";
import slowBraisedBeef from "@/assets/slow-braised-beef.jpg.asset.json";
import { assetUrl } from "@/lib/assetUrl";

const dishes = [
  { src: assetUrl(slowBraisedBeef), alt: "Slow braised beef with mashed potatoes and edamame" },
  { src: surfTurf, alt: "Surf and turf steak with shrimp" },
  { src: ribs, alt: "Slow-cooked BBQ pork ribs" },
  { src: scallops, alt: "Seared scallops with citrus glaze" },
  { src: eggsBenedict, alt: "Eggs Benedict with smoked salmon" },
  { src: salmonBowl, alt: "Smoked salmon and avocado bowl" },
  { src: avocadoSalmon, alt: "Avocado toast with smoked salmon" },
  { src: salmonToast, alt: "Scrambled egg and salmon toast" },
  { src: breakfastBowl, alt: "Mediterranean breakfast bowl" },
  { src: quinoaSalad, alt: "Grilled chicken quinoa salad" },
  { src: chickenPlate, alt: "Grilled chicken with roasted vegetables" },
];

const DishesCarousel = () => {
  const autoplay = useRef(Autoplay({ delay: 3500, stopOnInteraction: false }));

  return (
    <section className="py-20 bg-background" aria-label="Signature dishes gallery">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-primary font-body text-xs tracking-[0.35em] uppercase mb-4">
            A Taste of Cherish
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-light">
            Signature <span className="text-gradient-gold">Dishes</span>
          </h2>
        </div>

        <Carousel
          opts={{ loop: true, align: "start" }}
          plugins={[autoplay.current]}
          className="max-w-6xl mx-auto"
        >
          <CarouselContent>
            {dishes.map((d, i) => (
              <CarouselItem
                key={i}
                className="md:basis-1/2 lg:basis-1/3"
              >
                <div className="overflow-hidden rounded-sm group">
                  <img
                    src={d.src}
                    alt={d.alt}
                    loading="lazy"
                    className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default DishesCarousel;

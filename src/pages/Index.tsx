import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import DishesCarousel from "@/components/DishesCarousel";
import ReviewsSection from "@/components/ReviewsSection";
import AboutSection from "@/components/AboutSection";
import WhyUsSection from "@/components/WhyUsSection";
import EventsSection from "@/components/EventsSection";
import MenuSection from "@/components/MenuSection";
import GallerySection from "@/components/GallerySection";
import LocationSection from "@/components/LocationSection";
import ReservationSection from "@/components/ReservationSection";
import FaqSection from "@/components/FaqSection";
import FooterSection from "@/components/FooterSection";

const Index = () => (
  <>
    <Navbar />
    <main>
      <HeroSection />
      <DishesCarousel />
      <ReviewsSection />
      <AboutSection />
      <WhyUsSection />
      <EventsSection />
      <MenuSection />
      <GallerySection />
      <LocationSection />
      <ReservationSection />
      <FaqSection />
    </main>
    <FooterSection />
  </>
);

export default Index;

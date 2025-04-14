import TravelHero from "@/components/home/travel-hero";
import PopularDestinations from "@/components/home/popular-destinations";
import WhyChooseUs from "@/components/home/why-choose-us";
import FeaturedTours from "@/components/home/featured-tours";
import Testimonials from "@/components/home/testimonials";
import Newsletter from "@/components/home/newsletter";
import Footer from "@/components/home/footer";

export default function Home() {
  return (
    <main>
      <TravelHero />
      <PopularDestinations />
      <WhyChooseUs />
      <FeaturedTours />
      <Testimonials />
      <Newsletter />
    </main>
  );
}

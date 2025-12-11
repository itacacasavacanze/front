import { Navigation } from "../components/Navigation";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { RoomsSection } from "../components/RoomsSection";
import { AvailabilityCalendar } from "../components/AvailabilityCalendar";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <RoomsSection />
        <AvailabilityCalendar />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

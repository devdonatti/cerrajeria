import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import ContactFooter from "../components/ContactFooter";
import HeroSlider from "../components/HeroSlider";
import FloatingButtons from "../components/FloatingButtons";

export default function LandingPage() {
  return (
    <div className="min-h-screen w-screen bg-black text-white overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <HeroSlider />
        <Services />
      </main>
      <ContactFooter />
      <FloatingButtons /> {/* 👈 Botones flotantes */}
    </div>
  );
}

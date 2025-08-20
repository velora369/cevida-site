import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}

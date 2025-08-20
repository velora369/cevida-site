import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import BenefitsSection from "@/components/BenefitsSection";
import ServicesSection from "@/components/ServicesSection";
import ResourcesSection from "@/components/ResourcesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingPlansSection from "@/components/PricingPlansSection";
import FaqSection from "@/components/FaqSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutSection />
      <BenefitsSection />
      <ServicesSection />
      <ResourcesSection />
      <TestimonialsSection />
      <PricingPlansSection />
      <FaqSection />
      <ContactSection />
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}

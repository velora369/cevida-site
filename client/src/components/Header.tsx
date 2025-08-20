import { useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}
      data-testid="header"
    >
      <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Spacer for left side */}
        <div className="flex-1"></div>
        
        {/* Navigation and Logo */}
        <div className="flex items-center space-x-8">
          <ul className="hidden md:flex items-center space-x-8">
            <li>
              <button 
                onClick={() => scrollToSection('inicio')}
                className="text-gray-700 hover:text-clinic-red transition-colors font-medium"
                data-testid="nav-inicio"
              >
                Início
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('quem-somos')}
                className="text-gray-700 hover:text-clinic-red transition-colors font-medium"
                data-testid="nav-quem-somos"
              >
                Quem Somos
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('especialidades')}
                className="text-gray-700 hover:text-clinic-red transition-colors font-medium"
                data-testid="nav-especialidades"
              >
                Especialidades
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('contato')}
                className="text-gray-700 hover:text-clinic-red transition-colors font-medium"
                data-testid="nav-contato"
              >
                Contato
              </button>
            </li>
          </ul>
          <img 
            src="https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/08/logo.png" 
            alt="CEVIDA Diagnósticos Logo" 
            className="h-12 w-auto"
            data-testid="logo"
          />
        </div>
        
        {/* WhatsApp CTA and Mobile Menu Button */}
        <div className="flex-1 flex justify-end items-center space-x-4">
          <a 
            href="https://wa.me/5593992318885" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-clinic-red text-white px-6 py-2 rounded-full hover:bg-clinic-red-dark transition-colors font-medium text-sm md:text-base"
            data-testid="header-whatsapp-button"
          >
            <i className="fab fa-whatsapp mr-2"></i>
            {isMobile ? "WhatsApp" : "Agende no WhatsApp"}
          </a>
          
          {/* Mobile menu button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-700 p-2"
            data-testid="mobile-menu-button"
          >
            <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
          </button>
        </div>
      </nav>
      
      {/* Mobile Menu */}
      <div className={`md:hidden bg-white border-t transition-all duration-300 ${
        mobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <div className="container mx-auto px-4 py-4">
          <ul className="space-y-4">
            <li>
              <button 
                onClick={() => scrollToSection('inicio')}
                className="block w-full text-left text-gray-700 hover:text-clinic-red transition-colors font-medium py-2"
                data-testid="mobile-nav-inicio"
              >
                Início
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('quem-somos')}
                className="block w-full text-left text-gray-700 hover:text-clinic-red transition-colors font-medium py-2"
                data-testid="mobile-nav-quem-somos"
              >
                Quem Somos
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('especialidades')}
                className="block w-full text-left text-gray-700 hover:text-clinic-red transition-colors font-medium py-2"
                data-testid="mobile-nav-especialidades"
              >
                Especialidades
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('contato')}
                className="block w-full text-left text-gray-700 hover:text-clinic-red transition-colors font-medium py-2"
                data-testid="mobile-nav-contato"
              >
                Contato
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

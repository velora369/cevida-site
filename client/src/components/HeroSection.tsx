import { useEffect, useRef } from "react";
import { StarRatingIcon, MedicalCheckIcon, ExperienceIcon, HeartCareIcon } from "./CustomIcons";

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="inicio" 
      ref={heroRef}
      className="relative pt-20 pb-16 md:pt-24 md:pb-20 overflow-hidden bg-gradient-to-br from-white via-gray-50/50 to-clinic-gray/30 min-h-screen flex items-center"
      data-testid="hero-section"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-clinic-red rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 opacity-0 translate-y-8 transition-all duration-1000 ease-out" style={{animation: 'fadeInUp 1s ease-out forwards'}}>
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight" data-testid="hero-title">
                <span className="bg-gradient-to-r from-clinic-red via-red-500 to-red-600 bg-clip-text text-transparent">
                  CEVIDA
                </span>
                <br />
                <span className="text-gray-800">Diagnósticos</span>
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed font-light" data-testid="hero-subtitle">
                Exames de imagem com precisão e confiança em Santarém-PA
              </p>
            </div>
            
            {/* Features with modern icons */}
            <div className="space-y-6">
              {[
                {
                  icon: <MedicalCheckIcon size={24} className="text-white" />,
                  text: "Médico especialista titulado pelo CBR"
                },
                {
                  icon: <ExperienceIcon size={24} className="text-white" />,
                  text: "Tecnologia de ponta nos exames"
                },
                {
                  icon: <HeartCareIcon size={24} className="text-white" />,
                  text: "Resultados com precisão e agilidade"
                }
              ].map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-start space-x-4 opacity-0 translate-x-8 animate-on-scroll"
                  style={{animation: `slideInLeft 1s ${index * 0.2 + 0.5}s cubic-bezier(0.4, 0, 0.2, 1) forwards`}}
                >
                  <div className="flex-shrink-0 bg-gradient-to-br from-clinic-red via-red-500 to-red-600 text-white w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg shadow-clinic-red/30 hover-scale hover:shadow-xl">
                    {feature.icon}
                  </div>
                  <span className="flex-1 text-gray-700 dark:text-gray-200 text-lg font-medium leading-relaxed pt-2">{feature.text}</span>
                </div>
              ))}
            </div>
            
            {/* CTA Button */}
            <div className="pt-4">
              <a 
                href="https://wa.me/5593992318885?text=Olá! Gostaria de agendar um exame na CEVIDA Diagnósticos." 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center bg-gradient-to-r from-clinic-red via-red-500 to-red-600 text-white px-8 py-4 rounded-full hover:scale-105 hover:shadow-2xl hover:shadow-clinic-red/30 transition-all duration-300 font-semibold text-lg group opacity-0 translate-y-4"
                style={{animation: 'fadeInUp 1s 1s ease-out forwards'}}
                data-testid="hero-cta-button"
              >
                <svg className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488z"/>
                </svg>
                Agende seu exame pelo WhatsApp
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Enhanced Image Section */}
          <div className="relative opacity-0 translate-y-8 transition-all duration-1000 ease-out" style={{animation: 'fadeInUp 1s 0.5s ease-out forwards'}}>
            {/* Main Image Container */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-clinic-red via-red-500 to-red-600 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500 hidden md:block"></div>
              <div className="relative">
                <img 
                  src="https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/08/hero-img.jpeg" 
                  alt="Equipamentos modernos de diagnóstico por imagem" 
                  className="rounded-2xl w-full h-auto shadow-2xl shadow-clinic-red/20 group-hover:scale-105 transition-all duration-700"
                  data-testid="hero-image"
                />
              </div>
            </div>
            
            {/* Doctor Card with Glassmorphism */}
            <div className="absolute -bottom-8 -left-8 bg-white/90 backdrop-blur-md p-6 rounded-3xl shadow-2xl border border-white/50 hover:scale-105 transition-transform duration-300 hidden lg:block">
              <div className="flex items-center space-x-4">
                <div className="bg-gradient-to-r from-clinic-red to-red-500 text-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg shadow-clinic-red/25">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-gray-800 text-lg">Dr. Luiz Carlos</p>
                  <p className="text-clinic-red font-medium">Radiologista CBR</p>
                  <p className="text-gray-600 text-sm">+15 anos experiência</p>
                  <div className="mt-2 space-y-1 text-xs text-gray-600">
                    <p>CRM: <a href="https://cremepa.org.br/busca-medicos" target="_blank" rel="noopener noreferrer" className="text-clinic-red hover:text-red-600 font-medium underline hover:no-underline transition-colors duration-200">9132/PA</a></p>
                    <p>RQE Nº: <a href="https://cremepa.org.br/busca-medicos" target="_blank" rel="noopener noreferrer" className="text-clinic-red hover:text-red-600 font-medium underline hover:no-underline transition-colors duration-200">2899</a></p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Doctor Card for Mobile */}
            <div className="mt-16 bg-white p-6 rounded-3xl shadow-2xl border border-gray-100 hover:scale-105 transition-transform duration-300 lg:hidden relative z-10">
              <div className="flex items-center space-x-4">
                <div className="bg-gradient-to-r from-clinic-red to-red-500 text-white w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg shadow-clinic-red/25">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-gray-800 text-lg">Dr. Luiz Carlos</p>
                  <p className="text-clinic-red font-medium">Radiologista CBR</p>
                  <p className="text-gray-600 text-sm">+15 anos experiência</p>
                  <div className="mt-2 space-y-1 text-xs text-gray-600">
                    <p>CRM: <a href="https://cremepa.org.br/busca-medicos" target="_blank" rel="noopener noreferrer" className="text-clinic-red hover:text-red-600 font-medium underline hover:no-underline transition-colors duration-200">9132/PA</a></p>
                    <p>RQE Nº: <a href="https://cremepa.org.br/busca-medicos" target="_blank" rel="noopener noreferrer" className="text-clinic-red hover:text-red-600 font-medium underline hover:no-underline transition-colors duration-200">2899</a></p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Stats Cards */}

          </div>
        </div>
        
        
      </div>
    </section>
  );
}
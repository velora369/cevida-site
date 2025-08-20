import { useEffect, useRef } from "react";

export default function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.animate-on-scroll');
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('animate-fade-in-up');
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const mainServices = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
        </svg>
      ),
      title: "Raio-X Digital",
      description: "Alta definição, panorâmico e coluna total com tecnologia digital avançada",
      whatsappText: "Gostaria de agendar um Raio-X Digital",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14,2 14,8 20,8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10,9 9,9 8,9" />
        </svg>
      ),
      title: "Ultrassonografia Avançada",
      description: "Geral, Doppler, obstétrica, morfológica e músculo-esquelética",
      whatsappText: "Gostaria de agendar uma Ultrassonografia",
      gradient: "from-clinic-red to-red-600"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <path d="M5.5 8.5L9 12L18.5 2.5" />
          <path d="M12 12C12 17 8 21 3 21L4 16C4 13 6 11 9 11" />
          <path d="M21 12C21 17 17 21 12 21L13 16C13 13 15 11 18 11" />
        </svg>
      ),
      title: "Densitometria Óssea",
      description: "Coluna, fêmur e corpo total para diagnóstico de osteoporose",
      whatsappText: "Gostaria de agendar uma Densitometria Óssea",
      gradient: "from-emerald-500 to-emerald-600"
    }
  ];

  const allServices = [
    "Raio-X Digital (alta definição, panorâmico e coluna total)",
    "Ultrassonografia geral e avançada",
    "Densitometria Óssea (coluna, fêmur e corpo total)",
    "PAAF de Tireóide",
    "Alcoolização de nódulos tireoidianos",
    "Biópsias guiadas por ultrassom",
    "Histerossonografia",
    "Histerossalpingografia"
  ];

  return (
    <section 
      id="especialidades" 
      ref={sectionRef}
      className="py-16 md:py-24 bg-gradient-to-b from-gray-50/50 to-white relative overflow-hidden" 
      data-testid="services-section"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-72 h-72 bg-clinic-red rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-400 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 animate-on-scroll opacity-0">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6" data-testid="services-title">
            Nossos <span className="bg-gradient-to-r from-clinic-red to-red-500 bg-clip-text text-transparent">Exames</span>
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-clinic-red to-red-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Oferecemos uma ampla gama de exames de diagnóstico por imagem com equipamentos modernos e tecnologia de ponta
          </p>
        </div>

        {/* Main Services Highlight */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-20">
          {mainServices.map((service, index) => (
            <div 
              key={index}
              className="group relative animate-on-scroll opacity-0"
              data-testid={`main-service-${index}`}
            >
              {/* Glassmorphism Card */}
              <div className="absolute -inset-1 bg-gradient-to-r from-clinic-red via-red-500 to-red-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-2xl border border-white/50 h-full hover:scale-105 transition-all duration-500">
                <div className="text-center">
                  {/* Icon */}
                  <div className={`bg-gradient-to-r ${service.gradient} text-white w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:rotate-12 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  
                  {/* CTA */}
                  <a 
                    href={`https://wa.me/5593992318885?text=${encodeURIComponent(service.whatsappText)}`}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-clinic-red hover:text-red-600 font-semibold text-lg group-hover:scale-105 transition-transform duration-300"
                    data-testid={`service-schedule-${index}`}
                  >
                    Agendar Agora
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Complete Services List */}
        <div className="animate-on-scroll opacity-0">
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-clinic-red via-red-500 to-red-600 rounded-3xl blur-xl opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
            <div className="relative bg-white/80 backdrop-blur-sm p-12 rounded-3xl shadow-2xl border border-white/50">
              <h3 className="text-3xl font-bold text-gray-800 mb-12 text-center" data-testid="all-services-title">
                Todos os Nossos Serviços
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  {allServices.slice(0, 4).map((service, index) => (
                    <div key={index} className="flex items-start space-x-4 group" data-testid={`service-item-${index}`}>
                      <div className="bg-gradient-to-r from-clinic-red to-red-500 text-white w-10 h-10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700 text-lg leading-relaxed pt-1 flex-1">{service}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-6">
                  {allServices.slice(4).map((service, index) => (
                    <div key={index + 4} className="flex items-start space-x-4 group" data-testid={`service-item-${index + 4}`}>
                      <div className="bg-gradient-to-r from-clinic-red to-red-500 text-white w-10 h-10 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700 text-lg leading-relaxed pt-1 flex-1">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
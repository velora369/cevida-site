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
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 9a2 2 0 00-2 2v2a2 2 0 002 2m0 0h14m0 0v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-2z" />
        </svg>
      ),
      title: "Raio-X Digital",
      description: "Alta definição, panorâmico e coluna total com tecnologia digital avançada",
      whatsappText: "Gostaria de agendar um Raio-X Digital",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: "Ultrassonografia Avançada",
      description: "Geral, Doppler, obstétrica, morfológica e músculo-esquelética",
      whatsappText: "Gostaria de agendar uma Ultrassonografia",
      gradient: "from-clinic-red to-red-600"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
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
      className="py-24 bg-gradient-to-b from-gray-50/50 to-white relative overflow-hidden" 
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
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
                    <div key={index} className="flex items-center space-x-4 group" data-testid={`service-item-${index}`}>
                      <div className="bg-gradient-to-r from-clinic-red to-red-500 text-white w-8 h-8 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700 text-lg">{service}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-6">
                  {allServices.slice(4).map((service, index) => (
                    <div key={index + 4} className="flex items-center space-x-4 group" data-testid={`service-item-${index + 4}`}>
                      <div className="bg-gradient-to-r from-clinic-red to-red-500 text-white w-8 h-8 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700 text-lg">{service}</span>
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
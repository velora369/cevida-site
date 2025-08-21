import { useEffect, useRef, useState } from "react";

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
          <circle cx="8" cy="6" r="3" />
          <path d="M8 9l3 3v6" />
          <path d="M11 12l5-1v7" />
          <circle cx="16" cy="18" r="3" />
          <circle cx="11" cy="18" r="2" />
        </svg>
      ),
      title: "Densitometria Óssea",
      description: "Coluna, fêmur e corpo total para diagnóstico de osteoporose",
      whatsappText: "Gostaria de agendar uma Densitometria Óssea",
      gradient: "from-emerald-500 to-emerald-600"
    }
  ];

  const [selectedService, setSelectedService] = useState<any>(null);

  const allServices = [
    {
      name: "Raio-X Digital (alta definição, panorâmico e coluna total)",
      title: "Raio-X Digital",
      description: "Exame de imagem que utiliza tecnologia digital avançada para diagnóstico preciso de estruturas ósseas e tecidos moles.",
      details: "Nossa tecnologia digital oferece imagens de alta definição com menor radiação. Realizamos raio-x de tórax, membros, coluna vertebral, panorâmico e muito mais.",
      whatsappText: "Gostaria de agendar um Raio-X Digital"
    },
    {
      name: "Ultrassonografia geral e avançada",
      title: "Ultrassonografia",
      description: "Exame não invasivo que utiliza ondas sonoras para visualizar órgãos internos e estruturas do corpo.",
      details: "Realizamos ultrassom abdominal, pélvico, obstétrico, morfológico, Doppler vascular, tireoide, mama, próstata e muito mais. Equipamentos de última geração.",
      whatsappText: "Gostaria de agendar uma Ultrassonografia"
    },
    {
      name: "Densitometria Óssea (coluna, fêmur e corpo total)",
      title: "Densitometria Óssea",
      description: "Exame essencial para diagnóstico da osteoporose e avaliação da densidade mineral óssea.",
      details: "Avaliação precisa da densidade óssea na coluna lombar, fêmur e corpo total. Fundamental para prevenção e acompanhamento de doenças ósseas.",
      whatsappText: "Gostaria de agendar uma Densitometria Óssea"
    },
    {
      name: "PAAF de Tireóide",
      title: "PAAF de Tireóide",
      description: "Punção aspirativa por agulha fina para avaliação de nódulos tireoidianos.",
      details: "Procedimento minimamente invasivo guiado por ultrassom para coleta de material celular de nódulos da tireóide, auxiliando no diagnóstico diferencial.",
      whatsappText: "Gostaria de agendar uma PAAF de Tireóide"
    },
    {
      name: "Alcoolização de nódulos tireoidianos",
      title: "Alcoolização de Nódulos",
      description: "Tratamento minimamente invasivo para nódulos tireoidianos císticos.",
      details: "Procedimento realizado com guia ultrassonográfica para tratamento de nódulos císticos benignos da tireóide, oferecendo alternativa não cirúrgica.",
      whatsappText: "Gostaria de agendar Alcoolização de nódulos tireoidianos"
    },
    {
      name: "Biópsias guiadas por ultrassom",
      title: "Biópsias Guiadas",
      description: "Coleta precisa de material para análise histopatológica com orientação ultrassonográfica.",
      details: "Procedimentos de biópsia em diversos órgãos realizados com precisão através da orientação ultrassonográfica, garantindo segurança e eficácia.",
      whatsappText: "Gostaria de agendar uma Biópsia guiada"
    },
    {
      name: "Histerossonografia",
      title: "Histerossonografia",
      description: "Avaliação detalhada da cavidade uterina através de ultrassom com contraste.",
      details: "Exame especializado que permite avaliação precisa do endométrio e cavidade uterina, auxiliando no diagnóstico de alterações ginecológicas.",
      whatsappText: "Gostaria de agendar uma Histerossonografia"
    },
    {
      name: "Histerossalpingografia",
      title: "Histerossalpingografia",
      description: "Exame radiológico para avaliação das trompas de falópio e cavidade uterina.",
      details: "Procedimento com contraste radiológico para investigação de causas de infertilidade e avaliação da permeabilidade tubária.",
      whatsappText: "Gostaria de agendar uma Histerossalpingografia"
    }
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {allServices.map((service, index) => (
                  <div key={index} className="flex items-center justify-between space-x-4 group bg-white/50 p-4 rounded-2xl border border-gray-100 hover:border-clinic-red-light transition-all duration-300 min-h-[80px]" data-testid={`service-item-${index}`}>
                    <span className="text-gray-700 text-lg leading-relaxed flex-1 py-2">{service.name}</span>
                    <button
                      onClick={() => setSelectedService(service)}
                      className="bg-clinic-red text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-red-600 transition-colors duration-300 whitespace-nowrap flex-shrink-0"
                      data-testid={`service-learn-more-${index}`}
                    >
                      Saiba Mais
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Service Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setSelectedService(null)}>
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="relative">
              {/* Modal Header */}
              <div className="bg-gradient-to-r from-clinic-red to-red-600 text-white p-6 rounded-t-3xl">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{selectedService.title}</h3>
                    <p className="text-red-100 text-lg">{selectedService.description}</p>
                  </div>
                  <button
                    onClick={() => setSelectedService(null)}
                    className="text-white hover:text-red-200 transition-colors duration-300"
                    data-testid="close-modal"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-8">
                <div className="mb-8">
                  <h4 className="text-xl font-semibold text-gray-800 mb-4">Sobre o Exame</h4>
                  <p className="text-gray-600 text-lg leading-relaxed">{selectedService.details}</p>
                </div>

                {/* CTA Button */}
                <div className="flex justify-center">
                  <a
                    href={`https://wa.me/5593992318885?text=${encodeURIComponent(selectedService.whatsappText)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-clinic-red via-red-500 to-red-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:scale-105 hover:shadow-xl hover:shadow-clinic-red/25 transition-all duration-300 inline-flex items-center group"
                    data-testid="modal-schedule-button"
                  >
                    <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488z"/>
                    </svg>
                    Agendar Agora
                    <svg className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
import { useEffect, useRef, useState } from "react";

export default function AboutSection() {
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
              }, index * 200);
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


  const stats = [
    {
      number: "20+",
      label: "Anos de Experiência",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12,6 12,12 16,14" />
        </svg>
      )
    },
    {
      number: "CBR",
      label: "Especialista Titulado",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      )
    },
    {
      number: "1000+",
      label: "Exames Realizados",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <path d="M3 3v18h18" />
          <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" />
        </svg>
      )
    }
  ];

  return (
    <section 
      id="quem-somos" 
      ref={sectionRef}
      className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50/50 relative overflow-hidden" 
      data-testid="about-section"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-clinic-red rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-300 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 animate-on-scroll opacity-0">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6" data-testid="about-title">
            Quem <span className="bg-gradient-to-r from-clinic-red to-red-500 bg-clip-text text-transparent">Somos</span>
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-clinic-red to-red-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Conheça nossa história de dedicação e excelência em diagnóstico por imagem
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto mb-12 md:mb-20">
          {/* Content */}
          <div className="space-y-8 animate-on-scroll opacity-0">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-800" data-testid="doctor-name">
                Dr. Luiz Carlos Cavaleiro de Macedo Júnior
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg" data-testid="doctor-bio">
                Dr. Luiz Carlos Cavaleiro de Macedo Júnior é médico radiologista, com mais de 20 anos de atuação em diagnóstico por imagem. Especialista titulado pelo Colégio Brasileiro de Radiologia, é responsável técnico da CEVIDA Diagnósticos em Santarém-PA, oferecendo exames de alta precisão em ultrassonografia, raio-X e densitometria óssea.
              </p>
            </div>

            {/* Key Features */}
            <div className="space-y-6">
              {[
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  title: "Orientação Clara",
                  description: "Explicação detalhada de cada procedimento e resultado"
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  ),
                  title: "Equipe Especializada",
                  description: "Profissionais qualificados em constante atualização e aperfeiçoamento"
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  ),
                  title: "Estrutura Moderna",
                  description: "Ambiente confortável e acolhedor com equipamentos de última geração"
                }
              ].map((feature, index) => (
                <div key={index} className="flex items-start space-x-4 group">
                  <div className="flex-shrink-0 bg-gradient-to-r from-clinic-red to-red-500 text-white w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg shadow-clinic-red/25 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-gray-800 mb-2 text-lg">{feature.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-white/50 text-center group hover:scale-105 transition-all duration-300 animate-on-scroll opacity-0"
              data-testid={`stat-${index}`}
            >
              <div className="bg-gradient-to-r from-clinic-red to-red-500 text-white w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-clinic-red/25 group-hover:rotate-12 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-4xl font-bold text-clinic-red mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
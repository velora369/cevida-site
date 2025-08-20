import { useEffect, useRef } from "react";

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
      number: "15+",
      label: "Anos de Experiência",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      number: "CBR",
      label: "Especialista Titulado",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      number: "1000+",
      label: "Exames Realizados",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
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
        
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-12 md:mb-20">
          {/* Content */}
          <div className="space-y-8 animate-on-scroll opacity-0">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-800" data-testid="doctor-name">
                Dr. Luiz Carlos Cavaleiro de Macedo Júnior
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg" data-testid="doctor-bio">
                Dr. Luiz Carlos Cavaleiro de Macedo Júnior é médico radiologista, com mais de 15 anos de atuação em diagnóstico por imagem. Especialista titulado pelo Colégio Brasileiro de Radiologia, é responsável técnico da CEVIDA Diagnósticos em Santarém-PA, oferecendo exames de alta precisão em ultrassonografia, raio-X e densitometria óssea.
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
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  ),
                  title: "Atendimento Humanizado",
                  description: "Cuidado personalizado com foco no bem-estar do paciente"
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  ),
                  title: "Tecnologia Avançada",
                  description: "Equipamentos de última geração para diagnósticos precisos"
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
          
          {/* Images */}
          <div className="grid grid-cols-1 gap-8 animate-on-scroll opacity-0">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-clinic-red via-red-500 to-red-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative bg-white/80 backdrop-blur-sm p-3 rounded-3xl shadow-2xl border border-white/50">
                <img 
                  src="https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/08/em-servico-2.jpg" 
                  alt="Dr. Luiz Carlos em atendimento médico" 
                  className="rounded-2xl w-full h-auto shadow-xl group-hover:scale-105 transition-transform duration-700"
                  data-testid="doctor-image-1"
                />
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-clinic-red via-red-500 to-red-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative bg-white/80 backdrop-blur-sm p-3 rounded-3xl shadow-2xl border border-white/50">
                <img 
                  src="https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/08/em-servico-1.jpg" 
                  alt="Dr. Luiz Carlos realizando exame de ultrassom" 
                  className="rounded-2xl w-full h-auto shadow-xl group-hover:scale-105 transition-transform duration-700"
                  data-testid="doctor-image-2"
                />
              </div>
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
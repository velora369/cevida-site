import { useEffect, useRef } from "react";
import { MedicalCheckIcon, ExperienceIcon, HeartCareIcon, InnovationIcon } from "./CustomIcons";

export default function ResourcesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const resources = [
    {
      icon: <MedicalCheckIcon size={40} className="text-clinic-red" />,
      title: "Ressonância Magnética",
      description: "Imagens detalhadas de alta precisão para diagnósticos complexos.",
      features: ["Alta resolução", "Exames rápidos", "Contraste quando necessário"],
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop&crop=center"
    },
    {
      icon: <ExperienceIcon size={40} className="text-clinic-red" />,
      title: "Tomografia Computadorizada",
      description: "Tecnologia avançada para visualização tridimensional completa.",
      features: ["Reconstrução 3D", "Baixa dosagem", "Resultados rápidos"],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop&crop=center"
    },
    {
      icon: <HeartCareIcon size={40} className="text-clinic-red" />,
      title: "Ultrassonografia",
      description: "Exames não invasivos com conforto e segurança total.",
      features: ["Tempo real", "Sem radiação", "Múltiplas aplicações"],
      image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=400&h=300&fit=crop&crop=center"
    },
    {
      icon: <InnovationIcon size={40} className="text-clinic-red" />,
      title: "Radiografia Digital",
      description: "Imagens digitais instantâneas com menor exposição à radiação.",
      features: ["Processamento rápido", "Baixa radiação", "Alta qualidade"],
      image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=400&h=300&fit=crop&crop=center"
    }
  ];

  return (
    <section 
      id="recursos" 
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-clinic-gray/50 to-white dark:from-gray-800/50 dark:to-gray-900"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <span className="inline-block px-4 py-2 bg-clinic-red text-white rounded-full text-sm font-semibold mb-4 hover-lift">
            Nossos Recursos
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 text-gradient">
            Tecnologia de Ponta
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Equipamentos modernos e tecnologia avançada para oferecer os melhores 
            resultados em diagnósticos por imagem.
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {resources.map((resource, index) => (
            <div
              key={index}
              className="animate-on-scroll hover-lift"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="glass-card p-8 group h-full">
                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Content Side */}
                  <div className="flex-1">
                    {/* Icon and Title */}
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-clinic-red-light to-clinic-red/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        {resource.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {resource.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      {resource.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-3">
                      {resource.features.map((feature, featureIndex) => (
                        <div 
                          key={featureIndex}
                          className="flex items-center gap-3"
                        >
                          <div className="w-2 h-2 bg-clinic-red rounded-full"></div>
                          <span className="text-gray-700 dark:text-gray-200 font-medium">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Image Side */}
                  <div className="lg:w-64">
                    <div className="relative overflow-hidden rounded-2xl group-hover:shadow-xl transition-shadow duration-300">
                      <img 
                        src={resource.image} 
                        alt={resource.title}
                        className="w-full h-48 lg:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-clinic-red/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center animate-on-scroll">
          <div className="glass-card p-8 md:p-12 bg-gradient-to-r from-clinic-red/5 to-red-500/5">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Precisa de um exame especializado?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
              Nossa equipe está pronta para oferecer o melhor atendimento e diagnóstico preciso.
            </p>
            <a
              href="https://wa.me/5593992318885?text=Olá! Gostaria de agendar um exame na CEVIDA Diagnósticos."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-3 text-lg px-8 py-4"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488z"/>
              </svg>
              Agendar Consulta
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
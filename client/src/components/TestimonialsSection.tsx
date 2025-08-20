import { useEffect, useRef } from "react";

export default function TestimonialsSection() {
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

  const testimonials = [
    {
      name: "Maria S.",
      text: "Atendimento excelente, exame rápido e laudo muito detalhado. Dr. Luiz Carlos é muito atencioso e explica tudo com clareza.",
      avatar: "https://ui-avatars.com/api/?name=Maria+S&background=ff283f&color=fff&size=150",
      rating: 5
    },
    {
      name: "João P.",
      text: "Equipamentos modernos e ambiente muito limpo. Fui muito bem atendido e o resultado saiu no mesmo dia. Recomendo!",
      avatar: "https://ui-avatars.com/api/?name=João+P&background=ff283f&color=fff&size=150",
      rating: 5
    },
    {
      name: "Carla A.",
      text: "Profissional experiente e cuidadoso. A ultrassonografia foi realizada com muita atenção e o laudo ficou pronto rapidamente.",
      avatar: "https://ui-avatars.com/api/?name=Carla+A&background=ff283f&color=fff&size=150",
      rating: 5
    },
    {
      name: "Roberto M.",
      text: "Clínica com excelente estrutura e atendimento humanizado. Dr. Luiz Carlos é um profissional muito competente.",
      avatar: "https://ui-avatars.com/api/?name=Roberto+M&background=ff283f&color=fff&size=150",
      rating: 5
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50/50 relative overflow-hidden" 
      data-testid="testimonials-section"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-clinic-red rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-amber-400 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 animate-on-scroll opacity-0">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6" data-testid="testimonials-title">
            O que nossos <span className="bg-gradient-to-r from-clinic-red to-red-500 bg-clip-text text-transparent">pacientes</span> dizem
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-clinic-red to-red-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Depoimentos reais de quem confia na nossa experiência e dedicação
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="group relative animate-on-scroll opacity-0"
              data-testid={`testimonial-${index}`}
            >
              {/* Glassmorphism Card */}
              <div className="absolute -inset-1 bg-gradient-to-r from-clinic-red via-red-500 to-red-600 rounded-3xl blur-xl opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
              <div className="relative bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-2xl border border-white/50 h-full hover:scale-105 transition-all duration-500">
                
                {/* Header */}
                <div className="flex items-center mb-6">
                  <div className="relative">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name} 
                      className="w-16 h-16 rounded-2xl shadow-lg ring-4 ring-white/50 group-hover:scale-110 transition-transform duration-300"
                      data-testid={`testimonial-avatar-${index}`}
                    />
                    <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-clinic-red to-red-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shadow-lg">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4 flex-1">
                    <h4 className="font-bold text-gray-800 text-lg" data-testid={`testimonial-name-${index}`}>
                      {testimonial.name}
                    </h4>
                    <div className="flex items-center space-x-1">
                      {[...Array(testimonial.rating)].map((_, starIndex) => (
                        <svg 
                          key={starIndex} 
                          className="w-5 h-5 text-yellow-400 group-hover:scale-110 transition-transform duration-300" 
                          fill="currentColor" 
                          viewBox="0 0 24 24"
                          data-testid={`testimonial-star-${index}-${starIndex}`}
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Quote */}
                <div className="relative mb-6">
                  <svg className="absolute -top-2 -left-2 w-8 h-8 text-clinic-red/20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                  </svg>
                  <p className="text-gray-600 leading-relaxed italic pl-6" data-testid={`testimonial-text-${index}`}>
                    "{testimonial.text}"
                  </p>
                </div>
                
                {/* Google Verification */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <svg className="w-5 h-5 text-blue-500 mr-2" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                    <span>Avaliação verificada</span>
                  </div>
                  <div className="text-xs text-gray-400 bg-gray-100/50 px-3 py-1 rounded-full">
                    Google Reviews
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-16 animate-on-scroll opacity-0">
          <div className="inline-flex items-center space-x-4 bg-white/80 backdrop-blur-sm px-8 py-4 rounded-full shadow-xl border border-white/50">
            <div className="flex items-center space-x-2">
              <div className="flex -space-x-2">
                {testimonials.slice(0, 3).map((testimonial, index) => (
                  <img 
                    key={index}
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-10 h-10 rounded-full border-2 border-white shadow-lg"
                  />
                ))}
              </div>
              <div className="text-left">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, index) => (
                    <svg key={index} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-gray-600">+100 avaliações 5 estrelas</p>
              </div>
            </div>
            <div className="h-8 w-px bg-gray-300"></div>
            <a 
              href="https://wa.me/5593992318885?text=Olá! Vi as avaliações e gostaria de agendar um exame na CEVIDA Diagnósticos."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-clinic-red to-red-500 text-white px-6 py-3 rounded-full hover:scale-105 transition-transform duration-300 font-semibold flex items-center space-x-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488z"/>
              </svg>
              <span>Agendar Agora</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Maria S.",
      text: "Atendimento excelente, exame rápido e laudo muito detalhado. Dr. Luiz Carlos é muito atencioso e explica tudo com clareza.",
      avatar: "https://ui-avatars.com/api/?name=Maria+S&background=ff283f&color=fff"
    },
    {
      name: "João P.",
      text: "Equipamentos modernos e ambiente muito limpo. Fui muito bem atendido e o resultado saiu no mesmo dia. Recomendo!",
      avatar: "https://ui-avatars.com/api/?name=João+P&background=ff283f&color=fff"
    },
    {
      name: "Carla A.",
      text: "Profissional experiente e cuidadoso. A ultrassonografia foi realizada com muita atenção e o laudo ficou pronto rapidamente.",
      avatar: "https://ui-avatars.com/api/?name=Carla+A&background=ff283f&color=fff"
    },
    {
      name: "Roberto M.",
      text: "Clínica com excelente estrutura e atendimento humanizado. Dr. Luiz Carlos é um profissional muito competente.",
      avatar: "https://ui-avatars.com/api/?name=Roberto+M&background=ff283f&color=fff"
    }
  ];

  return (
    <section className="py-20 bg-white" data-testid="testimonials-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4" data-testid="testimonials-title">
            O que nossos <span className="text-clinic-red">pacientes</span> dizem
          </h2>
          <div className="w-24 h-1 bg-clinic-red mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white border border-gray-200 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              data-testid={`testimonial-${index}`}
            >
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full mr-4"
                  data-testid={`testimonial-avatar-${index}`}
                />
                <div>
                  <h4 className="font-semibold text-gray-800" data-testid={`testimonial-name-${index}`}>
                    {testimonial.name}
                  </h4>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, starIndex) => (
                      <i key={starIndex} className="fas fa-star" data-testid={`testimonial-star-${index}-${starIndex}`}></i>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 mb-4" data-testid={`testimonial-text-${index}`}>
                "{testimonial.text}"
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <i className="fab fa-google text-blue-500 mr-2"></i>
                <span>Avaliação verificada pelo Google</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

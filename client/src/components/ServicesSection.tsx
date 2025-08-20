export default function ServicesSection() {
  const mainServices = [
    {
      icon: "fas fa-x-ray",
      title: "Raio-X Digital",
      description: "Alta definição, panorâmico e coluna total com tecnologia digital avançada",
      whatsappText: "Gostaria de agendar um Raio-X Digital"
    },
    {
      icon: "fas fa-heartbeat",
      title: "Ultrassonografia Avançada",
      description: "Geral, Doppler, obstétrica, morfológica e músculo-esquelética",
      whatsappText: "Gostaria de agendar uma Ultrassonografia"
    },
    {
      icon: "fas fa-bone",
      title: "Densitometria Óssea",
      description: "Coluna, fêmur e corpo total para diagnóstico de osteoporose",
      whatsappText: "Gostaria de agendar uma Densitometria Óssea"
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
    <section id="especialidades" className="py-20 bg-clinic-gray" data-testid="services-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4" data-testid="services-title">
            Nossos <span className="text-clinic-red">Exames</span>
          </h2>
          <div className="w-24 h-1 bg-clinic-red mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos uma ampla gama de exames de diagnóstico por imagem com equipamentos modernos e tecnologia de ponta
          </p>
        </div>

        {/* Main Services Highlight */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {mainServices.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              data-testid={`main-service-${index}`}
            >
              <div className="text-center">
                <div className="bg-clinic-red text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className={`${service.icon} text-2xl`}></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <a 
                  href={`https://wa.me/5593992318885?text=${encodeURIComponent(service.whatsappText)}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-clinic-red hover:text-red-600 font-semibold"
                  data-testid={`service-schedule-${index}`}
                >
                  Agendar <i className="fas fa-arrow-right ml-1"></i>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Complete Services List */}
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center" data-testid="all-services-title">
            Todos os Nossos Serviços
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              {allServices.slice(0, 4).map((service, index) => (
                <div key={index} className="flex items-center space-x-3" data-testid={`service-item-${index}`}>
                  <i className="fas fa-check text-clinic-red"></i>
                  <span className="text-gray-700">{service}</span>
                </div>
              ))}
            </div>
            <div className="space-y-4">
              {allServices.slice(4).map((service, index) => (
                <div key={index + 4} className="flex items-center space-x-3" data-testid={`service-item-${index + 4}`}>
                  <i className="fas fa-check text-clinic-red"></i>
                  <span className="text-gray-700">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

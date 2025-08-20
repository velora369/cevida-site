export default function HeroSection() {
  return (
    <section 
      id="inicio" 
      className="pt-20 bg-gradient-to-r from-white to-clinic-gray min-h-screen flex items-center"
      data-testid="hero-section"
    >
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800" data-testid="hero-title">
              <span className="text-clinic-red">CEVIDA</span> Diagnósticos
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed" data-testid="hero-subtitle">
              Exames de imagem com precisão e confiança em Santarém-PA
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <i className="fas fa-check-circle text-clinic-red"></i>
                <span className="text-gray-700">Médico especialista titulado pelo CBR</span>
              </div>
              <div className="flex items-center space-x-3">
                <i className="fas fa-check-circle text-clinic-red"></i>
                <span className="text-gray-700">+15 anos de experiência</span>
              </div>
              <div className="flex items-center space-x-3">
                <i className="fas fa-check-circle text-clinic-red"></i>
                <span className="text-gray-700">Atendimento humanizado</span>
              </div>
            </div>
            <a 
              href="https://wa.me/5593992318885?text=Olá! Gostaria de agendar um exame na CEVIDA Diagnósticos." 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-clinic-red text-white px-8 py-4 rounded-full hover:bg-clinic-red-dark transition-colors font-semibold text-lg shadow-lg"
              data-testid="hero-cta-button"
            >
              <i className="fab fa-whatsapp mr-2"></i>Agende seu exame pelo WhatsApp
            </a>
          </div>
          <div className="relative">
            <img 
              src="https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/08/hero-img.jpeg" 
              alt="Equipamentos modernos de diagnóstico por imagem" 
              className="rounded-xl shadow-2xl w-full h-auto"
              data-testid="hero-image"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl hidden md:block">
              <div className="flex items-center space-x-4">
                <div className="bg-clinic-red text-white w-12 h-12 rounded-full flex items-center justify-center">
                  <i className="fas fa-stethoscope"></i>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Dr. Luiz Carlos</p>
                  <p className="text-sm text-gray-600">Radiologista CBR</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

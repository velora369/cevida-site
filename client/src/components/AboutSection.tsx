export default function AboutSection() {
  return (
    <section id="quem-somos" className="py-20 bg-white" data-testid="about-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4" data-testid="about-title">
            Quem <span className="text-clinic-red">Somos</span>
          </h2>
          <div className="w-24 h-1 bg-clinic-red mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-800" data-testid="doctor-name">
              Dr. Luiz Carlos Cavaleiro de Macedo Júnior
            </h3>
            <p className="text-gray-600 leading-relaxed" data-testid="doctor-bio">
              Dr. Luiz Carlos Cavaleiro de Macedo Júnior é médico radiologista, com mais de 15 anos de atuação em diagnóstico por imagem. Especialista titulado pelo Colégio Brasileiro de Radiologia, é responsável técnico da CEVIDA Diagnósticos em Santarém-PA, oferecendo exames de alta precisão em ultrassonografia, raio-X e densitometria óssea.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
              <div className="text-center p-6 bg-clinic-gray rounded-xl" data-testid="stat-experience">
                <div className="text-3xl font-bold text-clinic-red">15+</div>
                <div className="text-sm text-gray-600 mt-2">Anos de Experiência</div>
              </div>
              <div className="text-center p-6 bg-clinic-gray rounded-xl" data-testid="stat-cbr">
                <div className="text-3xl font-bold text-clinic-red">CBR</div>
                <div className="text-sm text-gray-600 mt-2">Especialista Titulado</div>
              </div>
              <div className="text-center p-6 bg-clinic-gray rounded-xl" data-testid="stat-humanized">
                <div className="text-3xl font-bold text-clinic-red">100%</div>
                <div className="text-sm text-gray-600 mt-2">Atendimento Humanizado</div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            <img 
              src="https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/08/em-servico-2.jpg" 
              alt="Dr. Luiz Carlos em atendimento médico" 
              className="rounded-xl shadow-lg w-full h-auto"
              data-testid="doctor-image-1"
            />
            <img 
              src="https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/08/em-servico-1.jpg" 
              alt="Dr. Luiz Carlos realizando exame de ultrassom" 
              className="rounded-xl shadow-lg w-full h-auto"
              data-testid="doctor-image-2"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-gray-800 text-white py-12" data-testid="footer">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <img 
              src="https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/08/logo.png" 
              alt="CEVIDA Diagnósticos Logo" 
              className="h-16 w-auto mb-6 brightness-0 invert"
              data-testid="footer-logo"
            />
            <p className="text-gray-300 mb-4" data-testid="footer-description">
              Exames de imagem com precisão e confiança em Santarém-PA
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://wa.me/5593992318885" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-green-400 hover:text-green-300 transition-colors"
                data-testid="footer-whatsapp-link"
              >
                <i className="fab fa-whatsapp text-2xl"></i>
              </a>
              <a 
                href="https://instagram.com/cevidastm" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-pink-400 hover:text-pink-300 transition-colors"
                data-testid="footer-instagram-link"
              >
                <i className="fab fa-instagram text-2xl"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4" data-testid="footer-quick-links-title">
              Links Rápidos
            </h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('inicio')}
                  className="text-gray-300 hover:text-white transition-colors"
                  data-testid="footer-link-inicio"
                >
                  Início
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('quem-somos')}
                  className="text-gray-300 hover:text-white transition-colors"
                  data-testid="footer-link-quem-somos"
                >
                  Quem Somos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('especialidades')}
                  className="text-gray-300 hover:text-white transition-colors"
                  data-testid="footer-link-especialidades"
                >
                  Especialidades
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contato')}
                  className="text-gray-300 hover:text-white transition-colors"
                  data-testid="footer-link-contato"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4" data-testid="footer-contact-title">
              Contato
            </h4>
            <div className="space-y-2 text-gray-300" data-testid="footer-contact-info">
              <p><i className="fas fa-map-marker-alt mr-2"></i>Av. Mendonça Furtado, 1858</p>
              <p>Clínica Vitalle (Sala 13)</p>
              <p>Aldeia, Santarém-PA</p>
              <p><i className="fas fa-phone mr-2"></i>(93) 99231-8885</p>
              <p><i className="fas fa-clock mr-2"></i>Seg à Sex: 08:00 às 17:00</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400" data-testid="footer-copyright">
            © 2025 CEVIDA Diagnósticos – Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
}

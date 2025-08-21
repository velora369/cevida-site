export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const quickLinks = [
    { id: 'inicio', label: 'Início' },
    { id: 'quem-somos', label: 'Quem Somos' },
    { id: 'especialidades', label: 'Especialidades' },
    { id: 'contato', label: 'Contato' }
  ];

  const socialLinks = [
    {
      href: "https://wa.me/5593992318885",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488z"/>
        </svg>
      ),
      color: "text-green-400 hover:text-green-300",
      label: "WhatsApp"
    },
    {
      href: "https://instagram.com/cevidastm",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.40s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
      color: "text-pink-400 hover:text-pink-300",
      label: "Instagram"
    }
  ];

  return (
    <footer className="bg-white text-gray-800 py-16 relative overflow-hidden border-t border-gray-200" data-testid="footer">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-gray-200 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Logo and Description */}
          <div className="space-y-6">
            <div className="relative group">
              <img 
                src="https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/08/logo.png" 
                alt="CEVIDA Diagnósticos Logo" 
                className="h-16 w-auto group-hover:scale-105 transition-transform duration-300"
                data-testid="footer-logo"
              />
            </div>
            <p className="text-gray-600 leading-relaxed text-lg" data-testid="footer-description">
              Exames de imagem com precisão e confiança em Santarém-PA
            </p>
            
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-2xl font-bold mb-6 text-gray-800" data-testid="footer-quick-links-title">
              Links Rápidos
            </h4>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={link.id}>
                  <button 
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-600 hover:text-gray-800 transition-all duration-300 text-lg hover:translate-x-2 block w-full text-left group"
                    data-testid={`footer-link-${link.id}`}
                  >
                    <span className="flex items-center space-x-3">
                      <svg className="w-4 h-4 text-clinic-red group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                      <span>{link.label}</span>
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <h4 className="text-2xl font-bold mb-6 text-gray-800" data-testid="footer-contact-title">
              Contato
            </h4>
            <div className="space-y-4 text-gray-600" data-testid="footer-contact-info">
              <div className="flex items-start space-x-3 group">
                <div className="bg-clinic-red/20 p-2 rounded-xl group-hover:bg-clinic-red/30 transition-colors duration-300">
                  <svg className="w-5 h-5 text-clinic-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <a 
                  href="https://maps.app.goo.gl/MHT5mqzamRtAvFT36"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-clinic-red transition-colors cursor-pointer"
                >
                  <p>Av. Mendonça Furtado, 1858</p>
                  <p>Clínica Vitalle (Sala 13)</p>
                  <p>Aldeia, Santarém-PA</p>
                </a>
              </div>
              
              <div className="flex items-center space-x-3 group">
                <div className="bg-clinic-red/20 p-2 rounded-xl group-hover:bg-clinic-red/30 transition-colors duration-300">
                  <svg className="w-5 h-5 text-clinic-red" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488z"/>
                  </svg>
                </div>
                <a 
                  href="https://wa.me/5593992318885"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-clinic-red transition-colors cursor-pointer"
                >
                  <p>(93) 99231-8885</p>
                </a>
              </div>
              
              <div className="flex items-center space-x-3 group">
                <div className="bg-clinic-red/20 p-2 rounded-xl group-hover:bg-clinic-red/30 transition-colors duration-300">
                  <svg className="w-5 h-5 text-clinic-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p>Seg à Sex: 08:00 às 17:00</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-300 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-center md:text-left" data-testid="footer-copyright">
              © 2025 CEVIDA Diagnósticos – Todos os direitos reservados
            </p>
            <div className="flex items-center space-x-2 text-gray-500 text-sm">
              <span>Desenvolvido com</span>
              <svg className="w-4 h-4 text-clinic-red animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
              <span>para sua saúde</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
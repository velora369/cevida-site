export default function FloatingWhatsApp() {
  return (
    <a 
      href="https://wa.me/5593992318885?text=Olá! Gostaria de agendar um exame na CEVIDA Diagnósticos." 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors z-50 animate-pulse"
      data-testid="floating-whatsapp-button"
      title="Agendar pelo WhatsApp"
    >
      <i className="fab fa-whatsapp text-2xl"></i>
    </a>
  );
}

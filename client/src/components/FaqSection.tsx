import { useState, useEffect, useRef } from "react";
import { FaqIcon } from "./CustomIcons";
import { reportWhatsAppConversion } from "@/lib/gtag";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const whatsappUrl =
    "https://wa.me/5593992318885?text=Olá! Tenho algumas dúvidas sobre os serviços da CEVIDA Diagnósticos.";

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

  const faqs = [
    {
      question: "Como agendar um exame na CEVIDA?",
      answer: "Você pode agendar através do WhatsApp, telefone ou presencialmente. Nossa equipe está sempre disponível para orientá-lo sobre horários e preparação necessária para cada tipo de exame."
    },
    {
      question: "Quais convênios são aceitos?",
      answer: "Atendemos exclusivamente de forma particular, não trabalhamos com convênios médicos. Para maior comodidade, oferecemos diferentes formas de pagamento: PIX, cartão de crédito/débito e dinheiro."
    },
    {
      question: "Em quanto tempo fico com o resultado?",
      answer: "O prazo varia conforme o tipo de exame. Exames simples ficam prontos em algumas horas, enquanto exames mais complexos podem levar até 24-48 horas. Informamos o prazo no momento do agendamento."
    },
    {
      question: "É necessário algum preparo especial?",
      answer: "Alguns exames exigem preparo prévio como jejum ou medicações específicas. Nossa equipe fornecerá todas as orientações necessárias no momento do agendamento."
    },
    {
      question: "Os equipamentos são modernos e seguros?",
      answer: "Sim! Utilizamos equipamentos de última geração, constantemente atualizados e com certificação de qualidade. Seguimos rigorosos protocolos de segurança e manutenção preventiva."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section 
      id="faq" 
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-clinic-gray/30 to-white dark:from-gray-800/30 dark:to-gray-900"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <span className="inline-block px-4 py-2 bg-clinic-red-light text-clinic-red rounded-full text-sm font-semibold mb-4 hover-lift">
            Dúvidas Frequentes
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 text-gradient">
            Perguntas e Respostas
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Esclarecemos as principais dúvidas sobre nossos serviços e procedimentos. 
            Não encontrou sua pergunta? Entre em contato conosco!
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="animate-on-scroll mb-4"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="glass-card overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-6 text-left hover:bg-clinic-red-light/10 transition-all duration-300 focus:outline-none focus:bg-clinic-red-light/10"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-clinic-red-light to-clinic-red/10 rounded-xl flex items-center justify-center hover-scale">
                        <FaqIcon size={24} className="text-clinic-red" />
                      </div>
                      <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white">
                        {faq.question}
                      </h3>
                    </div>
                    <div 
                      className={`transform transition-transform duration-300 ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}
                    >
                      <svg 
                        className="w-6 h-6 text-clinic-red" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth="2" 
                          d="M19 9l-7 7-7-7" 
                        />
                      </svg>
                    </div>
                  </div>
                </button>
                
                <div 
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-6 ml-16">
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center animate-on-scroll">
          <div className="glass-card p-8 bg-gradient-to-r from-clinic-red/5 to-transparent">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Ainda tem dúvidas?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Nossa equipe está pronta para esclarecer todas as suas questões
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-3"
              onClick={(event) => {
                event.preventDefault();
                reportWhatsAppConversion(whatsappUrl, { openInNewTab: true });
              }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488z"/>
              </svg>
              Falar Conosco
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
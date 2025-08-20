import { useEffect, useRef } from "react";
import { PricingIcon, QualityIcon, ShieldProtectionIcon } from "./CustomIcons";

export default function PricingPlansSection() {
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

    const cards = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const plans = [
    {
      name: "Básico",
      description: "Ideal para exames de rotina e check-ups preventivos",
      price: "A partir de",
      priceValue: "R$ 150",
      popular: false,
      icon: <PricingIcon size={32} className="text-clinic-red" />,
      features: [
        "Radiografia digital",
        "Ultrassonografia básica",
        "Exames laboratoriais",
        "Relatório técnico completo",
        "Atendimento humanizado"
      ],
      gradient: "from-blue-500/10 to-cyan-500/10"
    },
    {
      name: "Completo",
      description: "Diagnósticos avançados com tecnologia de ponta",
      price: "A partir de",
      priceValue: "R$ 350",
      popular: true,
      icon: <QualityIcon size={32} className="text-white" />,
      features: [
        "Todos os exames do plano Básico",
        "Tomografia computadorizada",
        "Ressonância magnética",
        "Exames com contraste",
        "Reconstrução 3D",
        "Laudo médico especializado",
        "Prioridade no agendamento"
      ],
      gradient: "from-clinic-red via-red-500 to-red-600"
    },
    {
      name: "Premium",
      description: "Experiência VIP com máximo conforto e agilidade",
      price: "A partir de",
      priceValue: "R$ 600",
      popular: false,
      icon: <ShieldProtectionIcon size={32} className="text-clinic-red" />,
      features: [
        "Todos os exames disponíveis",
        "Agendamento express",
        "Sala VIP de espera",
        "Café e amenities",
        "Resultado em até 2 horas",
        "Consulta online incluída",
        "Suporte 24/7"
      ],
      gradient: "from-purple-500/10 to-pink-500/10"
    }
  ];

  return (
    <section 
      id="planos" 
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-white via-clinic-gray/20 to-white dark:from-gray-900 dark:via-gray-800/20 dark:to-gray-900"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <span className="inline-block px-4 py-2 bg-clinic-red text-white rounded-full text-sm font-semibold mb-4 hover-lift">
            Nossos Planos
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 text-gradient">
            Escolha o Melhor para Você
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Oferecemos diferentes opções de atendimento para atender suas necessidades específicas 
            com preços justos e qualidade excepcional.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`animate-on-scroll hover-lift relative ${
                plan.popular ? 'md:-translate-y-4' : ''
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="bg-gradient-to-r from-clinic-red to-red-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg animate-glow">
                    Mais Popular
                  </span>
                </div>
              )}

              <div 
                className={`glass-card p-8 h-full relative overflow-hidden group border-2 transition-all duration-300 ${
                  plan.popular 
                    ? 'bg-gradient-to-br from-clinic-red via-red-500 to-red-600 border-red-400 text-white' 
                    : `bg-gradient-to-br ${plan.gradient} border-transparent hover:border-clinic-red/20`
                }`}
              >
                {/* Background Pattern for Popular Plan */}
                {plan.popular && (
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                )}

                {/* Plan Header */}
                <div className="relative z-10 text-center mb-8">
                  <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-white/20 to-white/5 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {plan.icon}
                  </div>
                  <h3 className={`text-2xl font-bold mb-2 ${
                    plan.popular ? 'text-white' : 'text-gray-900 dark:text-white'
                  }`}>
                    {plan.name}
                  </h3>
                  <p className={`text-sm ${
                    plan.popular ? 'text-white/80' : 'text-gray-600 dark:text-gray-300'
                  }`}>
                    {plan.description}
                  </p>
                </div>

                {/* Price */}
                <div className="relative z-10 text-center mb-8">
                  <p className={`text-sm mb-2 ${
                    plan.popular ? 'text-white/80' : 'text-gray-500 dark:text-gray-400'
                  }`}>
                    {plan.price}
                  </p>
                  <div className={`text-4xl font-bold ${
                    plan.popular ? 'text-white' : 'text-clinic-red'
                  }`}>
                    {plan.priceValue}
                  </div>
                </div>

                {/* Features */}
                <div className="relative z-10 space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div 
                      key={featureIndex}
                      className="flex items-start gap-3"
                    >
                      <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                        plan.popular ? 'bg-white' : 'bg-clinic-red'
                      }`}></div>
                      <span className={`text-sm leading-relaxed ${
                        plan.popular ? 'text-white/90' : 'text-gray-600 dark:text-gray-300'
                      }`}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="relative z-10">
                  <a
                    href="https://wa.me/5593992318885?text=Olá! Gostaria de saber mais sobre os planos da CEVIDA Diagnósticos."
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full inline-flex items-center justify-center px-6 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                      plan.popular
                        ? 'bg-white text-clinic-red hover:bg-gray-50'
                        : 'bg-clinic-red text-white hover:bg-clinic-red-hover'
                    }`}
                  >
                    Escolher Plano
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Info */}
        <div className="mt-16 text-center animate-on-scroll">
          <div className="glass-card p-8 bg-gradient-to-r from-clinic-red/5 to-transparent">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Dúvidas sobre nossos planos?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Nossa equipe está disponível para esclarecer todas as suas dúvidas e ajudar 
              você a escolher o plano ideal para suas necessidades.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/5593992318885?text=Olá! Gostaria de falar com um consultor sobre os planos."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-3"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488z"/>
                </svg>
                Falar com Consultor
              </a>
              <button className="btn-secondary">
                Comparar Planos
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
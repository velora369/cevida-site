import { useEffect, useRef } from "react";
import { ShieldProtectionIcon, InnovationIcon, QualityIcon, TrustIcon } from "./CustomIcons";

export default function BenefitsSection() {
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

  const benefits = [
    {
      icon: <ShieldProtectionIcon size={32} className="text-clinic-red" />,
      title: "Proteção e Segurança",
      description: "Equipamentos de última geração com protocolos rigorosos de segurança para sua proteção.",
      gradient: "from-blue-500/10 to-cyan-500/10"
    },
    {
      icon: <InnovationIcon size={32} className="text-clinic-red" />,
      title: "Tecnologia Inovadora",
      description: "Aparelhos modernos com alta resolução para diagnósticos precisos e detalhados.",
      gradient: "from-purple-500/10 to-pink-500/10"
    },
    {
      icon: <QualityIcon size={32} className="text-clinic-red" />,
      title: "Alta Qualidade",
      description: "Exames realizados com excelência técnica por profissionais especializados e experientes.",
      gradient: "from-amber-500/10 to-orange-500/10"
    },
    {
      icon: <TrustIcon size={32} className="text-clinic-red" />,
      title: "Confiança Total",
      description: "Mais de 15 anos de experiência oferecendo confiança e tranquilidade aos nossos pacientes.",
      gradient: "from-green-500/10 to-emerald-500/10"
    }
  ];

  return (
    <section 
      id="beneficios" 
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-white via-clinic-gray/30 to-white dark:from-gray-900 dark:via-gray-800/50 dark:to-gray-900"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <span className="inline-block px-4 py-2 bg-clinic-red-light text-clinic-red rounded-full text-sm font-semibold mb-4 hover-lift">
            Nossos Diferenciais
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 text-gradient">
            Por que escolher a CEVIDA?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Oferecemos excelência em diagnósticos por imagem com tecnologia avançada, 
            profissionais qualificados e atendimento humanizado.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="animate-on-scroll hover-lift"
              style={{
                animationDelay: `${index * 150}ms`
              }}
            >
              <div className={`glass-card p-8 h-full bg-gradient-to-br ${benefit.gradient} border-2 border-transparent hover:border-clinic-red/20 group`}>
                {/* Icon Container */}
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-clinic-red-light to-clinic-red/5 rounded-2xl flex items-center justify-center group-hover:shadow-lg group-hover:shadow-clinic-red/20 transition-all duration-300">
                    {benefit.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-clinic-red transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {benefit.description}
                </p>

                {/* Decorative Element */}
                <div className="mt-6 w-12 h-1 bg-gradient-to-r from-clinic-red to-transparent rounded-full group-hover:w-full transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 glass-card p-8 md:p-12">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { number: "15+", label: "Anos de Experiência", icon: "🏆" },
              { number: "5000+", label: "Exames Realizados", icon: "📊" },
              { number: "100%", label: "Satisfação dos Pacientes", icon: "❤️" }
            ].map((stat, index) => (
              <div 
                key={index} 
                className="animate-on-scroll hover-scale"
                style={{ animationDelay: `${index * 200 + 800}ms` }}
              >
                <div className="text-4xl md:text-6xl font-bold text-gradient mb-2">
                  {stat.number}
                </div>
                <p className="text-gray-600 dark:text-gray-300 font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
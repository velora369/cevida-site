import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    examType: ""
  });
  const { toast } = useToast();
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.animate-on-scroll');
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('animate-fade-in-up');
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.examType) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos do formulário.",
        variant: "destructive"
      });
      return;
    }

    const message = `Olá! Gostaria de agendar um exame na CEVIDA Diagnósticos.%0A%0ANome: ${encodeURIComponent(formData.name)}%0ATipo de Exame: ${encodeURIComponent(formData.examType)}`;
    window.open(`https://wa.me/5593992318885?text=${message}`, '_blank');
    
    // Reset form
    setFormData({ name: "", examType: "" });
    
    toast({
      title: "Redirecionando para WhatsApp",
      description: "Você será redirecionado para o WhatsApp para finalizar o agendamento."
    });
  };

  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Endereço",
      info: ["Av. Mendonça Furtado, 1858 – Clínica Vitalle (Sala 13)", "Aldeia, Santarém-PA, CEP 68040-050"],
      gradient: "from-clinic-red to-red-600",
      link: "https://maps.app.goo.gl/MHT5mqzamRtAvFT36"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Horários",
      info: ["Segunda a sexta, das 08:00 às 17:00"],
      gradient: "from-clinic-red to-red-600"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488z"/>
        </svg>
      ),
      title: "WhatsApp",
      info: ["(93) 99231-8885"],
      gradient: "from-clinic-red to-red-600",
      link: "https://wa.me/5593992318885"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
      title: "Instagram",
      info: ["@cevidastm"],
      gradient: "from-clinic-red to-red-600",
      link: "https://instagram.com/cevidastm"
    }
  ];

  return (
    <section 
      id="contato" 
      ref={sectionRef}
      className="py-16 md:py-24 bg-gradient-to-b from-clinic-red to-red-600 relative overflow-hidden" 
      data-testid="contact-section"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-clinic-red rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-cyan-400 rounded-full blur-3xl"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 animate-on-scroll opacity-0">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" data-testid="contact-title">
            Contato e Agendamento
          </h2>
          <div className="w-32 h-1.5 bg-white/40 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Entre em contato conosco e agende seu exame com facilidade
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Contact Information */}
          <div className="animate-on-scroll opacity-0">
            <h3 className="text-3xl font-bold text-white mb-8" data-testid="contact-info-title">
              Informações de Contato
            </h3>
            
            <div className="space-y-6">
              {contactInfo.map((contact, index) => (
                <div key={index} className="group" data-testid={`contact-${index}`}>
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-white via-gray-200 to-gray-300 rounded-2xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                    <div className="relative bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-2xl border border-white/70 hover:scale-105 transition-all duration-300">
                      <div className="flex items-start space-x-4">
                        <div className={`bg-gradient-to-r ${contact.gradient} text-white w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-300`}>
                          {contact.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-gray-800 text-lg mb-2">{contact.title}</h4>
                          {contact.link ? (
                            <a 
                              href={contact.link}
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="hover:text-red-600 transition-colors text-[#4b5563] font-normal cursor-pointer block"
                            >
                              <div className="space-y-1">
                                {contact.info.map((line, lineIndex) => (
                                  <p key={lineIndex} className="text-gray-600 hover:text-red-600 transition-colors">{line}</p>
                                ))}
                              </div>
                            </a>
                          ) : (
                            <div className="space-y-1">
                              {contact.info.map((line, lineIndex) => (
                                <p key={lineIndex} className="text-gray-600">{line}</p>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Payment Info */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-clinic-red to-red-600 rounded-2xl blur-lg opacity-15 group-hover:opacity-25 transition-opacity duration-500"></div>
              <div className="relative bg-gradient-to-r from-red-50 to-clinic-red-light p-6 rounded-2xl border-l-4 border-clinic-red shadow-xl mt-[27px] mb-[27px]" data-testid="payment-info">
                <div className="flex items-start space-x-3">
                  <div className="bg-clinic-red text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      <strong>Importante:</strong> Atendemos apenas particular (PIX, cartão e dinheiro). Não trabalhamos com convênios.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-on-scroll opacity-0">
            <h3 className="text-3xl font-bold text-white mb-8" data-testid="contact-form-title">
              Formulário de Contato
            </h3>
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-clinic-red via-red-500 to-red-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-2xl border border-white/50">
                <form onSubmit={handleSubmit} className="space-y-6" data-testid="contact-form">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                      Nome Completo *
                    </Label>
                    <Input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-clinic-red focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm"
                      placeholder="Digite seu nome completo"
                      data-testid="input-name"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="exam-type" className="text-sm font-medium text-gray-700">
                      Tipo de Exame *
                    </Label>
                    <Select
                      value={formData.examType}
                      onValueChange={(value) => setFormData({ ...formData, examType: value })}
                      required
                    >
                      <SelectTrigger 
                        className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-clinic-red focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm" 
                        data-testid="select-exam-type"
                      >
                        <SelectValue placeholder="Selecione o tipo de exame" />
                      </SelectTrigger>
                      <SelectContent className="rounded-2xl border border-gray-200 bg-white/95 backdrop-blur-sm">
                        <SelectItem value="raio-x" className="rounded-xl">Raio-X Digital</SelectItem>
                        <SelectItem value="ultrassom" className="rounded-xl">Ultrassonografia</SelectItem>
                        <SelectItem value="densitometria" className="rounded-xl">Densitometria Óssea</SelectItem>
                        <SelectItem value="paaf" className="rounded-xl">PAAF de Tireóide</SelectItem>
                        <SelectItem value="biopsia" className="rounded-xl">Biópsia guiada</SelectItem>
                        <SelectItem value="outro" className="rounded-xl">Outro</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-clinic-red via-red-500 to-red-600 text-white py-4 rounded-2xl hover:scale-105 hover:shadow-xl hover:shadow-clinic-red/25 transition-all duration-300 font-semibold text-lg group"
                    data-testid="submit-contact-form"
                  >
                    <svg className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488z"/>
                    </svg>
                    Enviar para WhatsApp
                    <svg className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
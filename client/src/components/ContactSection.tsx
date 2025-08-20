import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    examType: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.examType) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos do formulário.",
        variant: "destructive"
      });
      return;
    }

    const message = `Olá! Gostaria de agendar um exame na CEVIDA Diagnósticos.%0A%0ANome: ${encodeURIComponent(formData.name)}%0ATelefone: ${encodeURIComponent(formData.phone)}%0ATipo de Exame: ${encodeURIComponent(formData.examType)}`;
    window.open(`https://wa.me/5593992318885?text=${message}`, '_blank');
    
    // Reset form
    setFormData({ name: "", phone: "", examType: "" });
    
    toast({
      title: "Redirecionando para WhatsApp",
      description: "Você será redirecionado para o WhatsApp para finalizar o agendamento."
    });
  };

  return (
    <section id="contato" className="py-20 bg-clinic-gray" data-testid="contact-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4" data-testid="contact-title">
            <span className="text-clinic-red">Contato</span> e Agendamento
          </h2>
          <div className="w-24 h-1 bg-clinic-red mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6" data-testid="contact-info-title">
                Informações de Contato
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4" data-testid="contact-address">
                  <div className="bg-clinic-red text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Endereço</h4>
                    <p className="text-gray-600">
                      Av. Mendonça Furtado, 1858 – Clínica Vitalle (Sala 13)<br/>
                      Aldeia, Santarém-PA, CEP 68040-050
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4" data-testid="contact-hours">
                  <div className="bg-clinic-red text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-clock"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Horários</h4>
                    <p className="text-gray-600">Segunda a sexta, das 08:00 às 17:00</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4" data-testid="contact-whatsapp">
                  <div className="bg-clinic-red text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="fab fa-whatsapp"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">WhatsApp</h4>
                    <a 
                      href="https://wa.me/5593992318885" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-clinic-red hover:text-red-600 font-semibold"
                      data-testid="contact-whatsapp-link"
                    >
                      (93) 99231-8885
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4" data-testid="contact-instagram">
                  <div className="bg-clinic-red text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <i className="fab fa-instagram"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Instagram</h4>
                    <a 
                      href="https://instagram.com/cevidastm" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-clinic-red hover:text-red-600 font-semibold"
                      data-testid="contact-instagram-link"
                    >
                      @cevidastm
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded" data-testid="payment-info">
                <p className="text-sm text-gray-700">
                  <i className="fas fa-info-circle text-yellow-400 mr-2"></i>
                  <strong>Importante:</strong> Atendemos apenas particular (PIX, cartão e dinheiro). Não trabalhamos com convênios.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6" data-testid="contact-form-title">
              Formulário de Contato
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6" data-testid="contact-form">
              <div>
                <Label htmlFor="name" className="text-sm font-medium text-gray-700 mb-2">
                  Nome Completo
                </Label>
                <Input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full focus:ring-2 focus:ring-clinic-red focus:border-transparent"
                  data-testid="input-name"
                />
              </div>

              <div>
                <Label htmlFor="phone" className="text-sm font-medium text-gray-700 mb-2">
                  Telefone/WhatsApp
                </Label>
                <Input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="w-full focus:ring-2 focus:ring-clinic-red focus:border-transparent"
                  data-testid="input-phone"
                />
              </div>

              <div>
                <Label htmlFor="exam-type" className="text-sm font-medium text-gray-700 mb-2">
                  Tipo de Exame
                </Label>
                <Select
                  value={formData.examType}
                  onValueChange={(value) => setFormData({ ...formData, examType: value })}
                  required
                >
                  <SelectTrigger className="w-full focus:ring-2 focus:ring-clinic-red focus:border-transparent" data-testid="select-exam-type">
                    <SelectValue placeholder="Selecione o tipo de exame" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="raio-x">Raio-X Digital</SelectItem>
                    <SelectItem value="ultrassom">Ultrassonografia</SelectItem>
                    <SelectItem value="densitometria">Densitometria Óssea</SelectItem>
                    <SelectItem value="paaf">PAAF de Tireóide</SelectItem>
                    <SelectItem value="biopsia">Biópsia guiada</SelectItem>
                    <SelectItem value="outro">Outro</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button 
                type="submit" 
                className="w-full bg-clinic-red text-white hover:bg-clinic-red-dark transition-colors font-semibold py-3"
                data-testid="submit-contact-form"
              >
                <i className="fab fa-whatsapp mr-2"></i>Enviar para WhatsApp
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

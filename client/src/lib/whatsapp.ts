export const WHATSAPP_MESSAGE = `Olá! 👋
Obrigado por entrar em contato com a CEVIDA Diagnósticos.

Trabalhamos com exames por imagem, como:

• Raio-X Digital (alta definição, panorâmico e coluna total)
• Ultrassonografia geral e avançada
• Densitometria Óssea
• Densitometria de Corpo Total
• PAAF de Tireóide
• Alcoolização de nódulos tireoidianos
• Biópsias guiadas por ultrassom
• Histerossonografia
• Histerossalpingografia

Para te ajudar melhor, me conta: qual exame você deseja realizar? 😊`;

export const getWhatsAppUrl = () =>
  `https://wa.me/5593992318885?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

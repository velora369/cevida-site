export const WHATSAPP_MESSAGE =
  "Olá, vim pelo site da Cevida. Gostaria de mais informações!";

export const getWhatsAppUrl = () =>
  `https://wa.me/5593992318885?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export const config = {
  companyName: "Custom Apparels",
  whatsappNumber: "919004490995",
  primaryPhone: "+91 90044 90995",
  secondaryPhone: "+91 74208 52608",
  email: "team@customapparels.co.in",
  address: "Office 642, 6th Floor, Intelligentia Business Park, Sector 24, Vashi, Navi Mumbai, Maharashtra 400703",
  catalogLink: "https://drive.google.com/file/d/1vJjvAqlqpE79xWlpgoIJJgsQBNpHe5rc/view?usp=sharing",
};

/**
 * Generate a WhatsApp click-to-chat API link for a given message.
 */
export const getWhatsAppLink = (message: string): string => {
  return `https://wa.me/${config.whatsappNumber}?text=${encodeURIComponent(message)}`;
};

import { useTranslation } from 'react-i18next';
import { MessageCircle } from 'lucide-react';

const WhatsAppFloat = () => {
  const { t } = useTranslation();
  const whatsappNumber = '919999999999'; // TODO: replace with real number
  const message = encodeURIComponent(t('whatsapp.message'));
  const href = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      id="whatsapp-float"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
    >
      <MessageCircle size={26} className="fill-white stroke-none" aria-hidden="true" />
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25 pointer-events-none" />
    </a>
  );
};

export default WhatsAppFloat;

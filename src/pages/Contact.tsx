import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { MapPin, Phone, Mail, MessageCircle, Map } from 'lucide-react';
import ContactForm from '../components/shared/ContactForm';
import type { FormField } from '../components/shared/ContactForm';

const contactFields: FormField[] = [
  { name: 'fullName', labelKey: 'contact.name', type: 'text', required: true },
  { name: 'contact', labelKey: 'contact.contact_field', type: 'text', required: true },
  { name: 'message', labelKey: 'contact.message', type: 'textarea', required: true },
];

const Contact = () => {
  const { t } = useTranslation();
  const whatsappNumber = '919999999999'; // TODO: replace with real number
  const whatsappMsg = encodeURIComponent(t('whatsapp.message'));

  return (
    <>
      <Helmet>
        <title>Contact Us — Sankalp Foundation</title>
        <meta
          name="description"
          content="Get in touch with Sankalp Foundation. Find our address, phone number, email, and send us a message directly."
        />
      </Helmet>

      <main id="main-content" className="pt-16">
        {/* Page hero */}
        <div className="bg-[#8B1A1A] py-20 px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" data-aos="fade-up">
            {t('contact.title')}
          </h1>
          <div className="h-1 w-16 bg-[#D4A017] rounded-full mx-auto mb-4" />
          <p className="text-red-100 text-lg max-w-xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

            {/* Contact info + map */}
            <div data-aos="fade-right">
              <h2 className="text-2xl font-bold text-[#1A1A1A] mb-3">
                {t('contact.address_heading')}
              </h2>
              <div className="h-1 w-10 bg-[#D4A017] rounded-full mb-6" />

              <address className="not-italic space-y-4 text-[#444444] mb-8">
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="mt-0.5 flex-shrink-0 text-[#8B1A1A]" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-[#1A1A1A]">{t('contact.address')}</p>
                    <p className="text-sm text-[#5A5A5A]">Maharashtra, India</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={18} className="flex-shrink-0 text-[#8B1A1A]" aria-hidden="true" />
                  <a
                    href={`tel:${t('contact.phone')}`}
                    className="text-[#8B1A1A] font-medium hover:underline"
                  >
                    {t('contact.phone')}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={18} className="flex-shrink-0 text-[#8B1A1A]" aria-hidden="true" />
                  <a
                    href={`mailto:${t('contact.email')}`}
                    className="text-[#8B1A1A] font-medium hover:underline"
                  >
                    {t('contact.email')}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <MessageCircle size={18} className="flex-shrink-0 text-[#25D366]" aria-hidden="true" />
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#25D366] font-medium hover:underline"
                  >
                    WhatsApp us
                  </a>
                </div>
              </address>

              {/* Google Maps embed placeholder */}
              {/* TODO: Replace with real Google Maps iframe for the Foundation's address */}
              <div className="rounded-2xl overflow-hidden border border-gray-200 h-64 bg-[#FBF0F0] flex items-center justify-center">
                <div className="text-center text-[#8B1A1A]/40">
                  <Map size={48} className="mx-auto mb-2" aria-hidden="true" />
                  <p className="text-sm font-medium">
                    TODO: Embed Google Maps iframe here
                  </p>
                  <p className="text-xs opacity-60 mt-1">
                    Replace this div with a Google Maps &lt;iframe&gt;
                  </p>
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div className="bg-[#FBF0F0] rounded-2xl p-8" data-aos="fade-left">
              <h2 className="text-2xl font-bold text-[#1A1A1A] mb-3">
                {t('contact.form_heading')}
              </h2>
              <div className="h-1 w-10 bg-[#D4A017] rounded-full mb-6" />
              <ContactForm
                fields={contactFields}
                submitLabelKey="contact.submit"
                formId="contact-form"
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Contact;

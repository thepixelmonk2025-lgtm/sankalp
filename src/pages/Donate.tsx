import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { Mail, MessageCircle } from 'lucide-react';
import ContactForm from '../components/shared/ContactForm';
import type { FormField } from '../components/shared/ContactForm';

const donateFields: FormField[] = [
  { name: 'fullName', labelKey: 'donate.name', type: 'text', required: true },
  { name: 'contact', labelKey: 'donate.contact', type: 'text', required: true },
  { name: 'amount', labelKey: 'donate.amount', type: 'number', required: true },
  { name: 'message', labelKey: 'donate.message', type: 'textarea', required: false },
];

const Donate: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>Donate — Sankalp Foundation</title>
        <meta
          name="description"
          content="Support Sankalp Foundation's community programs via bank transfer or UPI. Donations are eligible for 80G tax deduction."
        />
      </Helmet>

      <main id="main-content" className="pt-16">
        {/* Page hero */}
        <div className="bg-[#8B1A1A] py-20 px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" data-aos="fade-up">
            {t('donate.title')}
          </h1>
          <div className="h-1 w-16 bg-[#D4A017] rounded-full mx-auto mb-4" />
          <p className="text-red-100 text-lg max-w-xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            {t('donate.subtitle')}
          </p>
        </div>

        <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Bank details + UPI — two column on desktop */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12" data-aos="fade-up">

            {/* Bank Transfer */}
            <div className="bg-[#FBF0F0] rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">{t('donate.bank_heading')}</h2>
              <div className="h-1 w-10 bg-[#D4A017] rounded-full mb-6" />
              <dl className="space-y-3">
                {[
                  { label: 'Account Name', value: t('donate.account_name') },
                  { label: 'Account Number', value: t('donate.account_no') },
                  { label: 'IFSC Code', value: t('donate.ifsc') },
                  { label: 'Bank & Branch', value: t('donate.bank_branch') },
                ].map((row) => (
                  <div key={row.label} className="flex flex-col sm:flex-row sm:gap-4">
                    <dt className="font-semibold text-[#8B1A1A] text-sm w-36 flex-shrink-0">
                      {row.label}
                    </dt>
                    <dd className="text-[#1A1A1A] font-medium">{row.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* UPI */}
            <div className="bg-white border-2 border-[#FBF0F0] rounded-2xl p-8 flex flex-col items-center text-center">
              <h2 className="text-2xl font-bold text-[#1A1A1A] mb-4">{t('donate.upi_heading')}</h2>
              <div className="h-1 w-10 bg-[#D4A017] rounded-full mb-6" />
              <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-xl overflow-hidden mb-4 border-2 border-gray-100 shadow-md">
                <img 
                  src="/images/qr-code.png" 
                  alt="Sankalp Foundation UPI QR Code" 
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="font-bold text-[#8B1A1A] text-lg mb-2">{t('donate.upi_id')}</p>
              <p className="text-[#5A5A5A] text-sm">{t('donate.upi_note')}</p>
            </div>
          </div>

          {/* Tax note */}
          <div
            className="bg-[#8B1A1A]/5 border border-[#8B1A1A]/20 rounded-xl p-4 mb-12 text-center"
            data-aos="fade-up"
          >
            <p className="text-[#8B1A1A] text-sm font-medium">{t('donate.tax_note')}</p>
          </div>

          {/* Confirmation form */}
          <div className="max-w-xl mx-auto" data-aos="fade-up">
            <h2 className="text-2xl font-bold text-[#1A1A1A] mb-2">{t('donate.form_heading')}</h2>
            <div className="h-1 w-10 bg-[#D4A017] rounded-full mb-4" />
            <p className="text-[#5A5A5A] text-sm mb-6">{t('donate.form_note')}</p>
            <ContactForm
              fields={donateFields}
              submitLabelKey="donate.submit"
              formId="donate-form"
            />

            {/* Fallback contact options */}
            <div className="mt-6 pt-6 border-t border-gray-200 flex flex-col sm:flex-row gap-3 text-sm text-[#5A5A5A]">
              <span>Or reach us directly:</span>
              <a
                href="mailto:sankalpfoundation2022@gmail.com"
                className="inline-flex items-center gap-1.5 text-[#8B1A1A] font-medium hover:underline"
              >
                <Mail size={14} aria-hidden="true" /> Email us
              </a>
              <a
                href="https://wa.me/919702327373?text=I%20want%20to%20donate%20to%20Sankalp%20Foundation"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[#25D366] font-medium hover:underline"
              >
                <MessageCircle size={14} aria-hidden="true" /> WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Donate;

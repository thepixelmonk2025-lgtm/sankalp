import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import ContactForm from '../components/shared/ContactForm';
import type { FormField } from '../components/shared/ContactForm';

const volunteerFields: FormField[] = [
  { name: 'fullName', labelKey: 'volunteer.name', type: 'text', required: true },
  { name: 'contact', labelKey: 'volunteer.contact', type: 'text', required: true },
  {
    name: 'area',
    labelKey: 'volunteer.area',
    type: 'select',
    required: true,
    options: ['Education', 'Health', 'Livelihood & Skills', 'Environment', 'Administration', 'Fundraising', 'Other'],
  },
  { name: 'availability', labelKey: 'volunteer.availability', type: 'textarea', required: false },
];

const whyVolunteerPoints = [
  { icon: '🤝', en: 'Work directly with communities and make a tangible difference.' },
  { icon: '📚', en: 'Gain hands-on experience in social development and NGO operations.' },
  { icon: '🌱', en: 'Be part of a passionate, grounded team committed to real change.' },
  { icon: '💼', en: 'Flexible involvement — on-ground, virtual, or event-based.' },
];

const Volunteer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>Volunteer — Sankalp Foundation</title>
        <meta
          name="description"
          content="Join Sankalp Foundation as a volunteer. Share your skills, time, and passion to help underserved communities in Maharashtra."
        />
      </Helmet>

      <main id="main-content" className="pt-16">
        {/* Page hero */}
        <div className="bg-[#8B1A1A] py-20 px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" data-aos="fade-up">
            {t('volunteer.title')}
          </h1>
          <div className="h-1 w-16 bg-[#D4A017] rounded-full mx-auto mb-4" />
          <p className="text-red-100 text-lg max-w-xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            {t('volunteer.subtitle')}
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

            {/* Why volunteer */}
            <div data-aos="fade-right">
              <h2 className="text-3xl font-bold text-[#1A1A1A] mb-3">
                {t('volunteer.why_heading')}
              </h2>
              <div className="h-1 w-12 bg-[#D4A017] rounded-full mb-6" />
              <p className="text-[#5A5A5A] leading-relaxed mb-8">
                {t('volunteer.why_text')}
              </p>
              <ul className="space-y-4">
                {whyVolunteerPoints.map((point, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <span className="text-2xl flex-shrink-0 mt-0.5" aria-hidden="true">
                      {point.icon}
                    </span>
                    <p className="text-[#444444] leading-relaxed">{point.en}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Form */}
            <div className="bg-[#FBF0F0] rounded-2xl p-8" data-aos="fade-left">
              <h2 className="text-2xl font-bold text-[#1A1A1A] mb-3">
                {t('volunteer.form_heading')}
              </h2>
              <div className="h-1 w-10 bg-[#D4A017] rounded-full mb-6" />
              <ContactForm
                fields={volunteerFields}
                submitLabelKey="volunteer.submit"
                formId="volunteer-form"
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Volunteer;

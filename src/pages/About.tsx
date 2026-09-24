import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import SectionHeading from '../components/shared/SectionHeading';
import { teamMembers } from '../data/team';

const About: React.FC = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language as 'en' | 'mr';

  return (
    <>
      <Helmet>
        <title>About Us — Sankalp Foundation</title>
        <meta
          name="description"
          content="Learn about Sankalp Foundation — our story, mission, vision, and the team behind our community work in Maharashtra."
        />
      </Helmet>

      <main id="main-content" className="pt-16">
        {/* Page hero banner */}
        <div className="bg-[#8B1A1A] py-20 px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" data-aos="fade-up">
            {t('about.title')}
          </h1>
          <div className="h-1 w-16 bg-[#D4A017] rounded-full mx-auto" />
        </div>

        {/* Story & Mission */}
        <section className="py-16 md:py-24 bg-white" aria-label="Our story and mission">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Text */}
              <div data-aos="fade-right">
                <h2 className="text-3xl font-bold text-[#1A1A1A] mb-3">{t('about.story_heading')}</h2>
                <div className="h-1 w-12 bg-[#D4A017] rounded-full mb-5" />
                <p className="text-[#5A5A5A] leading-relaxed mb-8">{t('about.story')}</p>

                <h2 className="text-3xl font-bold text-[#1A1A1A] mb-3">{t('about.mission_heading')}</h2>
                <div className="h-1 w-12 bg-[#D4A017] rounded-full mb-5" />
                <p className="text-[#5A5A5A] leading-relaxed mb-8">{t('about.mission')}</p>

                <h2 className="text-3xl font-bold text-[#1A1A1A] mb-3">{t('about.vision_heading')}</h2>
                <div className="h-1 w-12 bg-[#D4A017] rounded-full mb-5" />
                <p className="text-[#5A5A5A] leading-relaxed">{t('about.vision')}</p>
              </div>

              {/* Visual placeholder */}
              {/* TODO: Replace with a real photo collage or single strong photo */}
              <div
                className="bg-[#FBF0F0] rounded-2xl h-80 lg:h-full min-h-[320px] flex items-center justify-center"
                data-aos="fade-left"
                aria-hidden="true"
              >
                <div className="text-center text-[#8B1A1A]">
                  <div className="text-6xl mb-4">🌿</div>
                  <p className="font-semibold text-sm opacity-60">
                    TODO: Place a real photo here
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section className="py-16 md:py-24 bg-[#FBF0F0]" aria-label="Leadership team">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading title={t('about.founder_heading')} />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto mt-10">
              {teamMembers.map((member, i) => (
                <div
                  key={member.id}
                  className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow"
                  data-aos="fade-up"
                  data-aos-delay={i * 100}
                >
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-[#FBF0F0] border-4 border-[#8B1A1A]/20">
                    <img
                      src={member.photo}
                      alt={member.name[lang]}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="font-bold text-[#1A1A1A] text-lg mb-1">{member.name[lang]}</h3>
                  <p className="text-[#8B1A1A] text-sm font-medium mb-3">{member.role[lang]}</p>
                  <p className="text-[#5A5A5A] text-sm leading-relaxed">{member.bio[lang]}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Registration Details */}
        <section className="py-16 bg-white" aria-label="Registration details">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center" data-aos="fade-up">
            <SectionHeading title={t('about.registration_heading')} />
            <div className="bg-[#FBF0F0] rounded-2xl p-8 mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              {[
                { label: 'Registration No.', value: t('about.reg_number') },
                { label: '12A Certificate', value: t('about.reg_12a') },
                { label: '80G Certificate', value: t('about.reg_80g') },
              ].map((item) => (
                <div key={item.label}>
                  <p className="text-[#8B1A1A] font-bold text-sm uppercase tracking-wide mb-1">
                    {item.label}
                  </p>
                  <p className="text-[#1A1A1A] font-semibold">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;

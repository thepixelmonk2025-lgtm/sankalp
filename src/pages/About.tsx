import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { Target, Eye, BookOpen } from 'lucide-react';
import SectionHeading from '../components/shared/SectionHeading';
import MentorSection from '../components/about/MentorSection';
import AdvisorsMarquee from '../components/about/AdvisorsMarquee';
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
          content="Learn about Sankalp Foundation — our story, mission, vision, our guiding inspiration, and the team behind our community work in Maharashtra."
        />
      </Helmet>

      <main id="main-content" className="pt-16">
        {/* Page hero banner */}
        <div className="bg-[#8B1A1A] py-20 px-4 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/30 pointer-events-none" />
          <div className="relative z-10 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" data-aos="fade-up">
              {t('about.title')}
            </h1>
            <div className="h-1.5 w-16 bg-[#D4A017] rounded-full mx-auto mb-4" />
            <p className="text-red-100 text-base sm:text-lg max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
              {lang === 'en'
                ? 'Committed to grassroots community transformation through education, healthcare, and human dignity.'
                : 'शिक्षण, आरोग्य आणि सामाजिक न्यायाच्या माध्यमातून तळागाळातील घटकांपर्यंत पोहोचण्याचा आमचा प्रामाणिक संकल्प.'}
            </p>
          </div>
        </div>

        {/* Respected Mentors / Advisors Marquee right on top */}
        <AdvisorsMarquee />

        {/* Story, Mission & Vision Cards */}
        <section className="py-16 md:py-24 bg-white" aria-label="Our story and mission">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Story Card */}
            <div 
              className="bg-[#FFF8F8] border border-[#8B1A1A]/15 rounded-3xl p-8 sm:p-12 mb-16 shadow-sm"
              data-aos="fade-up"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#8B1A1A] text-white flex items-center justify-center shadow-md">
                  <BookOpen size={24} />
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#1A1A1A]">
                    {t('about.story_heading')}
                  </h2>
                  <div className="h-1 w-12 bg-[#D4A017] rounded-full mt-1" />
                </div>
              </div>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed mt-4 max-w-4xl">
                {t('about.story')}
              </p>
            </div>

            {/* Mission & Vision Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Mission */}
              <div 
                className="bg-white border-2 border-[#8B1A1A]/10 hover:border-[#8B1A1A]/30 rounded-3xl p-8 sm:p-10 shadow-md hover:shadow-xl transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#8B1A1A]/10 text-[#8B1A1A] flex items-center justify-center mb-6">
                  <Target size={28} className="text-[#8B1A1A]" />
                </div>
                <h3 className="text-2xl font-bold text-[#1A1A1A] mb-3">
                  {t('about.mission_heading')}
                </h3>
                <div className="h-1 w-10 bg-[#D4A017] rounded-full mb-4" />
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                  {t('about.mission')}
                </p>
              </div>

              {/* Vision */}
              <div 
                className="bg-white border-2 border-[#8B1A1A]/10 hover:border-[#8B1A1A]/30 rounded-3xl p-8 sm:p-10 shadow-md hover:shadow-xl transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#D4A017]/15 text-[#D4A017] flex items-center justify-center mb-6">
                  <Eye size={28} className="text-[#D4A017]" />
                </div>
                <h3 className="text-2xl font-bold text-[#1A1A1A] mb-3">
                  {t('about.vision_heading')}
                </h3>
                <div className="h-1 w-10 bg-[#D4A017] rounded-full mb-4" />
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                  {t('about.vision')}
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* Dedicated Inspiration & Mentor Section */}
        <MentorSection />

        {/* Leadership & Foundation Members */}
        <section className="py-16 md:py-24 bg-[#FBF0F0]" aria-label="Leadership team">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading 
              title={lang === 'en' ? 'Our Governing Board & Team' : 'कार्यकारिणी व मार्गदर्शक मंडळ'} 
              subtitle={lang === 'en' ? 'The committed individuals driving our mission with passion and transparency' : 'ध्येयनिष्ठ आणि समर्पित भावनेने परिवर्तनाची धुरा सांभाळणारे आमचे शिलेदार'}
            />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 mt-12">
              {teamMembers.map((member, i) => (
                <div
                  key={member.id}
                  className="bg-white rounded-3xl p-6 text-center shadow-md hover:shadow-xl transition-all duration-300 border border-[#8B1A1A]/10 flex flex-col items-center justify-between group hover:-translate-y-1"
                  data-aos="fade-up"
                  data-aos-delay={(i % 4) * 80}
                >
                  <div className="w-full flex flex-col items-center">
                    <div className="relative w-28 h-28 sm:w-32 sm:h-32 mb-4 rounded-full overflow-hidden bg-gradient-to-tr from-[#8B1A1A] to-[#D4A017] p-1 shadow-lg group-hover:scale-105 transition-transform duration-300">
                      <div className="w-full h-full rounded-full overflow-hidden bg-white">
                        <img
                          src={member.photo}
                          alt={member.name[lang]}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    </div>

                    <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#FFF5F5] text-[#8B1A1A] border border-[#8B1A1A]/20 mb-2">
                      {member.role[lang]}
                    </span>

                    <h3 className="font-bold text-[#1A1A1A] text-lg sm:text-xl mb-2">
                      {member.name[lang]}
                    </h3>

                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed line-clamp-4 group-hover:line-clamp-none transition-all">
                      {member.bio[lang]}
                    </p>
                  </div>
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

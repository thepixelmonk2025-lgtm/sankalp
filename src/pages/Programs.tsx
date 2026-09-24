import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { BookOpen, HeartPulse, Sprout, Leaf } from 'lucide-react';
import { programs } from '../data/programs';

const programIcons: Record<string, React.ElementType> = {
  education:   BookOpen,
  health:      HeartPulse,
  livelihood:  Sprout,
  environment: Leaf,
};

const Programs = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language as 'en' | 'mr';

  return (
    <>
      <Helmet>
        <title>Programs & Causes — Sankalp Foundation</title>
        <meta
          name="description"
          content="Learn about Sankalp Foundation's programs in education, health, livelihood, and environment — creating lasting change in communities across Maharashtra."
        />
      </Helmet>

      <main id="main-content" className="pt-16">
        {/* Page hero */}
        <div className="bg-[#8B1A1A] py-20 px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" data-aos="fade-up">
            {t('programs.title')}
          </h1>
          <div className="h-1 w-16 bg-[#D4A017] rounded-full mx-auto mb-4" />
          <p className="text-red-100 text-lg max-w-xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            {t('programs.subtitle')}
          </p>
        </div>

        {/* Program sections — anchored */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">
          {programs.map((program, i) => {
            const isEven = i % 2 === 0;
            const Icon = programIcons[program.id] || BookOpen;
            return (
              <section
                key={program.id}
                id={program.anchor}
                aria-label={program.title[lang]}
                className="scroll-mt-20"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${
                    isEven ? '' : 'lg:grid-flow-col-dense'
                  }`}
                >
                  {/* Image */}
                  <div
                    className={`${isEven ? '' : 'lg:col-start-2'}`}
                    data-aos={isEven ? 'fade-right' : 'fade-left'}
                  >
                    <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-[#FBF0F0] flex items-center justify-center">
                      <img
                        src={program.imageUrl || ''}
                        alt={program.title[lang]}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
                      />
                      {/* Icon badge */}
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-xl shadow-sm flex items-center gap-2">
                        <Icon size={20} className="text-[#8B1A1A]" aria-hidden="true" />
                      </div>
                    </div>
                  </div>

                  {/* Text */}
                  <div
                    className={`${isEven ? '' : 'lg:col-start-1 lg:row-start-1'}`}
                    data-aos={isEven ? 'fade-left' : 'fade-right'}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-[#FBF0F0] flex items-center justify-center flex-shrink-0">
                        <Icon size={24} className="text-[#8B1A1A]" aria-hidden="true" />
                      </div>
                      <h2 className="text-3xl font-bold text-[#1A1A1A]">
                        {program.title[lang]}
                      </h2>
                    </div>
                    <div className="h-1 w-12 bg-[#D4A017] rounded-full mb-5" />
                    <p className="text-[#5A5A5A] leading-relaxed text-lg">
                      {program.description[lang]}
                    </p>
                    <div className="mt-6 bg-[#FBF0F0] rounded-xl p-4 text-sm text-[#8B1A1A] border border-[#8B1A1A]/10">
                      <p className="font-semibold">
                        TODO: Add real impact metrics, who-it-helps details, and any available stats. (Client to provide.)
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      </main>
    </>
  );
};

export default Programs;

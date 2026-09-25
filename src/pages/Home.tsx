import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Hero from '../components/home/Hero';
import StatsStrip from '../components/home/StatsStrip';
import ProgramCard from '../components/home/ProgramCard';
import StoryCard from '../components/home/StoryCard';
import AwardSection from '../components/home/AwardSection';
import CampaignSection from '../components/home/CampaignSection';
import SectionHeading from '../components/shared/SectionHeading';
import GalleryGrid from '../components/shared/GalleryGrid';
import { programs } from '../data/programs';
import { impactStories } from '../data/team';
import { galleryImages } from '../data/gallery';

const Home: React.FC = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language as 'en' | 'mr';

  return (
    <>
      <Helmet>
        <title>Sankalp Foundation — Empowering Communities, Transforming Lives</title>
        <meta
          name="description"
          content="Sankalp Foundation is an NGO working with rural and underserved communities in Maharashtra across education, health, livelihood, and environment programs."
        />
      </Helmet>

      <main id="main-content">
        {/* Hero */}
        <Hero />

        {/* Stats Strip */}
        <StatsStrip />

        {/* Our Work — Programs grid */}
        <section className="py-16 md:py-24 bg-white" id="our-work" aria-label="Our Programs">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title={t('programs_section.heading')}
              subtitle={t('programs_section.subheading')}
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
              {programs.map((program, i) => (
                <div key={program.id} data-aos="fade-up" data-aos-delay={i * 80}>
                  <ProgramCard program={program} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Active Campaigns */}
        <CampaignSection />

        {/* Recent Updates / Gallery */}
        <section className="py-16 md:py-24 bg-white" id="recent-updates" aria-label="Recent Updates">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title={lang === 'en' ? 'Recent Initiatives' : 'नवीन घडामोडी'}
              subtitle={lang === 'en' ? 'Glimpses of our recent work' : 'आमच्या कार्याची काही क्षणचित्रे'}
            />
            <div className="mt-10" data-aos="fade-up">
              <GalleryGrid images={galleryImages} variant="marquee" />
            </div>
            <div className="mt-10 text-center" data-aos="fade-up">
              <Link
                to="/gallery"
                className="inline-flex items-center gap-2 justify-center border-2 border-[#8B1A1A] text-[#8B1A1A] font-semibold px-8 py-3 rounded-xl hover:bg-[#8B1A1A] hover:text-white transition-all duration-200"
              >
                {lang === 'en' ? 'View All Gallery' : 'सर्व फोटो पहा'}
              </Link>
            </div>
          </div>
        </section>

        {/* Awards Section */}
        <AwardSection />

        {/* Impact Stories */}
        <section className="py-16 md:py-24 bg-[#FBF0F0]" id="stories" aria-label="Impact Stories">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title={t('stories.heading')}
              subtitle={t('stories.subheading')}
            />
            <div className="mt-10 overflow-hidden">
              <div className="animate-marquee py-4">
                {[...impactStories, ...impactStories].map((story, i) => (
                  <div key={`${story.id}-${i}`} className="w-[280px] sm:w-[320px] md:w-[450px] mx-3 sm:mx-4 h-full flex-shrink-0">
                    <StoryCard story={story} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA Banner */}
        <section
          className="py-16 md:py-20 bg-[#8B1A1A]"
          id="cta-banner"
          aria-label="Donate call to action"
          data-aos="fade-up"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t('cta_banner.heading')}
            </h2>
            <p className="text-red-100 text-lg mb-8 max-w-xl mx-auto">
              {t('cta_banner.subheading')}
            </p>
            <Link
              to="/donate"
              id="home-cta-donate"
              className="inline-flex items-center justify-center bg-[#D4A017] text-white font-bold px-10 py-4 rounded-xl text-lg hover:bg-[#B8860B] transition-all duration-200 hover:scale-105 shadow-lg min-h-[56px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#8B1A1A]"
            >
              {t('cta_banner.button')} →
            </Link>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;

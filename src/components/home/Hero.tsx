import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown } from 'lucide-react';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
      aria-label="Hero section"
      id="hero"
    >
      {/* Background image */}
      {/* TODO: Replace /images/hero/hero-main.jpg with a real high-quality photo */}
      <img
        src="/images/hero/hero-main.jpg"
        alt="Sankalp Foundation — Community work"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
        onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
      />

      {/* Gradient overlay — maroon toned */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#3A0000]/85 via-[#6B1212]/65 to-[#8B1A1A]/40" />

      {/* Hero content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-2xl">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white text-sm font-medium px-4 py-2 rounded-full mb-6"
            data-aos="fade-down"
            data-aos-duration="500"
          >
            <span className="w-2 h-2 rounded-full bg-[#D4A017] animate-pulse" />
            ध्यास परिवर्तनाचा — Sankalp Foundation
          </div>



          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="100"
          >
            {t('hero.tagline')}
          </h1>

          <p
            className="text-lg sm:text-xl text-red-100 leading-relaxed mb-10 max-w-xl"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="200"
          >
            {t('hero.subTagline')}
          </p>

          <div
            className="flex flex-wrap gap-4"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="300"
          >
            <Link
              to="/donate"
              id="hero-donate-cta"
              className="inline-flex items-center gap-2 justify-center bg-[#D4A017] text-white font-bold px-8 py-4 rounded-xl text-lg hover:bg-[#B8860B] transition-all duration-200 hover:scale-105 shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent min-h-[56px]"
            >
              {t('hero.cta_primary')}
              <ArrowRight size={20} aria-hidden="true" />
            </Link>
            <Link
              to="/programs"
              id="hero-work-cta"
              className="inline-flex items-center gap-2 justify-center border-2 border-white text-white font-semibold px-8 py-4 rounded-xl text-lg hover:bg-white hover:text-[#8B1A1A] transition-all duration-200 min-h-[56px]"
            >
              {t('hero.cta_secondary')}
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/60 animate-bounce">
        <ChevronDown size={24} aria-hidden="true" />
      </div>
    </section>
  );
};

export default Hero;

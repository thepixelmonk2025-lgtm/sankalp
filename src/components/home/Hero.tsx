import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown } from 'lucide-react';

interface HeroSlide {
  image: string;
  badge: { en: string; mr: string };
  tagline: { en: string; mr: string };
  subTagline: { en: string; mr: string };
}

const heroSlides: HeroSlide[] = [
  {
    image: '/images/hero/community-empowerment.png',
    badge: {
      en: 'Community Upliftment — Sankalp Foundation',
      mr: 'ध्यास परिवर्तनाचा — संकल्प फाऊंडेशन',
    },
    tagline: {
      en: 'Empowering Communities, Transforming Lives',
      mr: 'समुदायांना सक्षम करणे, जीवन बदलणे',
    },
    subTagline: {
      en: 'Working hand-in-hand with rural and marginalized families to foster self-reliance, unity, and lasting social development.',
      mr: 'ग्रामीण आणि वंचित समुदायांसोबत कार्य करत, सामाजिक ऐक्य आणि सर्वांगीण विकासासाठी आमचा अविरत प्रयत्न.',
    },
  },
  {
    image: '/images/hero/education-and-future.png',
    badge: {
      en: 'Child Education — Brightening Futures',
      mr: 'शिक्षण हाच खरा विकासाचा पाया',
    },
    tagline: {
      en: 'Inspiring Dreams Through Quality Education',
      mr: 'शिक्षणाचा प्रकाश पोहोचवूया प्रत्येक घरापर्यंत',
    },
    subTagline: {
      en: 'Empowering children in remote and tribal areas with school kits, notebooks, and learning opportunities so no dream is left behind.',
      mr: 'दुर्गम व आदिवासी भागातील होतकरू विद्यार्थ्यांना शालेय साहित्य, वह्या व दप्तर वाटप करून त्यांच्या शिक्षणाला बळ देण्याचा संकल्प.',
    },
  },
  {
    image: '/images/hero/healthcare-and-community-service.png',
    badge: {
      en: 'Healthcare & Nutrition Support',
      mr: 'आरोग्य, पोषण आणि अन्नदान सेवा',
    },
    tagline: {
      en: 'Compassionate Care & Nourishment for All',
      mr: 'अन्नदान म्हणजे जीवनदान, आरोग्य हीच खरी संपदा',
    },
    subTagline: {
      en: 'Providing daily meal support, medical relief, and first-aid facilities to underprivileged families, ashrams, and the elderly.',
      mr: 'निराधार, वृद्ध व गरजू रुग्णांसाठी अन्नछत्र, आरोग्य शिबिरे व औषधोपचार सेवा अखंडपणे सुरू ठेवण्याचा आमचा प्रामाणिक प्रयत्न.',
    },
  },
  {
    image: '/images/hero/women-empowerment.png',
    badge: {
      en: 'Women Empowerment & Livelihood',
      mr: 'महिला सक्षमीकरण आणि स्वावलंबन',
    },
    tagline: {
      en: 'Fostering Independence, Dignity & Skills',
      mr: 'महिलांना आत्मनिर्भर व स्वावलंबी बनवूया',
    },
    subTagline: {
      en: 'Enabling rural women with vocational training, sewing machine distribution, and menstrual hygiene awareness for a dignified life.',
      mr: 'ग्रामीण महिलांना शिलाई मशीन वाटप, कौशल्य प्रशिक्षण आणि सॅनिटरी पॅड वितरणातून त्यांच्या आरोग्याची व सन्मानाची जपणूक.',
    },
  },
];

const Hero = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language as 'en' | 'mr';
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5500); // Change slide every 5.5 seconds
    return () => clearInterval(timer);
  }, []);

  const slide = heroSlides[currentSlide];

  return (
    <section
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
      aria-label="Hero section"
      id="hero"
    >
      {/* Background image slider */}
      {heroSlides.map((s, index) => (
        <img
          key={s.image}
          src={s.image}
          alt={`Sankalp Foundation hero ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-cover object-[75%_center] md:object-center transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
          loading={index === 0 ? "eager" : "lazy"}
        />
      ))}

      {/* Gradient overlay — maroon toned */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#3A0000]/90 via-[#6B1212]/75 to-[#8B1A1A]/45 pointer-events-none" />

      {/* Hero content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-2xl">
          {/* Badge */}
          <div
            key={`badge-${currentSlide}`}
            className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md text-white text-xs sm:text-sm font-semibold px-4 py-2 rounded-full mb-6 transition-all duration-700 animate-fadeIn"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#D4A017] animate-ping" />
            <span>{slide.badge[lang]}</span>
          </div>

          <h1
            key={`title-${currentSlide}`}
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 transition-all duration-700 animate-fadeIn"
          >
            {slide.tagline[lang]}
          </h1>

          <p
            key={`desc-${currentSlide}`}
            className="text-base sm:text-lg md:text-xl text-red-100 leading-relaxed mb-10 max-w-xl transition-all duration-700 animate-fadeIn"
          >
            {slide.subTagline[lang]}
          </p>

          <div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="300"
          >
            <Link
              to="/donate"
              id="hero-donate-cta"
              className="inline-flex items-center gap-2 justify-center bg-[#D4A017] text-white font-bold px-8 py-3.5 sm:py-4 rounded-xl text-base sm:text-lg hover:bg-[#B8860B] transition-all duration-200 hover:scale-[1.02] shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 min-h-[50px] sm:min-h-[56px] w-full sm:w-auto"
            >
              {t('hero.cta_primary')}
              <ArrowRight size={20} aria-hidden="true" />
            </Link>
            <Link
              to="/programs"
              id="hero-work-cta"
              className="inline-flex items-center gap-2 justify-center border-2 border-white text-white font-semibold px-8 py-3.5 sm:py-4 rounded-xl text-base sm:text-lg hover:bg-white hover:text-[#8B1A1A] transition-all duration-200 min-h-[50px] sm:min-h-[56px] w-full sm:w-auto"
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

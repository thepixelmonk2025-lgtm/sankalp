import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { Image as ImageIcon, Newspaper } from 'lucide-react';
import GalleryGrid from '../components/shared/GalleryGrid';
import SectionHeading from '../components/shared/SectionHeading';
import MediaCoverageSection from '../components/home/MediaCoverageSection';
import { galleryImages, galleryCategories } from '../data/gallery';

const Gallery: React.FC = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language as 'en' | 'mr';
  const [activeTab, setActiveTab] = useState<'photos' | 'news'>('photos');
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered =
    activeCategory === 'All'
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <>
      <Helmet>
        <title>Gallery & Media Coverage — Sankalp Foundation</title>
        <meta
          name="description"
          content="Photos and newspaper coverage of Sankalp Foundation's programs, events, and community work across Maharashtra."
        />
      </Helmet>

      <main id="main-content" className="pt-16">
        {/* Page hero */}
        <div className="bg-[#8B1A1A] py-16 sm:py-20 px-4 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4" data-aos="fade-up">
            {lang === 'en' ? 'Gallery & Media Coverage' : 'गॅलरी आणि वृत्तपत्र प्रसिद्धी'}
          </h1>
          <div className="h-1.5 w-16 bg-[#D4A017] rounded-full mx-auto mb-4" />
          <p className="text-red-100 text-base sm:text-lg max-w-xl mx-auto leading-relaxed" data-aos="fade-up" data-aos-delay="100">
            {lang === 'en' 
              ? 'Explore our ground initiatives, events, and prominent newspaper coverage' 
              : 'आमच्या सामाजिक उपक्रमांचे फोटो व नामांकित वृत्तपत्रांमधील बातम्या'}
          </p>

          {/* Tab Selector Buttons */}
          <div className="flex justify-center items-center gap-3 sm:gap-4 mt-8" data-aos="fade-up" data-aos-delay="200">
            <button
              type="button"
              onClick={() => setActiveTab('photos')}
              className={`flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-bold text-sm sm:text-base transition-all shadow-md ${
                activeTab === 'photos'
                  ? 'bg-white text-[#8B1A1A]'
                  : 'bg-white/15 text-white hover:bg-white/25 border border-white/20'
              }`}
            >
              <ImageIcon size={18} />
              <span>{lang === 'en' ? 'Photos Gallery' : 'छायाचित्रे (Photos)'}</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('news')}
              className={`flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-bold text-sm sm:text-base transition-all shadow-md ${
                activeTab === 'news'
                  ? 'bg-[#D4A017] text-[#1A1A1A]'
                  : 'bg-white/15 text-white hover:bg-white/25 border border-white/20'
              }`}
            >
              <Newspaper size={18} />
              <span>{lang === 'en' ? 'News & Press' : 'वृत्तपत्र बातम्या (Media)'}</span>
            </button>
          </div>
        </div>

        {activeTab === 'photos' ? (
          <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading 
              title={lang === 'en' ? 'Program Photos' : 'उपक्रमांची छायाचित्रे'} 
              subtitle={lang === 'en' ? 'Moments captured during our ground programs and distribution drives' : 'तळागाळातील सेवाकार्यादरम्यानची काही क्षणचित्रे'}
            />

            {/* Category filter */}
            <div className="flex flex-wrap justify-center gap-2 my-8" role="group" aria-label="Filter by category">
              {galleryCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  id={`gallery-filter-${cat.toLowerCase()}`}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-colors min-h-[40px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B1A1A] ${
                    activeCategory === cat
                      ? 'bg-[#8B1A1A] text-white'
                      : 'bg-[#FBF0F0] text-[#8B1A1A] hover:bg-[#8B1A1A]/10'
                  }`}
                  aria-pressed={activeCategory === cat}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Grid */}
            <div data-aos="fade-up">
              <GalleryGrid images={filtered} />
            </div>

            {filtered.length === 0 && (
              <p className="text-center text-[#5A5A5A] py-16">
                No photos in this category yet.
              </p>
            )}
          </section>
        ) : (
          <div className="py-4">
            <MediaCoverageSection showHeading={false} />
          </div>
        )}
      </main>
    </>
  );
};

export default Gallery;

import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import GalleryGrid from '../components/shared/GalleryGrid';
import SectionHeading from '../components/shared/SectionHeading';
import { galleryImages, galleryCategories } from '../data/gallery';

const Gallery: React.FC = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered =
    activeCategory === 'All'
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <>
      <Helmet>
        <title>Gallery & Events — Sankalp Foundation</title>
        <meta
          name="description"
          content="Photos from Sankalp Foundation's programs, events, and community work across Maharashtra."
        />
      </Helmet>

      <main id="main-content" className="pt-16">
        {/* Page hero */}
        <div className="bg-[#8B1A1A] py-20 px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" data-aos="fade-up">
            {t('gallery.title')}
          </h1>
          <div className="h-1 w-16 bg-[#D4A017] rounded-full mx-auto mb-4" />
          <p className="text-red-100 text-lg max-w-xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            {t('gallery.subtitle')}
          </p>
        </div>

        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Photos" />

          {/* Category filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-10" role="group" aria-label="Filter by category">
            {galleryCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                id={`gallery-filter-${cat.toLowerCase()}`}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B1A1A] ${
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
      </main>
    </>
  );
};

export default Gallery;

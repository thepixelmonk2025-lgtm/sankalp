import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { Image as ImageIcon, Newspaper, Video } from 'lucide-react';
import GalleryGrid from '../components/shared/GalleryGrid';
import SectionHeading from '../components/shared/SectionHeading';
import MediaCoverageSection from '../components/home/MediaCoverageSection';
import { galleryImages, galleryCategories } from '../data/gallery';

interface FieldVideo {
  id: string;
  titleEn: string;
  titleMr: string;
  src: string;
  descriptionEn: string;
  descriptionMr: string;
  location: string;
}

const fieldVideos: FieldVideo[] = [
  {
    id: 'field-1',
    titleEn: 'Field Social Work & Village Interaction',
    titleMr: 'तळागाळातील सेवाकार्य व ग्रामस्थांशी संवाद',
    src: '/videos/sankalp-field-initiative-1.mp4',
    descriptionEn: 'Volunteers and team members connecting with villagers and children in remote areas of Maharashtra.',
    descriptionMr: 'दुर्गम भागातील ग्रामस्थांशी, महिलांशी व बालकांशी संवाद साधून त्यांच्या गरजा जाणून घेताना संकल्प टीम.',
    location: 'Maharashtra / महाराष्ट्र'
  },
  {
    id: 'field-2',
    titleEn: 'Ground Mission & Community Outreach',
    titleMr: 'ग्रामीण भागातील थेट मदत व समाजकार्य',
    src: '/videos/sankalp-field-initiative-2.mp4',
    descriptionEn: 'Sankalp Foundation team on the ground coordinating assistance and school outreach.',
    descriptionMr: 'संकल्प फाउंडेशनची टीम थेट गावागावांमध्ये जाऊन शैक्षणिक व सामाजिक मदत पुरवताना.',
    location: 'Rural Outreach / ग्रामीण उपक्रम'
  },
  {
    id: 'field-3',
    titleEn: 'Volunteer Action & Community Engagement',
    titleMr: 'स्वयंसेवक सहभाग आणि उपक्रम क्षणचित्रे',
    src: '/videos/sankalp-community-work-3.mp4',
    descriptionEn: 'Active moments of distribution, village meetings, and community empowerment activities.',
    descriptionMr: 'शालेय साहित्य संकलन, मदत वाटप व समाजप्रबोधन करताना स्वयंसेवकांचा सक्रिय सहभाग.',
    location: 'Field Campaign / प्रत्यक्ष कार्य'
  },
  {
    id: 'field-4',
    titleEn: 'Special Drive & Foundation Activity',
    titleMr: 'विशेष मोहीम आणि फाउंडेशन उपक्रम',
    src: '/videos/sankalp-activity-4.mp4',
    descriptionEn: 'Documenting the spirit of social service, tree plantation, and welfare outreach.',
    descriptionMr: 'वृक्षारोपण, अन्नदान व सामाजिक उपक्रमांमधील चैतन्यमय क्षण आणि प्रत्यक्ष कार्यवाही.',
    location: 'Social Welfare Drive'
  }
];

const Gallery: React.FC = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language as 'en' | 'mr';
  const [activeTab, setActiveTab] = useState<'photos' | 'news' | 'videos'>('photos');
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered =
    activeCategory === 'All'
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <>
      <Helmet>
        <title>Gallery, Media & Videos — Sankalp Foundation</title>
        <meta
          name="description"
          content="Photos, field videos, and newspaper coverage of Sankalp Foundation's programs, events, and community work across Maharashtra."
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
              ? 'Explore our ground initiatives, field videos, events, and prominent newspaper coverage' 
              : 'आमच्या सामाजिक उपक्रमांचे फोटो, प्रत्यक्ष फील्ड व्हिडिओ व वृत्तपत्रांमधील बातम्या'}
          </p>

          {/* Tab Selector Buttons */}
          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 mt-8" data-aos="fade-up" data-aos-delay="200">
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
              <span>{lang === 'en' ? 'Photos' : 'छायाचित्रे'}</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('videos')}
              className={`flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-bold text-sm sm:text-base transition-all shadow-md ${
                activeTab === 'videos'
                  ? 'bg-[#D4A017] text-[#1A1A1A]'
                  : 'bg-white/15 text-white hover:bg-white/25 border border-white/20'
              }`}
            >
              <Video size={18} />
              <span>{lang === 'en' ? 'Videos' : 'व्हिडिओ'}</span>
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
              <span>{lang === 'en' ? 'News & Press' : 'वृत्तपत्र बातम्या'}</span>
            </button>
          </div>
        </div>

        {activeTab === 'photos' && (
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
        )}

        {activeTab === 'videos' && (
          <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading 
              title={lang === 'en' ? 'Field Action Videos' : 'प्रत्यक्ष सेवाकार्य व्हिडिओ'} 
              subtitle={lang === 'en' ? 'Watch our volunteers and beneficiaries directly from the ground' : 'तळागाळातील कार्य आणि प्रत्यक्ष उपक्रमांचे व्हिडिओ'}
            />

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
              {fieldVideos.map((vid, idx) => (
                <div
                  key={vid.id}
                  data-aos="fade-up"
                  data-aos-delay={idx * 150}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 flex flex-col hover:shadow-2xl transition-all duration-300"
                >
                  <div className="relative aspect-[16/9] bg-black overflow-hidden flex items-center justify-center">
                    <video
                      controls
                      preload="metadata"
                      className="w-full h-full object-contain"
                      playsInline
                    >
                      <source src={vid.src} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-semibold px-2.5 py-1 rounded bg-[#FBF0F0] text-[#8B1A1A]">
                        {vid.location}
                      </span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#8B1A1A] mb-2">
                      {lang === 'en' ? vid.titleEn : vid.titleMr}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                      {lang === 'en' ? vid.descriptionEn : vid.descriptionMr}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {activeTab === 'news' && (
          <div className="py-4">
            <MediaCoverageSection showHeading={false} />
          </div>
        )}
      </main>
    </>
  );
};

export default Gallery;

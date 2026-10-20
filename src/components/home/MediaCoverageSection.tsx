import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Newspaper, Calendar, ZoomIn, X, ExternalLink } from 'lucide-react';
import SectionHeading from '../shared/SectionHeading';
import { mediaArticles } from '../../data/media';
import type { MediaArticle } from '../../data/media';

interface MediaCoverageSectionProps {
  limit?: number;
  showHeading?: boolean;
}

const MediaCoverageSection: React.FC<MediaCoverageSectionProps> = ({ limit, showHeading = true }) => {
  const { i18n } = useTranslation();
  const lang = i18n.language as 'en' | 'mr';
  const [selectedArticle, setSelectedArticle] = useState<MediaArticle | null>(null);

  const displayedArticles = limit ? mediaArticles.slice(0, limit) : mediaArticles;

  return (
    <section className="py-16 md:py-24 bg-white" id="media-coverage" aria-label="Media & Newspaper Coverage">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {showHeading && (
          <SectionHeading
            title={lang === 'en' ? 'Media & News Coverage' : 'वृत्तपत्रांमधील संकल्प'}
            subtitle={
              lang === 'en'
                ? 'Our community impact highlighted across prominent print media and publications'
                : 'विविध नामांकित वृत्तपत्रांनी दखल घेतलेली संकल्प फाऊंडेशनच्या कार्याची क्षणचित्रे'
            }
          />
        )}

        {/* Newspaper clippings grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {displayedArticles.map((article, index) => (
            <div
              key={article.id}
              data-aos="fade-up"
              data-aos-delay={(index % 3) * 100}
              className="bg-[#FFFDFD] rounded-2xl overflow-hidden border border-[#8B1A1A]/15 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col group hover:-translate-y-1"
            >
              {/* Image Preview with click to zoom */}
              <div 
                className="relative aspect-[4/3] bg-gray-100 overflow-hidden cursor-pointer"
                onClick={() => setSelectedArticle(article)}
              >
                <img
                  src={article.image}
                  alt={article.title[lang]}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-semibold text-sm">
                  <ZoomIn size={22} className="text-[#D4A017]" />
                  <span>{lang === 'en' ? 'Click to Read' : 'बातमी मोठी करून वाचा'}</span>
                </div>
                
                {/* Newspaper Tag */}
                <div className="absolute top-3 left-3 bg-[#8B1A1A] text-white px-3 py-1 rounded-full text-xs font-bold shadow-md flex items-center gap-1.5">
                  <Newspaper size={13} className="text-[#D4A017]" />
                  <span>{article.newspaper[lang]}</span>
                </div>
              </div>

              {/* Text content */}
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-2">
                    <Calendar size={13} className="text-[#8B1A1A]" />
                    <span>{article.date[lang]}</span>
                  </div>

                  <h3 className="font-bold text-[#1A1A1A] text-lg mb-2 leading-snug line-clamp-2 group-hover:text-[#8B1A1A] transition-colors">
                    {article.title[lang]}
                  </h3>

                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed line-clamp-3 mb-4">
                    {article.summary[lang]}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedArticle(article)}
                  className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl border border-[#8B1A1A]/20 bg-[#FFF5F5] text-[#8B1A1A] hover:bg-[#8B1A1A] hover:text-white font-semibold text-xs sm:text-sm transition-all duration-200 mt-2"
                >
                  <ExternalLink size={15} />
                  <span>{lang === 'en' ? 'View Full Clipping' : 'संपूर्ण बातमी पहा'}</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox / Full Size Modal */}
      {selectedArticle && (
        <div 
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fadeIn"
          onClick={() => setSelectedArticle(null)}
        >
          <div 
            className="relative bg-white rounded-2xl max-w-4xl w-full max-h-[92vh] overflow-hidden flex flex-col shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="p-4 sm:p-5 border-b border-gray-200 flex items-center justify-between bg-[#FFF8F8]">
              <div>
                <span className="text-xs font-bold uppercase text-[#8B1A1A] tracking-wider">
                  {selectedArticle.newspaper[lang]} • {selectedArticle.date[lang]}
                </span>
                <h3 className="font-bold text-[#1A1A1A] text-base sm:text-lg leading-snug">
                  {selectedArticle.title[lang]}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedArticle(null)}
                className="p-2 rounded-full hover:bg-gray-200 text-gray-700 transition-colors ml-4"
                aria-label="Close dialog"
              >
                <X size={24} />
              </button>
            </div>

            {/* Scrollable Image Area */}
            <div className="overflow-y-auto p-4 sm:p-6 flex items-center justify-center bg-gray-50">
              <img
                src={selectedArticle.image}
                alt={selectedArticle.title[lang]}
                className="max-w-full h-auto rounded-lg shadow-md max-h-[72vh] object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default MediaCoverageSection;

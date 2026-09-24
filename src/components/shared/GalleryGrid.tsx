import { useState, useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import type { GalleryImage } from '../../data/gallery';

interface GalleryGridProps {
  images: GalleryImage[];
  variant?: 'grid' | 'marquee';
}

const GalleryGrid: React.FC<GalleryGridProps> = ({ images, variant = 'grid' }) => {
  const { i18n } = useTranslation();
  const lang = i18n.language as 'en' | 'mr';
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const goNext = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % images.length);
    }
  }, [lightboxIndex, images.length]);

  const goPrev = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + images.length) % images.length);
    }
  }, [lightboxIndex, images.length]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightboxIndex, goNext, goPrev]);

  // Removed body scroll lock based on user request

  return (
    <>
      {variant === 'marquee' ? (
        <div className="overflow-hidden py-4">
          <div className="animate-marquee">
            {[...images, ...images].map((img, index) => (
              <button
                key={`${img.id}-${index}`}
                onClick={() => openLightbox(index % images.length)}
                className="group relative aspect-[4/3] w-[280px] md:w-[360px] mx-3 md:mx-4 overflow-hidden rounded-xl focus-visible:ring-2 focus-visible:ring-[#8B1A1A] focus-visible:outline-none flex-shrink-0"
                aria-label={`View photo: ${img.alt[lang]}`}
                id={`gallery-img-${img.id}-${index}`}
              >
                <img
                  src={img.src}
                  alt={img.alt[lang]}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                  {img.caption && (
                    <p className="text-white text-sm font-medium leading-tight">
                      {img.caption[lang]}
                    </p>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {images.map((img, index) => (
            <button
              key={img.id}
              onClick={() => openLightbox(index)}
              className="group relative aspect-[4/3] overflow-hidden rounded-xl focus-visible:ring-2 focus-visible:ring-[#8B1A1A] focus-visible:outline-none"
              aria-label={`View photo: ${img.alt[lang]}`}
              id={`gallery-img-${img.id}`}
            >
              <img
                src={img.src}
                alt={img.alt[lang]}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                {img.caption && (
                  <p className="text-white text-sm font-medium leading-tight">
                    {img.caption[lang]}
                  </p>
                )}
              </div>
            </button>
          ))}
        </div>
      )}

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-label="Photo lightbox"
          onClick={closeLightbox}
        >
          <div className="w-full max-w-5xl mx-auto py-12 md:py-20 px-4">
            <div
              className="relative w-full flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close */}
              <button
                onClick={closeLightbox}
                className="absolute -top-10 right-0 text-white text-3xl hover:text-[#D4A017] transition-colors focus-visible:outline-none z-10"
                aria-label="Close lightbox"
                id="lightbox-close"
              >
                ✕
              </button>

              {/* Image */}
              <img
                src={images[lightboxIndex].src}
                alt={images[lightboxIndex].alt[lang]}
                className="w-auto max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl"
              />

              {/* Caption & Description */}
              <div className="w-full max-w-3xl mx-auto mt-6 px-4">
                {images[lightboxIndex].caption && (
                  <h3 className="text-white text-center text-xl font-bold">
                    {images[lightboxIndex].caption![lang]}
                  </h3>
                )}
                {images[lightboxIndex].description && (
                  <p className="text-gray-300 text-center mt-3 text-sm md:text-base leading-relaxed">
                    {images[lightboxIndex].description![lang]}
                  </p>
                )}
              </div>

              {/* Prev / Next */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={goPrev}
                    className="fixed left-2 top-1/2 -translate-y-1/2 md:absolute md:-left-12 text-white text-5xl hover:text-[#D4A017] transition-colors focus-visible:outline-none drop-shadow-lg"
                    aria-label="Previous photo"
                    id="lightbox-prev"
                  >
                    ‹
                  </button>
                  <button
                    onClick={goNext}
                    className="fixed right-2 top-1/2 -translate-y-1/2 md:absolute md:-right-12 text-white text-5xl hover:text-[#D4A017] transition-colors focus-visible:outline-none drop-shadow-lg"
                    aria-label="Next photo"
                    id="lightbox-next"
                  >
                    ›
                  </button>
                </>
              )}

              {/* Counter */}
              <p className="text-white/50 text-center mt-6 text-sm">
                {lightboxIndex + 1} / {images.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GalleryGrid;

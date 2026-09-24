import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="fixed bottom-24 right-6 z-50 flex items-center justify-center w-12 h-12 rounded-full bg-[#8B1A1A] text-white shadow-lg hover:shadow-xl hover:bg-[#6B1212] hover:scale-110 transition-all duration-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#D4A017] focus-visible:ring-offset-2"
    >
      <ArrowUp size={24} aria-hidden="true" />
    </button>
  );
};

export default GoToTop;

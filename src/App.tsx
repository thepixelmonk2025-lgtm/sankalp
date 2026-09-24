import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import WhatsAppFloat from './components/layout/WhatsAppFloat';
import GoToTop from './components/layout/GoToTop';

import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import Gallery from './pages/Gallery';
import Donate from './pages/Donate';
import Volunteer from './pages/Volunteer';
import Contact from './pages/Contact';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
}

// AOS initializer
function AOSInit() {
  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: 'ease-out-cubic',
      once: true,
      offset: 60,
    });
  }, []);
  return null;
}

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <AOSInit />
        <ScrollToTop />

        {/* Skip to main content — accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-white focus:text-[#8B1A1A] focus:px-4 focus:py-2 focus:rounded-lg focus:font-semibold focus:shadow-lg"
        >
          Skip to main content
        </a>

        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/contact" element={<Contact />} />
          {/* 404 fallback */}
          <Route
            path="*"
            element={
              <main className="pt-32 pb-24 text-center px-4">
                <h1 className="text-5xl font-bold text-[#8B1A1A] mb-4">404</h1>
                <p className="text-[#5A5A5A] text-lg mb-8">
                  Page not found. Let's get you back.
                </p>
                <a
                  href="/"
                  className="inline-flex items-center bg-[#8B1A1A] text-white font-semibold px-8 py-3 rounded-xl hover:bg-[#6B1212] transition-colors"
                >
                  ← Back to Home
                </a>
              </main>
            }
          />
        </Routes>

        <Footer />
        <WhatsAppFloat />
        <GoToTop />
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;

import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, Globe } from 'lucide-react';

const navLinks = [
  { to: '/', labelKey: 'nav.home', id: 'nav-home' },
  { to: '/about', labelKey: 'nav.about', id: 'nav-about' },
  { to: '/programs', labelKey: 'nav.programs', id: 'nav-programs' },
  { to: '/gallery', labelKey: 'nav.gallery', id: 'nav-gallery' },
  { to: '/volunteer', labelKey: 'nav.volunteer', id: 'nav-volunteer' },
  { to: '/contact', labelKey: 'nav.contact', id: 'nav-contact' },
];

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const toggleLang = () => {
    const next = i18n.language === 'en' ? 'mr' : 'en';
    i18n.changeLanguage(next);
    localStorage.setItem('sankalp_lang', next);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white/97 backdrop-blur-sm'
      }`}
      role="banner"
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center flex-shrink-0"
          onClick={closeMenu}
          id="nav-logo"
          aria-label="Sankalp Foundation — Home"
        >
          <img
            src="/images/logo.png"
            alt="Sankalp Foundation logo"
            className="h-14 sm:h-16 w-auto object-contain py-1"
          />
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden lg:flex items-center gap-6" role="list">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === '/'}
                id={link.id}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors duration-200 relative group ${
                    isActive
                      ? 'text-[#8B1A1A] font-semibold'
                      : 'text-[#1A1A1A] hover:text-[#8B1A1A]'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {t(link.labelKey)}
                    <span
                      className={`absolute -bottom-1 left-0 h-0.5 bg-[#8B1A1A] rounded-full transition-all duration-300 ${
                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Right: lang toggle + Donate */}
        <div className="flex items-center gap-2">
          {/* Language toggle — always visible */}
          <button
            onClick={toggleLang}
            id="nav-lang-toggle"
            className="flex items-center gap-1.5 text-sm font-medium px-3 py-1.5 rounded-full border border-[#8B1A1A] text-[#8B1A1A] hover:bg-[#FBF0F0] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B1A1A]"
            aria-label="Toggle language"
          >
            <Globe size={14} aria-hidden="true" />
            {t('nav.langToggle')}
          </button>

          {/* Donate CTA */}
          <Link
            to="/donate"
            id="nav-donate"
            className="hidden sm:inline-flex items-center justify-center bg-[#8B1A1A] text-white font-semibold px-5 py-2 rounded-lg hover:bg-[#6B1212] transition-colors text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B1A1A] focus-visible:ring-offset-2 min-h-[44px] shadow-sm"
          >
            {t('nav.donate')}
          </Link>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 rounded-md text-[#1A1A1A] hover:bg-[#FBF0F0] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B1A1A]"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            id="nav-hamburger"
          >
            {menuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        } bg-white border-t border-gray-100 shadow-lg`}
        aria-hidden={!menuOpen}
      >
        <ul className="flex flex-col px-4 py-4 gap-1" role="list">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === '/'}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `block py-2.5 px-3 rounded-lg text-base transition-colors ${
                    isActive
                      ? 'bg-[#FBF0F0] text-[#8B1A1A] font-semibold'
                      : 'text-[#1A1A1A] hover:bg-[#FBF0F0] hover:text-[#8B1A1A]'
                  }`
                }
              >
                {t(link.labelKey)}
              </NavLink>
            </li>
          ))}
          <li className="pt-2 border-t border-gray-100 mt-1">
            <Link
              to="/donate"
              onClick={closeMenu}
              className="block w-full text-center bg-[#8B1A1A] text-white font-semibold px-5 py-3 rounded-lg hover:bg-[#6B1212] transition-colors"
              id="nav-donate-mobile"
            >
              {t('nav.donate')}
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;

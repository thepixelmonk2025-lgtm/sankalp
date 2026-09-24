import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { MapPin, Phone, Mail, MessageCircle, Share2, Globe, PlayCircle } from 'lucide-react';

const quickLinks = [
  { to: '/', labelKey: 'nav.home' },
  { to: '/about', labelKey: 'nav.about' },
  { to: '/programs', labelKey: 'nav.programs' },
  { to: '/gallery', labelKey: 'nav.gallery' },
  { to: '/donate', labelKey: 'nav.donate' },
  { to: '/volunteer', labelKey: 'nav.volunteer' },
  { to: '/contact', labelKey: 'nav.contact' },
];

// TODO: Replace with real social links from client
const socialLinks = [
  { label: 'Facebook', href: 'https://facebook.com', Icon: Share2 },      // TODO: real link
  { label: 'Instagram', href: 'https://instagram.com', Icon: Globe },      // TODO: real link
  { label: 'YouTube', href: 'https://youtube.com', Icon: PlayCircle },     // TODO: real link
];

const Footer = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();
  const whatsappNumber = '919999999999'; // TODO: replace with real number
  const whatsappMsg = encodeURIComponent(t('whatsapp.message'));

  return (
    <footer className="bg-[#6B1212] text-white" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Column 1: Brand */}
          <div>
            <Link to="/" aria-label="Sankalp Foundation Home" className="inline-block mb-4">
              <img
                src="/images/logo.png"
                alt="Sankalp Foundation"
                className="h-20 sm:h-24 w-auto object-contain"
              />
            </Link>
            <p className="text-red-100 text-sm leading-relaxed mb-5">
              {t('footer.tagline')}
            </p>
            {/* Social icons */}
            <div className="flex gap-3" aria-label="Social media links">
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="h-9 w-9 bg-white/10 hover:bg-white/25 rounded-full flex items-center justify-center transition-colors"
                >
                  <Icon size={16} aria-hidden="true" />
                </a>
              ))}
              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="h-9 w-9 bg-white/10 hover:bg-white/25 rounded-full flex items-center justify-center transition-colors"
              >
                <MessageCircle size={16} aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-bold text-base mb-4">{t('footer.quick_links')}</h3>
            <ul className="space-y-2" role="list">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-red-200 hover:text-white text-sm transition-colors hover:underline underline-offset-2"
                  >
                    {t(link.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 className="font-bold text-base mb-4">{t('footer.contact')}</h3>
            <address className="not-italic space-y-3 text-red-100 text-sm">
              <div className="flex items-start gap-2">
                <MapPin size={15} className="mt-0.5 flex-shrink-0 text-[#D4A017]" aria-hidden="true" />
                <span>{t('footer.address')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={15} className="flex-shrink-0 text-[#D4A017]" aria-hidden="true" />
                <a href={`tel:${t('footer.phone')}`} className="hover:text-white transition-colors">
                  {t('footer.phone')}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={15} className="flex-shrink-0 text-[#D4A017]" aria-hidden="true" />
                <a href={`mailto:${t('footer.email')}`} className="hover:text-white transition-colors">
                  {t('footer.email')}
                </a>
              </div>
            </address>
            <div className="mt-5 pt-4 border-t border-white/20 text-red-200 text-xs space-y-1">
              <p>Reg. No: {t('footer.reg')}</p>
              <p>12A &amp; 80G Certified NGO</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-red-200 text-xs">
          <p>{t('footer.copyright').replace('2024', String(year))}</p>
          <p>
            Built with ❤️ by{' '}
            <a
              href="https://thepixelmonk.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors underline underline-offset-2"
            >
              The Pixel Monk
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

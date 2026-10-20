import { useTranslation } from 'react-i18next';
import { Award, Briefcase } from 'lucide-react';

interface Advisor {
  nameMr: string;
  nameEn: string;
  roleMr: string;
  roleEn: string;
}

const advisors: Advisor[] = [
  {
    nameMr: 'श्री. सुशील डफळ',
    nameEn: 'Mr. Sushil Dafal',
    roleMr: 'उद्योजक / अध्यक्ष, समन्वय उरमोडी विभाग क्रिकेट असोसिएशन',
    roleEn: 'Entrepreneur / President, Samanway Urmodi Vibhag Cricket Association',
  },
  {
    nameMr: 'श्री. सचिन देशमुख',
    nameEn: 'Mr. Sachin Deshmukh',
    roleMr: 'उद्योजक / संचालक, हॉटेल पल्लवी / हॉटेल श्री कृष्णा',
    roleEn: 'Entrepreneur / Director, Hotel Pallavi & Hotel Shri Krishna',
  },
  {
    nameMr: 'श्री. कल्पेश सकपाळ',
    nameEn: 'Mr. Kalpesh Sakpal',
    roleMr: 'उद्योजक / अध्यक्ष, मराठा उद्योजक लॉबी, पालघर',
    roleEn: 'Entrepreneur / President, Maratha Entrepreneurs Lobby, Palghar',
  },
  {
    nameMr: 'श्री. भानुदास निकम',
    nameEn: 'Mr. Bhanudas Nikam',
    roleMr: 'कविवर्य / अध्यक्ष, आधार फाऊंडेशन',
    roleEn: 'Eminent Poet / President, Aadhar Foundation',
  },
  {
    nameMr: 'श्री. नवनाथ गवळी',
    nameEn: 'Mr. Navnath Gawali',
    roleMr: 'उद्योजक / संचालक, हॉटेल क्लासिक रेस्टॉरंट',
    roleEn: 'Entrepreneur / Director, Hotel Classic Restaurant',
  },
  {
    nameMr: 'श्री. अशोक कदम',
    nameEn: 'Mr. Ashok Kadam',
    roleMr: 'उद्योजक / सेवानिवृत्त आर्मी अधिकारी',
    roleEn: 'Entrepreneur / Retired Indian Army Officer',
  },
  {
    nameMr: 'श्री. ओंकार साळुंखे',
    nameEn: 'Mr. Omkar Salunkhe',
    roleMr: 'उद्योजक / संचालक, ओंकार इंडस्ट्रीज',
    roleEn: 'Entrepreneur / Director, Omkar Industries',
  },
  {
    nameMr: 'श्री. सागर कदम',
    nameEn: 'Mr. Sagar Kadam',
    roleMr: 'उद्योजक / संचालक, KADNEX सर्व्हिसेस',
    roleEn: 'Entrepreneur / Director, KADNEX Services',
  },
];

const AdvisorsMarquee = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language as 'en' | 'mr';

  // Double list for continuous seamless loop
  const marqueeList = [...advisors, ...advisors];

  return (
    <section className="py-8 sm:py-12 bg-gradient-to-r from-[#FFF5F5] via-white to-[#FFF5F5] border-y border-[#8B1A1A]/10 overflow-hidden" aria-label="Advisors and Mentors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-5 sm:mb-6 text-center">
        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 rounded-full bg-[#8B1A1A]/10 text-[#8B1A1A] font-semibold text-xs uppercase tracking-wider mb-2">
          <Award size={14} className="text-[#D4A017] shrink-0" />
          <span>{lang === 'en' ? 'Honorary Mentors & Advisors' : 'मार्गदर्शक मंडळ'}</span>
        </div>
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#1A1A1A]">
          {lang === 'en' ? 'Our Respected Mentors & Advisors' : 'मार्गदर्शक'}
        </h3>
        <p className="text-gray-500 text-xs sm:text-sm mt-1 max-w-xl mx-auto">
          {lang === 'en' ? 'Distinguished personalities and entrepreneurs guiding our journey' : 'संस्थेच्या सामाजिक वाटचालीस बहुमूल्य मार्गदर्शन करणारे सन्माननीय उद्योजक व मान्यवर'}
        </p>
      </div>

      {/* Marquee Wrapper */}
      <div className="relative w-full overflow-hidden py-2 sm:py-3">
        {/* Soft edge blur fades */}
        <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-24 bg-gradient-to-r from-[#FFF5F5] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-24 bg-gradient-to-l from-[#FFF5F5] to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee py-1.5 flex items-center">
          {marqueeList.map((advisor, index) => (
            <div
              key={`${advisor.nameEn}-${index}`}
              className="mx-2.5 sm:mx-4 flex-shrink-0 bg-white border border-[#8B1A1A]/15 rounded-xl sm:rounded-2xl px-4 sm:px-5 py-3 sm:py-4 shadow-sm hover:shadow-md hover:border-[#8B1A1A]/40 transition-all duration-300 w-[260px] sm:w-[320px] flex items-start gap-2.5 sm:gap-3"
            >
              <div className="w-10 h-10 rounded-xl bg-[#FFF0F0] text-[#8B1A1A] flex items-center justify-center shrink-0 border border-[#8B1A1A]/20">
                <Briefcase size={18} className="text-[#8B1A1A]" />
              </div>
              <div className="overflow-hidden">
                <h4 className="font-bold text-[#1A1A1A] text-sm sm:text-base leading-snug truncate">
                  {lang === 'en' ? advisor.nameEn : advisor.nameMr}
                </h4>
                <p className="text-[#8B1A1A] text-xs font-medium leading-relaxed line-clamp-2 mt-0.5">
                  {lang === 'en' ? advisor.roleEn : advisor.roleMr}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvisorsMarquee;

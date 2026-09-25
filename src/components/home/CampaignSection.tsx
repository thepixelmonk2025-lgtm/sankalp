import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import SectionHeading from '../shared/SectionHeading';

const campaigns = [
  {
    id: 'school-kit',
    titleEn: 'School Kit Donation Drive',
    titleMr: 'शालेय साहित्य वाटप मोहीम',
    descEn: 'Support our initiative to provide essential school supplies to underprivileged children in rural areas, empowering them to continue their education without barriers.',
    descMr: 'ग्रामीण भागातील गरजू आणि होतकरू विद्यार्थ्यांना शालेय साहित्य पुरवण्यासाठी आमच्या मोहिमेला साथ द्या, जेणेकरून त्यांच्या शिक्षणात कोणताही खंड पडणार नाही.',
    image: '/images/campaigns/school-kit-donation.jpg',
  },
  {
    id: 'sanitary-pad',
    titleEn: 'Sanitary Pad Distribution',
    titleMr: 'सॅनिटरी पॅड वाटप मोहीम',
    descEn: 'Join us in promoting menstrual hygiene and health awareness among women and girls in rural communities by providing them with free sanitary pads.',
    descMr: 'ग्रामीण भागातील महिला आणि मुलींमध्ये मासिक पाळीबद्दल आरोग्यविषयक जागरूकता निर्माण करण्यासाठी आणि त्यांना सॅनिटरी पॅड मोफत वाटप करण्यासाठी आम्हाला मदत करा.',
    image: '/images/campaigns/sanitary-pad-donation.jpg',
  }
];

const CampaignSection = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language as 'en' | 'mr';

  return (
    <section className="py-16 md:py-24 bg-[#FFF5F5]" id="active-campaigns" aria-label="Active Campaigns">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={lang === 'en' ? 'Active Campaigns' : 'सध्या सुरू असलेल्या मोहिमा'}
          subtitle={lang === 'en' ? 'Help us make a difference today' : 'आजच मदत करा आणि एक सकारात्मक बदल घडवा'}
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {campaigns.map((campaign, index) => (
            <div 
              key={campaign.id}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="bg-white rounded-2xl overflow-hidden shadow-lg border border-[#8B1A1A]/10 flex flex-col group hover:shadow-2xl transition-all duration-300"
            >
              {/* Campaign Image */}
              <div className="relative aspect-[16/9] sm:aspect-[4/3] overflow-hidden bg-gray-100">
                <img 
                  src={campaign.image} 
                  alt={lang === 'en' ? campaign.titleEn : campaign.titleMr} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 right-4 bg-[#D4A017] text-white px-3 py-1 rounded-full text-sm font-bold shadow-md">
                  {lang === 'en' ? 'Active' : 'सुरू आहे'}
                </div>
              </div>

              {/* Campaign Content */}
              <div className="p-6 sm:p-8 flex flex-col flex-grow">
                <h3 className="text-xl sm:text-2xl font-bold text-[#8B1A1A] mb-3">
                  {lang === 'en' ? campaign.titleEn : campaign.titleMr}
                </h3>
                <p className="text-gray-600 mb-8 flex-grow leading-relaxed">
                  {lang === 'en' ? campaign.descEn : campaign.descMr}
                </p>
                
                <Link
                  to="/donate"
                  className="inline-flex items-center justify-center gap-2 w-full bg-[#8B1A1A] text-white font-bold px-6 py-4 rounded-xl hover:bg-[#6B1212] transition-colors shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#8B1A1A] focus:ring-offset-2"
                >
                  <Heart size={20} className="text-white" />
                  {lang === 'en' ? 'Donate to this Campaign' : 'या मोहिमेसाठी देणगी द्या'}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CampaignSection;

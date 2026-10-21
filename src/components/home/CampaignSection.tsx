import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import SectionHeading from '../shared/SectionHeading';

const campaigns = [
  {
    id: 'ek-wahi-ek-pen',
    titleEn: 'Ek Wahi, Ek Pen — Educational Support Campaign',
    titleMr: 'एक वही, एक पेन — शालेय साहित्य संकलन उपक्रम',
    descEn: 'A special festival campaign inspiring citizens to donate notebooks, pens, and school kits during Ganeshotsav for underprivileged tribal and rural students.',
    descMr: 'गणेशोत्सवाच्या पावन पर्वावर आदिवासी व ग्रामीण भागातील होतकरू विद्यार्थ्यांसाठी एक वही, एक पेन आणि शालेय साहित्य भेट देण्याचे आवाहन करणारी विशेष मोहीम.',
    image: '/images/campaigns/ek-wahi-ek-pen-ganeshotsav.jpeg',
  },
  {
    id: 'vidyarthi-dattak-yojana',
    titleEn: 'Student Adoption Scheme (Vidyarthi Dattak Yojana)',
    titleMr: 'संकल्प विद्यार्थी दत्तक योजना (परळी विभाग)',
    descEn: 'Adopting and supporting orphaned, single-parent, and economically disadvantaged tribal children to provide uninterrupted formal education and life mentorship.',
    descMr: 'परळी विभागातील अनाथ, एकल पालक व अत्यंत गरजू आदिवासी विद्यार्थ्यांना शिक्षणासाठी दत्तक घेऊन त्यांच्या उज्ज्वल भविष्यासाठी सर्वसमावेशक मदत.',
    image: '/images/campaigns/vidyarthi-dattak-yojana.jpeg',
  },
  {
    id: 'annachhatra',
    titleEn: 'Annachhatra Food Support Campaign',
    titleMr: 'अन्नछत्र कार्यक्रम (अन्नदान म्हणजे जीवनदान)',
    descEn: 'Providing daily meal support and nutritional sustenance to needy individuals and the elderly at Sai Tapovan Ashram, Asole, Murbad.',
    descMr: 'साई तपोवन आश्रम, असोळे, मुरबाड येथे गरजू, वृद्ध व निराधार व्यक्तींसाठी दैनिक भोजन सेवा आणि अन्नदान उपक्रम.',
    image: '/images/campaigns/annachhatra-food-support.png',
  },
  {
    id: 'mahila-sakshamikaran',
    titleEn: 'Women Empowerment Initiative (Sewing Machines)',
    titleMr: 'महिला सक्षमीकरण योजना',
    descEn: 'Empowering underprivileged rural women with skill development and sewing machines to foster self-reliance and sustainable family livelihoods.',
    descMr: 'ग्रामीण भागातील गरजू महिलांना शिलाई मशीन व कौशल्य प्रशिक्षण देऊन स्वावलंबी आणि आत्मनिर्भर बनवण्यासाठी आमची विशेष मोहीम.',
    image: '/images/campaigns/mahila-sakshamikaran.png',
  },
  {
    id: 'school-kit',
    titleEn: 'School Kit & Bicycle Distribution Drive',
    titleMr: 'शालेय साहित्य व सायकल वाटप मोहीम',
    descEn: 'Support our initiative to provide essential school supplies, study desks, water purifiers, and bicycles to underprivileged children in remote rural schools.',
    descMr: 'ग्रामीण व दुर्गम भागातील विद्यार्थ्यांना शालेय साहित्य, वॉटर फिल्टर, खेळ साहित्य व लांबून येणाऱ्या मुलींसाठी सायकली वाटप मोहीम.',
    image: '/images/campaigns/school-kit-donation.jpg',
  },
  {
    id: 'sanitary-pad',
    titleEn: 'Sanitary Pad & Women Health Distribution',
    titleMr: 'सॅनिटरी पॅड व महिला आरोग्य मोहीम',
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

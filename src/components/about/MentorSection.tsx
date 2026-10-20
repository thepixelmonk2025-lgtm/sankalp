import { useTranslation } from 'react-i18next';
import { Award, Heart, Sparkles, Quote } from 'lucide-react';

const MentorSection = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language as 'en' | 'mr';

  const highlights = [
    { en: 'Annual notebook distribution for ~1,500 students', mr: 'दरवर्षी जवळपास १,५०० विद्यार्थ्यांना वह्यांचे वाटप' },
    { en: 'Built a house for an elderly destitute grandmother in Satara', mr: 'साताऱ्यातील एका निराधार आजींना घर बांधून देण्याचे कार्य' },
    { en: 'Educational kits and materials for underprivileged children', mr: 'विद्यार्थ्यांना शैक्षणिक साहित्य वाटप' },
    { en: 'Urmodi Premier League & sports competitions for youth', mr: 'उरमोडी प्रीमियर लीग व खेळाडूंसाठी विविध क्रीडा स्पर्धांचे आयोजन' },
    { en: 'Cultural drama, bhajan & singing platforms for artists', mr: 'कलाकारांसाठी नाट्य, भजन व गायन स्पर्धांचे व्यासपीठ' },
    { en: 'Medicine distribution and active relief during COVID-19', mr: 'कोविड काळात औषधवाटप व गरजू कुटुंबांना तात्काळ मदत' },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-[#FFF7F7] via-white to-[#FFF5F5]" aria-label="Inspiration and Mentor">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top badge */}
        <div className="text-center max-w-3xl mx-auto mb-12" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#8B1A1A]/10 text-[#8B1A1A] font-semibold text-sm mb-3">
            <Sparkles size={16} className="text-[#D4A017]" />
            {lang === 'en' ? 'Our Guiding Light & Inspiration' : 'आमचे प्रेरणास्थान व मार्गदर्शक'}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1A1A1A] tracking-tight">
            {lang === 'en' ? 'Inspiration & Mentor' : 'प्रेरणास्थान व मार्गदर्शक'}
          </h2>
          <div className="h-1.5 w-20 bg-gradient-to-r from-[#8B1A1A] to-[#D4A017] rounded-full mx-auto mt-4" />
        </div>

        {/* Main card */}
        <div 
          className="bg-white rounded-3xl shadow-xl border border-[#8B1A1A]/10 overflow-hidden"
          data-aos="fade-up"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            
            {/* Left Image & Identity */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#8B1A1A] via-[#7A1515] to-[#5C0E0E] text-white p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-white/5 pointer-events-none" />
              <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 rounded-full bg-[#D4A017]/10 pointer-events-none" />

              <div className="relative z-10 flex flex-col items-center lg:items-start">
                <div className="relative mx-auto lg:mx-0 w-48 sm:w-60 aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-4 border-[#D4A017]/40 mb-6 bg-black/20 group">
                  <img
                    src="/images/team/ajit-jadhav.jpg"
                    alt="आदरणीय श्री. अजितदादा जाधव"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-center">
                    <span className="inline-block bg-[#D4A017] text-[#1A1A1A] font-bold text-xs uppercase px-3 py-1 rounded-full shadow">
                      {lang === 'en' ? 'Mentor' : 'मार्गदर्शक'}
                    </span>
                  </div>
                </div>

                <div className="text-center lg:text-left">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-1">
                    {lang === 'en' ? 'Respected Shri Ajitdada Jadhav' : 'आदरणीय श्री. अजितदादा जाधव'}
                  </h3>
                  <p className="text-[#D4A017] font-semibold text-base sm:text-lg mb-4">
                    {lang === 'en' 
                      ? 'Founder / President — Samanway Yuva Manch | Urmodi Premier League' 
                      : 'संस्थापक / अध्यक्ष – समन्वय युवा मंच | उरमोडी प्रीमियर लीग'}
                  </p>
                  <p className="text-red-100 text-sm leading-relaxed border-t border-white/10 pt-4">
                    {lang === 'en'
                      ? 'A visionary social leader dedicated to grassroots upliftment, sports promotion, cultural empowerment, and community care.'
                      : 'समाजातील प्रत्येक घटकाला सोबत घेऊन निस्वार्थ भावनेने अविरत कार्य करणारे आदर्श सामाजिक नेतृत्व.'}
                  </p>
                </div>
              </div>

              {/* Highlights badge list */}
              <div className="mt-8 pt-6 border-t border-white/10 relative z-10">
                <h4 className="text-xs uppercase font-bold tracking-wider text-[#D4A017] mb-3">
                  {lang === 'en' ? 'Social Impact Glimpses' : 'प्रमुख सामाजिक योगदान'}
                </h4>
                <div className="space-y-2 text-xs sm:text-sm text-red-50">
                  {highlights.slice(0, 3).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <Heart size={14} className="mt-1 text-[#D4A017] shrink-0 fill-[#D4A017]" />
                      <span>{item[lang]}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Message Content */}
            <div className="lg:col-span-7 p-8 sm:p-12 lg:p-14 flex flex-col justify-between bg-white">
              <div>
                <div className="flex items-center gap-3 mb-6 text-[#8B1A1A]">
                  <Quote size={40} className="text-[#D4A017] opacity-80" />
                  <span className="text-sm font-bold uppercase tracking-wider text-[#8B1A1A]">
                    {lang === 'en' ? 'A Tribute of Gratitude & Inspiration' : 'कृतज्ञतापूर्वक मनोगत व प्रेरणा'}
                  </span>
                </div>

                <div className="prose prose-slate max-w-none text-[#333333] space-y-4 text-base sm:text-lg leading-relaxed">
                  <p className="font-medium text-[#1A1A1A]">
                    {lang === 'en' ? (
                      'I have witnessed the selfless social work of respected Ajitdada since my school days. How to work for society with dedication and selflessness is an inspiration I drew directly from Dada’s life and actions.'
                    ) : (
                      'आदरणीय अजितदादांचे सामाजिक कार्य मी माझ्या शालेय जीवनापासून पाहत आलो आहे. समाजासाठी निस्वार्थपणे कार्य कसे करावे, याची प्रेरणा मला दादांच्या कार्यातून मिळाली.'
                    )}
                  </p>

                  <p className="text-gray-700">
                    {lang === 'en' ? (
                      'From distributing annual notebooks to nearly 1,500 students every year, building a home for a destitute grandmother in Satara, providing educational supplies, organizing cricket and multi-sport tournaments for youth, staging drama, bhajan, and singing competitions for artists, festive decorations, helping needy families, to distributing medicines during COVID-19 — Dada has set an inspiring benchmark of service.'
                    ) : (
                      'दरवर्षी जवळपास १,५०० विद्यार्थ्यांना वर्षभरासाठी लागणाऱ्या वह्यांचे वाटप, साताऱ्यातील एका निराधार आजींना घर बांधून देण्याचे सेवाभावी कार्य, विद्यार्थ्यांना शैक्षणिक साहित्य वाटप, खेळाडूंसाठी क्रिकेटसह विविध स्पर्धांचे आयोजन, कलाकारांसाठी नाट्य, भजन व गायन स्पर्धा, गणेशोत्सवातील आकर्षक सजावट, गरजू कुटुंबांना मदत आणि कोविड काळात औषधवाटप अशा अनेक उपक्रमांतून दादांनी समाजसेवेचा आदर्श निर्माण केला आहे.'
                    )}
                  </p>

                  <div className="my-6 p-4 sm:p-5 rounded-2xl bg-[#FFF5F5] border-l-4 border-[#8B1A1A]">
                    <p className="font-semibold text-[#8B1A1A] italic text-base sm:text-lg m-0">
                      {lang === 'en'
                        ? '“Dada’s work is not limited to mere assistance; it inspires everyone to unite every section of society and march forward together.”'
                        : '“दादांचे कार्य केवळ मदतीपुरते मर्यादित नसून, समाजातील प्रत्येक घटकाला सोबत घेऊन पुढे जाण्याची प्रेरणा देणारे आहे.”'}
                    </p>
                  </div>

                  <p className="text-gray-700">
                    {lang === 'en' ? (
                      'Keeping the ideals and ethos of his social work before us, we founded the Sankalp Foundation. The inspiration drawn from Dada’s selfless journey, the compassion for society, and the urge to reach the needy drive us today as we work towards transformative change in education, healthcare, and community welfare.'
                    ) : (
                      'त्यांच्या याच सामाजिक कार्याचा आणि विचारांचा आदर्श डोळ्यांसमोर ठेवून आम्ही संकल्प फाऊंडेशनची स्थापना केली. दादांच्या कार्यातून मिळालेली प्रेरणा, समाजाप्रती असलेली तळमळ आणि गरजूंपर्यंत पोहोचण्याची भावना घेऊन आज आम्हीही शिक्षण, आरोग्य आणि सामाजिक परिवर्तनाच्या दिशेने कार्यरत आहोत.'
                    )}
                  </p>

                  <p className="text-gray-700">
                    {lang === 'en' ? (
                      'For me, Ajitdada is not just a guide; he is the perennial beacon of inspiration on the path of social service. Following his ideals, reaching the last needy individual in society is our honest commitment.'
                    ) : (
                      'माझ्यासाठी अजितदादा हे केवळ मार्गदर्शक नाहीत, तर समाजसेवेच्या वाटेवर चालताना दिशा देणारे प्रेरणास्थान आहेत. त्यांच्या कार्याचा आदर्श घेऊन समाजातील शेवटच्या गरजू व्यक्तीपर्यंत पोहोचण्याचा आमचा प्रामाणिक प्रयत्न आहे.'
                    )}
                  </p>

                  <p className="text-[#8B1A1A] font-bold text-lg pt-2">
                    {lang === 'en'
                      ? '“Dada, the inspiration drawn from your noble journey is the true strength of our Sankalp!”'
                      : '“दादा, आपल्या कार्यातून मिळालेली प्रेरणा हीच आमच्या संकल्पाची खरी ताकद आहे!”'}
                  </p>
                </div>
              </div>

              {/* Sign-off */}
              <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between flex-wrap gap-4">
                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-500 font-medium mb-1">
                    {lang === 'en' ? 'With warm regards,' : 'सस्नेह,'}
                  </p>
                  <p className="text-lg sm:text-xl font-bold text-[#1A1A1A] flex items-center gap-1.5">
                    <span>✍🏼</span>
                    <span>{lang === 'en' ? 'Praveen Jadhav' : 'प्रवीण जाधव'}</span>
                  </p>
                  <p className="text-sm font-semibold text-[#8B1A1A]">
                    {lang === 'en' ? 'Founder / President — Sankalp Foundation' : 'संस्थापक/अध्यक्ष – संकल्प फाऊंडेशन'}
                  </p>
                </div>

                <div className="flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-xl bg-[#FFF5F5] text-[#8B1A1A] border border-[#8B1A1A]/15">
                  <Award size={18} className="text-[#D4A017]" />
                  <span>{lang === 'en' ? 'Guided by Noble Values' : 'मूल्याधिष्ठित समाजसेवा'}</span>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default MentorSection;

import { useTranslation } from 'react-i18next';
import SectionHeading from '../shared/SectionHeading';

const AwardSection = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language as 'en' | 'mr';

  // Even if English is selected, we'll show the Marathi text for authenticity since it's a personal letter,
  // or we could translate it. For now, we will show Marathi as provided by the user.
  return (
    <section className="py-16 md:py-24 bg-white" id="awards-recognition" aria-label="Awards and Recognition">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={lang === 'en' ? 'Awards & Recognition' : 'पुरस्कार आणि सन्मान'}
          subtitle={lang === 'en' ? 'Acknowledging our humble efforts' : 'आमच्या कार्याची घेतलेली दखल'}
        />

        <div className="mt-12 space-y-16">
          {/* First Award: Gourav Kartrutvacha Puraskar */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Award Image */}
            <div data-aos="fade-right" className="relative rounded-2xl overflow-hidden shadow-2xl bg-[#FBF0F0] aspect-[4/3] flex items-center justify-center">
              <img 
                src="/images/awards/gourav-puraskar-2026.jpg" 
                alt="Gourav Kartrutvacha Puraskar 2026" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl shadow-sm border border-[#8B1A1A]/10">
                <p className="text-[#8B1A1A] font-bold text-sm">२०२६</p>
              </div>
            </div>

            {/* Award Description / Letter */}
            <div data-aos="fade-left" className="space-y-4 text-[#5A5A5A] text-[15px] sm:text-base leading-relaxed bg-[#FBF0F0]/50 p-6 sm:p-8 rounded-2xl border border-[#8B1A1A]/10 font-devanagari">
              <h3 className="text-xl sm:text-2xl font-bold text-[#8B1A1A] mb-6 leading-snug">
                हा बहुमान माझ्या प्रत्येक सहकाऱ्याचा आणि प्रत्येक हितचिंतकाचा!
              </h3>
              
              <p>
                <strong>"गौरव कर्तृत्वाचा पुरस्कार – २०२६"</strong> हा सन्मान स्वीकारताना मन अक्षरशः कृतज्ञतेने भरून आले. हा क्षण माझ्यासाठी केवळ पुरस्काराचा नसून, समाजाने माझ्या कार्यावर ठेवलेल्या विश्वासाचा, प्रेमाचा आणि आशीर्वादाचा सन्मान आहे.
              </p>
              
              <p>
                महाराष्ट्र राज्याचे सार्वजनिक बांधकाम मंत्री तथा लातूर जिल्ह्याचे पालकमंत्री मा. श्री. छत्रपती शिवेंद्रसिंहराजे भोसले साहेब, आमदार मा. श्री. धैर्यशील कदम साहेब, तसेच युवकांचे प्रेरणास्थान व सातारा जिल्हा परिषद उपाध्यक्ष मा. श्री. राजूभैया भोसले साहेब, श्रीरंग केरेकर साहेब यांच्या शुभहस्ते हा पुरस्कार स्वीकारण्याचे भाग्य लाभले, ही माझ्या आयुष्यातील अविस्मरणीय आणि अभिमानास्पद आठवण आहे. त्यांच्या प्रेरणादायी शब्दांनी समाजसेवेच्या वाटेवर अधिक समर्पणाने आणि निष्ठेने कार्य करण्याची नवी ऊर्जा दिली.
              </p>
              
              <p>
                या प्रवासात प्रत्येक टप्प्यावर निस्वार्थ मार्गदर्शन, प्रेरणा आणि खंबीर साथ देणारे माझे गुरुवर्य अजित दादा जाधव तसेच मार्गदर्शक कवी भानुदास निकम (बापू), सुशील दादा डफळ, कल्पेश भाऊ सकपाळ, रमेश देवरे (माऊली), सचिन दादा देशमुख, अशोक दादा कदम, गणेश दादा निकम, नवनाथ दादा गवळी आणि सखाराम पवार यांचे मी आयुष्यभर ऋणी राहीन. तुमचा विश्वास, प्रेम आणि आशीर्वाद हेच माझ्या प्रत्येक पावलामागचे खरे सामर्थ्य आहे.
              </p>
              
              <p>
                तसेच माझ्या नावली गावातील ग्रामस्थांचे, माझ्यावर निस्वार्थ प्रेम करणाऱ्या प्रत्येक हितचिंतकाचे आणि सार्वजनिक क्रीडा गणेशोत्सव मंडळ, सावली यांचे मनःपूर्वक आभार. तुमच्या प्रेमाने, प्रोत्साहनाने आणि विश्वासानेच प्रत्येक अडथळ्यावर मात करण्याचे बळ मिळाले.
              </p>
              
              <p>
                हा पुरस्कार माझ्या एकट्याचा नाही; माझ्यासोबत खांद्याला खांदा लावून समाजासाठी झटणाऱ्या प्रत्येक सहकाऱ्याचा, संकल्प फाऊंडेशन परिवाराचा, प्रत्येक दात्याचा, प्रत्येक हितचिंतकाचा आणि माझ्या कुटुंबीयांचा हा सन्मान आहे. तुमच्या विश्वासाशिवाय हा प्रवास कधीच पूर्ण झाला नसता.
              </p>
              
              <p>
                समर्थ सातारा प्रतिष्ठान यांनी माझ्या कार्याची घेतलेली दखल आणि दिलेला हा बहुमान मी आयुष्यभर जपून ठेवेन. या सन्मानासाठी संस्थेचे, उपस्थित सर्व मान्यवरांचे आणि माझ्यावर प्रेम करणाऱ्या प्रत्येक व्यक्तीचे मनःपूर्वक आभार!
              </p>
              
              <p className="pt-2 italic text-[#8B1A1A] font-medium">
                आपले प्रेम, विश्वास आणि आशीर्वाद असेच कायम माझ्या पाठीशी राहोत...
              </p>
              
              <div className="pt-6 border-t border-[#8B1A1A]/20 mt-6">
                <p className="font-bold text-[#1A1A1A] text-lg">✍🏻 प्रवीण जाधव</p>
                <p className="text-sm text-[#8B1A1A] font-semibold">संस्थापक/अध्यक्ष - संकल्प फाऊंडेशन</p>
              </div>
            </div>
          </div>

          {/* Second Award: Rajyastariya Sanman 2026 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Award Description */}
            <div data-aos="fade-right" className="space-y-4 text-[#5A5A5A] text-[15px] sm:text-base leading-relaxed bg-[#FBF0F0]/50 p-6 sm:p-8 rounded-2xl border border-[#8B1A1A]/10 font-devanagari order-2 lg:order-1">
              <h3 className="text-xl sm:text-2xl font-bold text-[#8B1A1A] mb-6 leading-snug">
                संकल्प फाऊंडेशनचा राज्यस्तरीय सन्मान
              </h3>
              
              <p>
                पुणे येथे स्पंदन फाऊंडेशन महाराष्ट्र राज्य आयोजित <strong>राज्यस्तरीय पुरस्कार सोहळा २०२६</strong> मध्ये संकल्प फाऊंडेशन यांना त्यांच्या उल्लेखनीय सामाजिक कार्यासाठी सन्मानित करण्यात आले.
              </p>
              
              <p>
                ज्ञानज्योती सावित्रीबाई फुले स्मारक येथे पार पडलेल्या या सोहळ्यात फाऊंडेशनचे प्रसिद्धी प्रमुख किरण जांभळे तसेच सदस्य सागर कदम, स्वरूप सातपुते व धीरज वाडकर यांनी पुरस्कार स्वीकारला.
              </p>

              <p>
                या सन्मानामुळे फाऊंडेशनच्या कार्याला नवी प्रेरणा मिळाली असून, भविष्यातही समाजसेवेची वाट अधिक जोमाने सुरू ठेवण्याचा निर्धार व्यक्त करण्यात आला.
              </p>
            </div>
            
            {/* Award Image */}
            <div data-aos="fade-left" className="relative rounded-2xl overflow-hidden shadow-2xl bg-[#FBF0F0] aspect-[4/3] flex items-center justify-center order-1 lg:order-2">
              <img 
                src="/images/awards/rajyastariya-sanman-2026.jpg" 
                alt="Rajyastariya Sanman 2026" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl shadow-sm border border-[#8B1A1A]/10">
                <p className="text-[#8B1A1A] font-bold text-sm">२०२६</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardSection;

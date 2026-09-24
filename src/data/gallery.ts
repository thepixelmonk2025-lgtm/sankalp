// TODO: Add real gallery images from client. Add/remove entries here without touching layout code.

export interface GalleryImage {
  id: string;
  src: string;
  alt: { en: string; mr: string };
  caption?: { en: string; mr: string };
  description?: { en: string; mr: string };
  date?: string;
  category: string;
}

export const galleryImages: GalleryImage[] = [
  {
    id: 'g-bhil-community',
    src: '/images/gallery/bhil-community.webp', // TODO: Save your photo as this name
    alt: { en: 'Helping Hand to Bhil Community', mr: 'भिल्ल समाजातील कुटुंबांना मदत' },
    caption: { en: 'Essential supplies distributed in Shelbari', mr: 'शेलबारी येथे जीवनावश्यक वस्तूंचे वाटप' },
    description: {
      en: 'Sankalp Foundation distributed essential utensils and clothes to 3 extremely needy families of the Bhil community in Shelbari, Sakri Taluka. This initiative was undertaken to provide a helping hand to families struggling with daily needs due to financial difficulties. Foundation members including Praveen Jadhav and Vijay Ahire were present.',
      mr: 'साक्री तालुक्यातील शेलबारी येथे संकल्प फाऊंडेशनच्या वतीने भिल्ल समाजातील ३ अत्यंत गरजू कुटुंबांना जीवनावश्यक भांडी तसेच कपड्यांचे वाटप करण्यात आले. आर्थिक अडचणींमुळे दैनंदिन गरजा भागवताना अडचण येणाऱ्या कुटुंबांना थोडासा आधार मिळावा, या संवेदनशील भावनेतून हा उपक्रम राबविण्यात आला.'
    },
    date: 'Recent',
    category: 'Livelihood',
  },
  {
    id: 'g-farewell-sayali',
    src: '/images/gallery/farewell-sayali.webp', // TODO: Save your photo as this name
    alt: { en: '10th Standard Farewell at Sayali', mr: 'सायळी येथे १० वीचा निरोप समारंभ' },
    caption: { en: 'Exam Kits Distributed at Sayali School', mr: 'सायळी शाळेत शालेय साहित्याचे वाटप' },
    description: {
      en: 'On 21st February 2024, Sankalp Foundation attended the 10th standard farewell ceremony at New English School, Sayali (Satara). To boost students\' confidence for their board exams, the foundation distributed essential kits including writing pads, compass boxes, and pens. The event concluded with a unique bullock cart procession for the students.',
      mr: 'दिनांक २१ फेब्रुवारी २०२४ रोजी न्यू इंग्लिश स्कूल, सायळी (सातारा) येथे १० वीच्या विद्यार्थ्यांचा निरोप समारंभ संपन्न झाला. याप्रसंगी संकल्प फाऊंडेशनतर्फे विद्यार्थ्यांना परीक्षेसाठी आवश्यक शालेय वस्तूंचे (रायटिंग पॅड, कंपास बॉक्स, पेन इत्यादी) वाटप करण्यात आले. शेवटी सर्व विद्यार्थ्यांची बैलगाडीतून मिरवणूक काढून त्यांना एक अनोखा निरोप देण्यात आला.'
    },
    date: 'February 2024',
    category: 'Education',
  },
  {
    id: 'g-student-adoption',
    src: '/images/gallery/student-adoption.webp', // TODO: Save your photo as this name
    alt: { en: 'Student Adoption Scheme', mr: 'विद्यार्थी दत्तक योजना' },
    caption: { en: 'Educational Support for 51 Students', mr: '५१ विद्यार्थ्यांसाठी दत्तक योजना' },
    description: {
      en: 'The "Sankalp Adoption Scheme" initiated for orphaned and needy children has received a wonderful response. On the occasion of Independence Day, 51 students benefited from this scheme. The main objective is to ensure that rural children do not have to leave their education halfway due to financial constraints. President Praveen Jadhav and other dignitaries were present to encourage the students.',
      mr: 'संकल्प फाउंडेशनच्या माध्यमातून पालक नसलेल्या व गरजू मुलांसाठी सुरू केलेल्या "संकल्प दत्तक योजना" या उपक्रमाला उस्फूर्त प्रतिसाद मिळाला. स्वातंत्र्यदिनाचे औचित्य साधून जवळपास ५१ मुलांना या योजनेचा लाभ देण्यात आला. ग्रामीण भागातील मुलांना पैशांअभावी शिक्षण अर्धवट सोडावे लागू नये, या उद्देशाने ही योजना राबविण्यात आली आहे.'
    },
    date: 'Recent',
    category: 'Education',
  },
  {
    id: 'g-water-purifier',
    src: '/images/gallery/water-purifier.webp', // TODO: Save your photo as this name
    alt: { en: 'Water Purifier Distribution', mr: 'जल शुद्धीकरण यंत्र वाटप' },
    caption: { en: 'Water Purifier Donated at Kaloshi, Satara', mr: 'काळोशी, सातारा येथे जल शुद्धीकरण यंत्र वाटप' },
    description: {
      en: 'Everyone has a right to clean drinking water. On the occasion of Independence Day, Sankalp Foundation donated a Tata Swach Tech 200 LPH water purification system worth ₹90,000 to Zilla Parishad Primary School, Kaloshi, Satara. This ensures the students have access to clean drinking water. President Praveen Jadhav and the local community were present.',
      mr: 'प्रत्येकाला शुद्ध पाणी मिळण्याचा अधिकार आहे. स्वतंत्रदिनाचे औचित्य साधून आज जिल्हा परिषद प्राथमिक शाळा, काळोशी सातारा येथे ९० हजार मूल्य असलेले "टाटा स्वच्छ टेक २०० एलपीएच" हे यंत्र बहाल करून आपले समाजातप्रति असलेली तळमळल व आत्मीयता दाखवली. आजही ग्रामीण भागातील बर्याच शाळांमध्ये पिण्या करिता शुद्ध पाणी पिण्याचे फिल्टर यंत्र नाही याचीच दखल घेत हा उपक्रम राबवण्यात आला. कार्यक्रमाप्रसंगी संकल्प फाउंडेशनचे अध्यक्ष श्री. प्रविण दादा जाधव व सर्व ग्रामस्थ आणि शिक्षक वर्ग उपस्थित होते.'
    },
    date: 'Recent',
    category: 'Health',
  },
  {
    id: 'g-sanitary',
    src: '/images/gallery/sanitary-napkin.webp', // TODO: Save your collage as this name
    alt: { en: 'Sanitary Napkin Distribution', mr: 'सॅनिटरी नॅपकिन वाटप' },
    caption: { en: 'Sanitary Napkin & First Aid Distribution at Asole', mr: 'असोळे येथे सॅनिटरी नॅपकिन व प्रथमोपचार किट वाटप' },
    description: {
      en: 'Sankalp Foundation distributed sanitary napkins and first-aid kits to students up to 12th standard at Asole High School, Murbad, along with guidance on personal hygiene and self-defense. Mrs. Nanda Jadhav and Mrs. Harshada Surve provided guidance on menstrual health. Principal Sugandha Patange appreciated the foundation\'s efforts. President Praveen Jadhav and other members were present.',
      mr: 'संकल्प फाउंडेशन यांनी असोळे विभाग हायस्कूल व कनिष्ठ महाविद्यालय असोळे, मुरबाड येथील १२वी पर्यंतच्या विद्यार्थीनींना वैयक्तिक स्वच्छता व स्वरक्षणाविषयी मार्गदर्शन करत सॅनिटरी नॅपकिन व शाळेसाठी प्रथमोपचार औषधांचे वाटप केले. सौ. नंदा जाधव आणि सौ. हर्षदा सुर्वे यांनी मासिक पाळी आणि आरोग्याविषयी मार्गदर्शन केले. शाळेच्या प्राचार्य सुगंधा पतंगे मॅडम यांनी या कार्याचे कौतुक केले. प्रसंगी अध्यक्ष प्रवीण जाधव व इतर सदस्य उपस्थित होते.'
    },
    date: 'Recent',
    category: 'Health',
  },

];

export const galleryCategories = ['All', 'Education', 'Health', 'Livelihood', 'Environment', 'Community'];

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
    id: 'g-rakshabandhan-anand',
    src: '/images/gallery/rakshabandhan-anand-mahotsav.jpeg',
    alt: { en: 'Rakshabandhan Anand Mahotsav at Jambhalipada Z.P. School', mr: 'राखी आणि आनंद महोत्सव — जि. प. शाळा जांभाळीपाडा' },
    caption: { en: 'Sankalp Rakshabandhan Anand Mahotsav with tribal school children', mr: 'संकल्प समन्वय राखी व आनंद महोत्सव' },
    description: {
      en: 'Celebrating sacred bonds of love, care, and social unity with tribal students at Zilla Parishad School Jambhalipada. Foundation volunteers spent the auspicious day distributing sweets, smiles, and educational encouragement.',
      mr: 'जि. प. शाळा जांभाळीपाडा येथे आदिवासी मुलांसोबत संकल्प फाऊंडेशनच्या वतीने "आनंद महोत्सव व रक्षाबंधन सोहळा" साजरा करण्यात आला. विद्यार्थ्यांच्या चेहऱ्यावर आनंद आणि नवी उमेद फुलवणारा हा भावूक क्षण.'
    },
    date: 'August 2026',
    category: 'Community',
  },
  {
    id: 'g-umbarkhadwa-shaikshanik',
    src: '/images/gallery/umbarkhadwa-shaikshanik-sohala.jpeg',
    alt: { en: 'Educational Kit & Sportswear Distribution at Umbarkhadwa School', mr: 'शैक्षणिक साहित्य व क्रीडा गणवेश वाटप समारंभ — उंबरखडवा' },
    caption: { en: 'Distribution Ceremony at Umbarkhadwa Z.P. School, Sakri', mr: 'जि. प. शाळा उंबरखडवा येथे साहित्य वाटप सोहळा' },
    description: {
      en: 'Grand educational kit distribution event at Z.P. Primary School Umbarkhadwa, Sakri. Children received full study materials, school uniforms, and clean drinking water purification systems.',
      mr: 'धुळे जिल्ह्यातील साक्री तालुक्यातील जि. प. शाळा उंबरखडवा येथे विद्यार्थ्यांना शैक्षणिक साहित्य, क्रीडा कपडे व पाणी फिल्टर वाटप समारंभ मान्यवरांच्या उपस्थितीत संपन्न झाला.'
    },
    date: 'February 2026',
    category: 'Education',
  },
  {
    id: 'g-kutumb-vruddhashram',
    src: '/images/gallery/kutumb-vruddhashram-bhet.jpeg',
    alt: { en: 'Support and Visit to Kutumb Old Age Home, Kalyan', mr: 'कुटुंब वृद्धाश्रम भेट व धान्य-साहित्य मदत — कल्याण' },
    caption: { en: 'Support to elderly destitute residents at Kutumb Vruddhashram', mr: 'कुटुंब वृद्धाश्रमात ज्येष्ठ नागरिकांना आधार व धान्य मदत' },
    description: {
      en: 'Sankalp Foundation extended a helping hand to Kutumb Vruddhashram (Kalyan East) managed by Kith & Kin Foundation, providing daily food grains, Shrimad Bhagavad Gita copies, calendars, and emotional support to elderly citizens.',
      mr: 'किथ अँड किन फाऊंडेशन संचलित ‘कुटुंब वृद्धाश्रम’ (मलंग रोड, कल्याण पूर्व) येथे ज्येष्ठ नागरिकांना धान्य, भगवद्गीता ग्रंथ आणि आर्थिक-भावनिक आधार देण्याचा स्तुत्य उपक्रम संकल्प फाऊंडेशनने राबवला.'
    },
    date: 'January 2025',
    category: 'Livelihood',
  },
  {
    id: 'g-vruksharopan-plantation',
    src: '/images/gallery/vruksharopan-plantation-field.jpeg',
    alt: { en: 'Tree Plantation Drive at Satara Forest Belt', mr: 'सातारा परळी खोऱ्यात वृक्षारोपण मोहीम' },
    caption: { en: 'Tree plantation drive: Bamboo staking and sapling planting', mr: 'पर्यावरण संवर्धन — वृक्षारोपण अभियान' },
    description: {
      en: 'Volunteers and youth actively planted native saplings with protective bamboo supports across Aalavadi, Navali, and Satara hilly terrains to protect ecology and promote a greener tomorrow.',
      mr: 'वृक्षाचे करा संवर्धन, धरतीचे होईल नंदनवन! या अभियानांतर्गत परळी व कास पठार परिसरातील डोंगर भागात बांबूच्या संरक्षणासह देशी वृक्षांचे रोपण करण्यात आले.'
    },
    date: 'July 2023',
    category: 'Environment',
  },
  {
    id: 'g-vruksharopan-nandanvan',
    src: '/images/gallery/vruksharopan-dharati-nandanvan.jpeg',
    alt: { en: 'Community Tree Distribution Campaign', mr: 'शेतकऱ्यांना व युवकांना फळझाडे व देशी रोपांचे वाटप' },
    caption: { en: 'Massive community participation in tree distribution', mr: 'पर्यावरण रक्षण व वृक्ष संवर्धन संकल्प' },
    description: {
      en: 'Distributing mango and indigenous trees to local village youth and farmers, fostering long-term environmental responsibility and agro-forestry livelihood opportunities.',
      mr: 'ग्रामीण भागातील तरुण आणि शेतकरी बांधवांना फळझाडांचे वाटप करून हरित ग्राम अभियानाला गती देण्याचे कार्य संकल्प फाऊंडेशनतर्फे हाती घेण्यात आले.'
    },
    date: 'July 2023',
    category: 'Environment',
  },
  {
    id: 'g-blood-donation',
    src: '/images/gallery/blood-donation-camp.jpeg',
    alt: { en: 'Mega Blood Donation Camp Participation & Honors', mr: 'भव्य रक्तदान सोहळा व सन्मान' },
    caption: { en: 'Mega Blood Donation Drive in community partnership', mr: 'रक्तदान हेच जीवनदान — सामाजिक उपक्रम' },
    description: {
      en: 'Active participation and coordination of Mega Blood Donation Camp at Hanuman Tekdi, recognizing voluntary donors and honoring community health contributors.',
      mr: 'हनुमान टेकडी येथे आयोजित भव्य रक्तदान शिबिरात संकल्प फाऊंडेशनचा सक्रिय सहभाग. रक्तदात्यांना प्रमाणपत्र व सन्मान देऊन गौरविण्यात आले.'
    },
    date: 'January 2026',
    category: 'Health',
  },
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

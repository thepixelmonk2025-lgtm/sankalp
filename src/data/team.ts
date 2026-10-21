// TODO: Replace with real team/founder data and photos from client

export interface TeamMember {
  id: string;
  name: { en: string; mr: string };
  role: { en: string; mr: string };
  bio: { en: string; mr: string };
  photo: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: 'praveen-jadhav',
    name: { en: 'Praveen Jadhav', mr: 'प्रविण जाधव' },
    role: { en: 'Chairman & Founder', mr: 'संस्थापक व अध्यक्ष' },
    bio: {
      en: '"Education is the true foundation of change." Driven by a passion for social service and a strong commitment to uplift the underprivileged, Praveen Jadhav founded Sankalp Foundation with a vision to bring meaningful change. Professionally an Investment and Tax Consultant with over 15 years of experience, he leads initiatives for child education and rural welfare.',
      mr: '"शिक्षण हाच खरा बदलाचा पाया आहे." समाजसेवेची ओढ आणि दुर्बल घटकांसाठी काहीतरी अर्थपूर्ण करण्याची जिद्द मनात ठेवून प्रविण जाधव यांनी संकल्प फाऊंडेशनची स्थापना केली. व्यवसायाने इन्व्हेस्टमेंट आणि टॅक्स कन्सल्टंट असलेले जाधव सर १५ वर्षांहून अधिक काळ सामाजिक बांधिलकी जपत शैक्षणिक व सामाजिक कार्य करत आहेत.',
    },
    photo: '/images/team/praveen-jadhav.webp',
  },
  {
    id: 'raghunath-surve',
    name: { en: 'Raghunath Surve', mr: 'रघुनाथ सुर्वे' },
    role: { en: 'Secretary', mr: 'सचिव' },
    bio: {
      en: 'With over 20 years of rich leadership and marketing experience in reputed companies, Mr. Raghunath Surve has been associated with Sankalp Foundation since inception, guiding social initiatives with integrity and vision.',
      mr: 'समाजसेवेची प्रखर आवड आणि मार्केटिंग क्षेत्रातील २० वर्षांहून अधिक समृद्ध अनुभव असलेले श्री. रघुनाथ सुर्वे यांनी स्थापनेपासूनच संस्थेच्या विविध उपक्रमांना दिशा, नियोजन आणि बळ दिले आहे.',
    },
    photo: '/images/team/raghunath-surve.jpg',
  },
  {
    id: 'sonali-ahire',
    name: { en: 'Sonali Rajiv Ahire', mr: 'सोनाली राजीव अहिरे' },
    role: { en: 'Treasurer', mr: 'खजिनदार' },
    bio: {
      en: '“Service with dedication, transforming society through compassion.” Graduate and dedicated social worker actively contributing to environmental conservation and tribal school empowerment across Dhule, Nandurbar, Thane, and Palghar districts.',
      mr: '“Service with dedication, transforming society through compassion.” पदवीधर आणि सेवाभावी वृत्तीच्या कार्यकर्त्या. धुळे, नंदुरबार, ठाणे व पालघर जिल्ह्यातील आदिवासी शाळांमधील विद्यार्थ्यांचे सक्षमीकरण व पर्यावरण संवर्धनात सतत कार्यरत.',
    },
    photo: '/images/team/sonali-ahire.png',
  },
  {
    id: 'sagar-kadam',
    name: { en: 'Sagar Ramesh Kadam', mr: 'सागर रमेश कदम' },
    role: { en: 'Member & Konkan Division Head', mr: 'सदस्य तथा कोकण विभाग प्रमुख' },
    bio: {
      en: 'Graduate entrepreneur in the hotel and tourism industry, serving as the Konkan Division Head with a deep commitment to community welfare.',
      mr: 'हॉटेल व पर्यटन व्यवसायात कार्यरत असलेले पदवीधर युवा उद्योजक, जे कोकण विभाग प्रमुख म्हणून सामाजिक बांधिलकी जपत तळमळीने कार्य करत आहेत.',
    },
    photo: '/images/team/sagar-kadam.png',
  },
  {
    id: 'sumit-jambhale',
    name: { en: 'Sumit Dinkar Jambhale', mr: 'सुमित दिनकर जांभळे' },
    role: { en: 'Member (Agri-Tourism & Bamboo Artist)', mr: 'सदस्य (कृषी पर्यटन व बांबू कलाकार)' },
    bio: {
      en: 'Award-winning bamboo craftsman, trainer, and organic farmer in Satara district, bridging traditional art, skill development, and rural entrepreneurship.',
      mr: 'कुशल बांबू कलाकार, प्रशिक्षक आणि सेंद्रिय शेती व कृषी पर्यटन क्षेत्रात उल्लेखनीय कार्य करणारे व्यक्तिमत्त्व. शासन पुरस्काराने सन्मानित असून ग्रामीण रोजगारनिर्मितीसाठी कार्यरत.',
    },
    photo: '/images/team/sumit-jambhale.jpg',
  },
  {
    id: 'bhushan-pawar',
    name: { en: 'Bhushan Pawar', mr: 'भूषण पवार' },
    role: { en: 'Member', mr: 'सदस्य' },
    bio: {
      en: 'Holding B.Sc. Agriculture and MBA in Marketing, he contributes strategic planning, community engagement, and project execution for sustainable social impact.',
      mr: 'B.Sc. Agriculture आणि MBA Marketing पदवीधर. संस्थेच्या उपक्रमांचे नियोजन, विपणन धोरणे आणि प्रकल्प व्यवस्थापनात मोलाचे योगदान देणारे सक्रिय सदस्य.',
    },
    photo: '/images/team/bhushan-pawar.jpg',
  },
  {
    id: 'kiran-jambhale',
    name: { en: 'Kiran Purushottam Jambhale', mr: 'किरण पुरुषोत्तम जांभळे' },
    role: { en: 'Member', mr: 'सदस्य' },
    bio: {
      en: 'M.Com graduate professionally working with Infosys. Passionate about reading, knowledge sharing, education welfare, and community empowerment.',
      mr: 'एम.कॉम पदवीधर आणि इन्फोसिस (Infosys) मध्ये कार्यरत. वाचनाची आवड आणि ज्ञानाच्या माध्यमातून समाजाच्या सर्वांगीण विकासासाठी कार्यरत असणारे सुशिक्षित सदस्य.',
    },
    photo: '/images/team/kiran-jambhale.png',
  },
  {
    id: 'shivaji-jambhale',
    name: { en: 'Shivaji Jambhale', mr: 'शिवाजी जांभळे' },
    role: { en: 'Member', mr: 'सदस्य' },
    bio: {
      en: 'Brings 15 years of automobile sector experience alongside agriculture, actively participating in social welfare across Mumbai and Satara.',
      mr: 'शेती व्यवसायासोबत ऑटोमोबाईल क्षेत्रात १५ वर्षांचा अनुभव. मुंबई व सातारा परिसरातील सामाजिक उपक्रमांत निरंतर सहभाग घेणारे कर्तव्यदक्ष सदस्य.',
    },
    photo: '/images/team/shivaji-jambhale.png',
  },
  {
    id: 'harshada-surve',
    name: { en: 'Harshada Surve', mr: 'हर्षदा सुर्वे' },
    role: { en: 'Member', mr: 'सदस्य' },
    bio: {
      en: 'With over 10 years in the banking sector, she brings expertise to financial coordination, women empowerment programs, and organizational initiatives.',
      mr: 'बँकिंग क्षेत्रातील १० वर्षांहून अधिकचा अनुभव. संस्थात्मक उपक्रमांचे समन्वय, आर्थिक नियोजन आणि महिला आरोग्य उपक्रमांत सक्रिय योगदान.',
    },
    photo: '/images/team/harshada-surve.jpg',
  },
  {
    id: 'nanda-ahire-jadhav',
    name: { en: 'Prof. Nanda Ahire Jadhav', mr: 'प्रा. नंदा अहिरे जाधव' },
    role: { en: 'Member (Education Advisor)', mr: 'सदस्य (शिक्षण सल्लागार)' },
    bio: {
      en: 'Professor at Satish Pradhan Dnyansadhana College, Thane with M.A., B.Ed., M.Phil (Economics) and 15+ years experience guiding educational projects.',
      mr: 'सतीश प्रधान ज्ञानसाधना महाविद्यालय ठाणे येथे प्राध्यापक. M.A., B.Ed., M.Phil शिक्षण आणि १५ वर्षांच्या अनुभवातून शैक्षणिक उपक्रमांना मार्गदर्शन.',
    },
    photo: '/images/team/nanda-ahire-jadhav.webp',
  },
  {
    id: 'prajwal-shinde',
    name: { en: 'Prajwal Shinde', mr: 'प्रज्वल शिंदे' },
    role: { en: 'Social Media & Marketing Head', mr: 'सोशल मीडिया आणि मार्केटिंग हेड' },
    bio: {
      en: '“Connecting society through social media.” Prajwal Shinde serves as the Social Media & Marketing Head at Sankalp Foundation. She holds a B.CA degree from SNDT University and has demonstrated strong expertise in digital platforms, brand promotion, and effective online communication. Actively participating in the foundation’s social initiatives, Prajwal manages social media, digital marketing, and public outreach to enhance the visibility and impact of Sankalp Foundation’s programs.',
      mr: '“सोशल माध्यमांद्वारे समाजाशी जोडले जावे.” प्रज्वल शिंदे संकल्प फाऊंडेशनमध्ये Social Media आणि Marketing Head म्हणून कार्यरत आहेत. त्यांनी SNDT University मधून B.CA पदवी पूर्ण केली असून, डिजिटल प्लॅटफॉर्मवर प्रभावी संवाद साधण्यात आणि ब्रँड प्रमोशनमध्ये प्रावीण्य आहे. संकल्प फाऊंडेशनच्या सामाजिक उपक्रमांत सक्रिय सहभाग असून, त्या सोशल मीडिया, डिजिटल मार्केटिंग आणि जनसंपर्काद्वारे संस्थेच्या उपक्रमांचा प्रभाव आणि पोहोच वाढवतात.',
    },
    photo: '/images/team/prajwal-shinde.webp',
  }
];

export interface Story {
  id: string;
  name: { en: string; mr: string };
  story: { en: string; mr: string };
  photo: string;
  location: { en: string; mr: string };
}

export const impactStories: Story[] = [
  {
    id: 'story-bhil-community',
    name: { en: 'Helping Hand to Bhil Community', mr: 'भिल्ल समाजातील कुटुंबांना मदत' },
    story: {
      en: 'Sankalp Foundation distributed essential utensils and clothes to 3 extremely needy families of the Bhil community in Shelbari, Sakri Taluka. This support brought joy to families struggling with daily needs due to financial hardships.',
      mr: 'साक्री तालुक्यातील शेलबारी येथे संकल्प फाऊंडेशनच्या वतीने भिल्ल समाजातील ३ गरजू कुटुंबांना जीवनावश्यक भांडी व कपड्यांचे वाटप करण्यात आले. आर्थिक अडचणींमुळे संघर्ष करणाऱ्या या कुटुंबांना आधार देणे हे संस्थेचे ध्येय आहे.',
    },
    photo: '/images/gallery/bhil-community.webp', 
    location: { en: 'Shelbari, Sakri', mr: 'शेलबारी, साक्री' },
  },
  {
    id: 'story-farewell-sayali',
    name: { en: '10th Std Farewell at Sayali', mr: 'सायळी येथे १० वीचा निरोप समारंभ' },
    story: {
      en: 'Sankalp Foundation distributed exam kits (writing pads, compass boxes, etc.) to 10th standard students at New English School, Sayali, encouraging them to face their board exams with confidence. The event concluded with a memorable bullock cart procession.',
      mr: 'न्यू इंग्लिश स्कूल, सायळी येथे १० वीच्या विद्यार्थ्यांचा निरोप समारंभ संपन्न झाला. यावेळी संकल्प फाऊंडेशनतर्फे विद्यार्थ्यांना परीक्षेसाठी आवश्यक शालेय वस्तूंचे वाटप करण्यात आले व सर्व विद्यार्थ्यांची बैलगाडीतून अनोखी मिरवणूक काढण्यात आली.',
    },
    photo: '/images/gallery/farewell-sayali.webp', 
    location: { en: 'Sayali, Satara', mr: 'सायळी, सातारा' },
  },
  {
    id: 'story-adoption',
    name: { en: 'Student Adoption Scheme', mr: 'संकल्प दत्तक योजना' },
    story: {
      en: 'The "Sankalp Adoption Scheme" for orphaned and needy children benefited 51 students on Independence Day. The initiative ensures that rural children do not drop out of school due to financial constraints. Various dignitaries appreciated the foundation\'s support.',
      mr: 'संकल्प फाउंडेशनच्या माध्यमातून सुरू केलेल्या "संकल्प दत्तक योजना" या उपक्रमाअंतर्गत ५१ मुलांना शालेय साहित्य देण्यात आले. ग्रामीण भागातील मुलांना पैशांअभावी शिक्षण अर्धवट सोडावे लागू नये, या उद्देशाने ही योजना राबविण्यात आली.',
    },
    photo: '/images/gallery/student-adoption.webp', 
    location: { en: 'Rural Maharashtra', mr: 'ग्रामीण महाराष्ट्र' },
  },
  {
    id: 'story-1',
    name: { en: 'Sanitary Napkin & First Aid Distribution', mr: 'सॅनिटरी नॅपकिन व प्रथमोपचार किट वाटप' },
    story: {
      en: 'Sankalp Foundation distributed sanitary napkins and first-aid kits to students up to 12th standard at Asole High School, Murbad. Our members guided them on personal hygiene, menstrual health, and self-defense. Principal Sugandha Patange appreciated the foundation\'s efforts to empower girls.',
      mr: 'संकल्प फाउंडेशन यांनी असोळे विभाग हायस्कूल व कनिष्ठ महाविद्यालय असोळे, मुरबाड येथील १२वी पर्यंतच्या विद्यार्थीनींना वैयक्तिक स्वच्छता व स्वरक्षणाविषयी मार्गदर्शन करत सॅनिटरी नॅपकिन व शाळेसाठी प्रथमोपचार औषधांचे वाटप केले. सौ. नंदा जाधव आणि सौ. हर्षदा सुर्वे यांनी मासिक पाळी आणि आरोग्याविषयी मार्गदर्शन केले. शाळेच्या प्राचार्य सुगंधा पतंगे मॅडम यांनी या कार्याचे कौतुक करून आभार मानले.',
    },
    photo: '/images/gallery/sanitary-napkin.webp', 
    location: { en: 'Asole, Murbad', mr: 'असोळे, मुरबाड' },
  },
  {
    id: 'story-2',
    name: { en: 'Water Purifier Distribution', mr: 'जल शुद्धीकरण यंत्र वाटप' },
    story: {
      en: 'On the occasion of Independence Day, Sankalp Foundation donated a Tata Swach Tech 200 LPH water purification system worth ₹90,000 to Z.P. Primary School, Kaloshi, Satara. Recognizing the lack of clean drinking water facilities in rural schools, this initiative ensures better health for the students. President Praveen Jadhav and the local community were present to support the cause.',
      mr: 'स्वातंत्र्यदिनाचे औचित्य साधून संकल्प फाउंडेशनने जिल्हा परिषद प्राथमिक शाळा, काळोशी (सातारा) येथे ९० हजार रुपये किमतीचे "टाटा स्वच्छ टेक २०० एलपीएच" जल शुद्धीकरण यंत्र बहाल केले. ग्रामीण भागातील शाळांमध्ये शुद्ध पाण्याची गैरसोय दूर करण्यासाठी आणि विद्यार्थ्यांच्या आरोग्यासाठी हा उपक्रम राबवण्यात आला. कार्यक्रमाप्रसंगी अध्यक्ष प्रविण जाधव, फाऊंडेशनचे सदस्य व ग्रामस्थ उपस्थित होते.',
    },
    photo: '/images/gallery/water-purifier.webp', 
    location: { en: 'Kaloshi, Satara', mr: 'काळोशी, सातारा' },
  },
];

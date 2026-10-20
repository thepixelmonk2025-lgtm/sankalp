export interface MediaArticle {
  id: string;
  title: { en: string; mr: string };
  newspaper: { en: string; mr: string };
  date: { en: string; mr: string };
  summary: { en: string; mr: string };
  image: string;
  featured?: boolean;
}

export const mediaArticles: MediaArticle[] = [
  {
    id: 'muktagiri-umbarkhadwa',
    title: {
      en: 'Inspiring Initiative by Sankalp Foundation for Students\' Bright Future at Umbarkhadwa',
      mr: 'विद्यार्थ्यांच्या उज्ज्वल भविष्यासाठी संकल्प फाऊंडेशनचा प्रेरणादायी उपक्रम — उंबरखडवा शाळेत स्पोर्ट्स कपडे, पाणी फिल्टर व श्रीमद्भगवद्गीता वाटप',
    },
    newspaper: {
      en: 'Dainik Muktagiri',
      mr: 'दैनिक मुक्तागिरी',
    },
    date: {
      en: 'Feb 25, 2026',
      mr: '२४-२५ फेब्रुवारी २०२६',
    },
    summary: {
      en: 'Sports uniforms, drinking water filter machines, and Shrimad Bhagavad Gita copies presented to Z.P. Primary School students at Umbarkhadwa (Sakri, Dhule) under President Praveen Jadhav\'s leadership.',
      mr: 'धुळे जिल्ह्यातील साक्री तालुक्यातील जि. प. प्राथ. शाळा उंबरखडवा येथे अध्यक्ष प्रवीण जाधव यांच्या नेतृत्वाखाली विद्यार्थ्यांना क्रीडा कपडे, शुद्ध पिण्याच्या पाण्यासाठी फिल्टर मशीन आणि श्रीमद्भगवद्गीता ग्रंथांचे वाटप करण्यात आले.',
    },
    image: '/images/media/muktagiri-umbarkhadwa-sports-filter.jpeg',
    featured: true,
  },
  {
    id: 'muktagiri-rajyastariya-sanman',
    title: {
      en: 'State-Level Honour for Sankalp Foundation: Recognition for Social Commitment at Spandan Foundation Gala',
      mr: 'संकल्प फाऊंडेशनला राज्यस्तरीय सन्मान; सामाजिक कार्याची दखल — स्पंदन फाऊंडेशनतर्फे ज्ञानज्योती सावित्रीबाई फुले स्मारकात गौरव',
    },
    newspaper: {
      en: 'Dainik Muktagiri (Satara)',
      mr: 'दैनिक मुक्तागिरी (सातारा)',
    },
    date: {
      en: 'Apr 3, 2026',
      mr: '३ एप्रिल २०२६',
    },
    summary: {
      en: 'Sankalp Foundation honored with the prestigious State-Level Award 2026 in Pune at Savitribai Phule Memorial for grassroots education, awareness, and relief initiatives across Maharashtra.',
      mr: 'पुणे येथील ज्ञानज्योती सावित्रीबाई फुले स्मारक येथे स्पंदन फाऊंडेशन महाराष्ट्र राज्यतर्फे आयोजित राज्यस्तरीय पुरस्कार सोहळा २०२६ मध्ये संकल्प फाऊंडेशन, मुंबई यांना मानाचा राज्यस्तरीय पुरस्कार प्रदान करण्यात आला.',
    },
    image: '/images/media/muktagiri-rajyastariya-sanman.jpeg',
    featured: true,
  },
  {
    id: 'punyanagari-rajyastariya-sanman',
    title: {
      en: 'State-Level Award Conferral to Sankalp Foundation at Pune',
      mr: 'संकल्प फाऊंडेशनला राज्यस्तरीय सन्मान — सामाजिक कार्याची दखल',
    },
    newspaper: {
      en: 'Dainik Punyanagari (Satara Edition)',
      mr: 'दैनिक पुण्यनगरी (सातारा आवृत्ती)',
    },
    date: {
      en: 'Apr 3, 2026',
      mr: '३ एप्रिल २०२६',
    },
    summary: {
      en: 'Publicity Head Kiran Jambhale, along with Sagar Kadam, Sarvesh Dhumal, Swaroop Satpute, and Dheeraj Wadkar received the state honor presented by Vidyaniketan\'s Shashikant Kochale and Sagar Sabale.',
      mr: 'पुणे येथे आयोजित सोहळ्यात संस्थेचे प्रसिद्धी प्रमुख किरण जांभळे, सदस्य सागर कदम, सर्वेश धुमाळ, स्वरूप सातपुते आणि धीरज वाडकर यांनी मानाचा पुरस्कार स्वीकारला.',
    },
    image: '/images/media/punyanagari-rajyastariya-sanman.jpeg',
  },
  {
    id: 'muktagiri-700-shetkari-khola',
    title: {
      en: 'Commendable Farmer Welfare Initiative: Free Waterproof Khoḷe Provided to 700 Farmers',
      mr: 'संकल्प फाऊंडेशनचा शेतकरी हिताचा स्तुत्य उपक्रम — ७०० शेतकऱ्यांना पावसाळी कागदी खोळांचे मोफत वाटप',
    },
    newspaper: {
      en: 'Dainik Muktagiri',
      mr: 'दैनिक मुक्तागिरी',
    },
    date: {
      en: 'Jul 14, 2026',
      mr: '१३-१४ जुलै २०२६',
    },
    summary: {
      en: 'Essential monsoon waterproof shields distributed to nearly 700 hardworking paddy farmers across 8 remote villages including Aalavadi, Pateghar, Navali, Venekhol, Savali, Wadgaon, Lumnekhol, and Kelavali.',
      mr: 'भात लागवडीसाठी उपयुक्त ठरणारी कागदी खोळी आलवडी, पाटेघर, नावली, वेणेखोल, सावली, वडगाव, लूमणेखोल व केळवली या ८ गावांतील तब्बल ७०० शेतकरी बांधवांना मोफत वितरित.',
    },
    image: '/images/media/muktagiri-700-shetkari-khola.jpeg',
    featured: true,
  },
  {
    id: 'punyanagari-shetkari-kholan-vatap',
    title: {
      en: 'Free Waterproof Rain Khoḷe Distributed to Farmers in Bhondwade Region',
      mr: 'संकल्प फाऊंडेशनतर्फे पावसाळी कागदी खोळांचे वाटप — ८ गावांतील शेतकऱ्यांना मोठा दिलासा',
    },
    newspaper: {
      en: 'Dainik Punyanagari (Satara Edition)',
      mr: 'दैनिक पुण्यनगरी (सातारा)',
    },
    date: {
      en: 'Jul 14, 2026',
      mr: '१४ जुलै २०२६',
    },
    summary: {
      en: 'Sankalp Foundation\'s outreach "Shethkaryanchya Sevesathi... Sankalp Samajhitacha" reached remote farming communities with vital rainy season protection.',
      mr: 'शेतकऱ्यांच्या सेवेसाठी संकल्प समाजहिताचा या ब्रीदवाक्यानुसार ग्रामीण भागातील शेतकऱ्यांना प्रत्यक्ष दिलासा देणारा स्तुत्य उपक्रम.',
    },
    image: '/images/media/punyanagari-shetkari-kholan-vatap.jpeg',
  },
  {
    id: 'aawaj-shikshakancha-aamli',
    title: {
      en: 'Grand Distribution of Educational Materials and School Bags at Aamli',
      mr: 'संकल्प फाऊंडेशनतर्फे आमळी येथे शैक्षणिक साहित्य वितरण उत्साहात',
    },
    newspaper: {
      en: 'Aawaj Shikshakancha (Daily News)',
      mr: 'आवाज शिक्षकांचा (डेली न्यूज)',
    },
    date: {
      en: 'Special Feature',
      mr: 'विशेष प्रसिद्धी',
    },
    summary: {
      en: 'Grand educational event held at Kanhaiyalal Maharaj Mandir Hall, Aamli (Sakri, Dhule); students of Umbarkhadwa, Chaupale, and Jambhalipada provided full school kits in the presence of respected leaders.',
      mr: 'तीर्थक्षेत्र श्री कन्हैयालाल महाराज मंदिर हॉल, आमळी (साक्री) येथे जि. प. शाळा उंबरखडवा, चौपाळे आणि जांभाळीपाडा या ३ शाळांमधील विद्यार्थ्यांना शालेय साहित्य व स्कूल बॅगचे उत्साहात वाटप.',
    },
    image: '/images/media/aawaj-shikshakancha-aamli-shaikshanik.jpeg',
    featured: true,
  },
  {
    id: 'muktagiri-sweater-khola-duheri-upakram',
    title: {
      en: 'Dual Humanitarian Initiative: Warm Sweaters for Students & Waterproof Khoḷe for Farmers at Ekeev Z.P. School',
      mr: 'संकल्प फाऊंडेशनचा दुहेरी सामाजिक उपक्रम — विद्यार्थ्यांना स्वेटर, शेतकऱ्यांना पावसाळी कागदी खोळांचे मोफत वाटप',
    },
    newspaper: {
      en: 'Dainik Muktagiri',
      mr: 'दैनिक मुक्तागिरी',
    },
    date: {
      en: 'Jul 17, 2026',
      mr: '१६-१७ जुलै २०२६',
    },
    summary: {
      en: 'At Ekeev Z.P. Primary School, students received warm winter sweaters and local farmers received waterproof field shields, organized in the presence of Samanway Yuva Manch President Ajitdada Jadhav and dignitaries.',
      mr: 'जि. प. प्राथमिक शाळा, एकीव येथे थंडीपासून संरक्षणासाठी विद्यार्थ्यांना स्वेटर व शेतकऱ्यांना पावसाळी कागदी खोळांचे वाटप. समन्वय युवा मंच अध्यक्ष अजितदादा जाधव व मान्यवरांची विशेष उपस्थिती.',
    },
    image: '/images/media/muktagiri-sweater-khola-duheri-upakram.jpeg',
  },
  {
    id: 'muktagiri-vaduth-daptar-vatap',
    title: {
      en: 'Walking with Students on the Path of Education: School Bag Distribution at Vaduth High School & Junior College',
      mr: 'शिक्षणाच्या वाटेवर संकल्पाची साथ! — वडूथ येथे गरजू विद्यार्थ्यांना दप्तर वाटप, विद्यार्थ्यांच्या चेहऱ्यावर फुलले आनंदाचे हास्य',
    },
    newspaper: {
      en: 'Dainik Muktagiri',
      mr: 'दैनिक मुक्तागिरी',
    },
    date: {
      en: 'Oct 9, 2026',
      mr: '८-९ ऑक्टोबर २०२६',
    },
    summary: {
      en: 'Rayat Shikshan Sanstha\'s English School & Jr. College Vaduth students received school bags and study aids in the presence of mentor Ajitdada Jadhav, promoting education without barriers.',
      mr: 'रयत शिक्षण संस्थेच्या इंग्लिश स्कूल अँड ज्युनिअर कॉलेज वडूथ येथील गरजू विद्यार्थ्यांना दप्तर वाटप व निराधार मुलींच्या शैक्षणिक हॉस्टेलला मोलाचे सहकार्य करण्यात आले.',
    },
    image: '/images/media/muktagiri-vaduth-daptar-vatap.jpeg',
    featured: true,
  },
  {
    id: 'punyanagari-chandak-wai',
    title: {
      en: 'Educational Supplies & School Bags Distributed at Chandak Wai Z.P. School',
      mr: 'संकल्प फाऊंडेशनचे शाळेत शैक्षणिक साहित्याचे वाटप — चांदक वाई जि. प. शाळेत उत्साहात उपक्रम',
    },
    newspaper: {
      en: 'Dainik Punyanagari (Satara Edition)',
      mr: 'दैनिक पुण्यनगरी (सातारा आवृत्ती)',
    },
    date: {
      en: 'Jan 6, 2026',
      mr: '६ जानेवारी २०२६',
    },
    summary: {
      en: 'Zilla Parishad Primary School Chandak (Wai taluka) hosted Sankalp Foundation for comprehensive school kit and backpack distribution to underprivileged children.',
      mr: 'चांदक वाई (ता. वाई) जिल्हा परिषद प्राथमिक शाळेत गोरगरीब व सामान्य कुटुंबातील विद्यार्थ्यांना शिक्षणाच्या प्रवाहात अधिक बळ मिळावे म्हणून शैक्षणिक साहित्य व दप्तर वाटप.',
    },
    image: '/images/media/punyanagari-chandak-wai-shaikshanik.jpeg',
  },
  {
    id: 'samajratna-puraskar',
    title: {
      en: 'Moment of Joy, Honour of Excellence: Sankalp Foundation Awarded "Samajratna Puraskar"',
      mr: 'क्षण आनंदाचा, सन्मान कर्तृत्वाचा! संकल्प फाऊंडेशनला नामांकित "समाजरत्न पुरस्कार"',
    },
    newspaper: {
      en: 'Dainik Maharashtra Vruttant',
      mr: 'मराठी दैनिक महाराष्ट्र वृत्तांत',
    },
    date: {
      en: 'June 5, 2023',
      mr: '५ जून २०२३',
    },
    summary: {
      en: 'Vidyaniketan Social & Educational Institute awarded Sankalp Foundation with the prestigious Samajratna Puraskar in appreciation of their dedicated humanitarian services.',
      mr: 'विद्यानिकेतन सामाजिक व शैक्षणिक संस्था आयोजित सोहळ्यात संकल्प फाऊंडेशनचे सामाजिक कार्य लक्षात घेऊन नामांकित "समाजरत्न पुरस्कार" देऊन सन्मानित करण्यात आले.',
    },
    image: '/images/media/maharashtra-vruttant-samajratna-puraskar.png',
  },
  {
    id: 'punyanagari-jambhalipada',
    title: {
      en: 'Distribution of Educational Materials at Jambhalipada Z.P. School',
      mr: 'जांभाळीपाडा जि. प. शाळेत शैक्षणिक साहित्य वाटप',
    },
    newspaper: {
      en: 'Dainik Punyanagari (Smart Dhule Edition)',
      mr: 'दैनिक पुण्यनगरी (धुळे आवृत्ती)',
    },
    date: {
      en: 'July 6, 2023',
      mr: '६ जुलै २०२३',
    },
    summary: {
      en: 'Sankalp Foundation distributed comprehensive educational kits including notebooks, bags, school uniforms, and footwear to tribal students in Sakri taluka.',
      mr: 'साक्री तालुक्यातील जांभाळीपाडा येथील जिल्हा परिषद शाळेत संकल्प फाऊंडेशनतर्फे आदिवासी विद्यार्थ्यांना वह्या, पेन, दप्तर, बूट, कपडे व शैक्षणिक साहित्याचे वाटप.',
    },
    image: '/images/media/punyanagari-jambhalipada.png',
  },
  {
    id: 'pudhari-jambhalit-shaikshanik',
    title: {
      en: 'School Supplies Distribution in Jambhali by Sankalp Foundation',
      mr: 'जांभाळीत विद्यार्थ्यांना शैक्षणिक साहित्य वाटप — संकल्प फाऊंडेशनतर्फे शाळा दत्तक',
    },
    newspaper: {
      en: 'Dainik Pudhari (Satara Edition)',
      mr: 'दैनिक पुढारी (सातारा आवृत्ती)',
    },
    date: {
      en: 'July 10, 2023',
      mr: '१० जुलै २०२३',
    },
    summary: {
      en: 'School adopted in Dhule district; school bags, books, drawing materials, uniforms, shoes, and water filters provided to 28 students.',
      mr: 'धुळे जिल्ह्यातील जांभाळी येथील जि. प. शाळा संकल्प फाऊंडेशनने दत्तक घेतली असून शालेय साहित्य, दप्तर, गणवेश, बूट आणि वॉटर फिल्टरचे वाटप करण्यात आले.',
    },
    image: '/images/media/pudhari-jambhalit-shaikshanik-sahitya.png',
  },
  {
    id: 'pudhari-kas-pathar',
    title: {
      en: 'Educational Materials Distributed to Remote Villages on Kaas Plateau',
      mr: 'कास पठारावरील विद्यार्थ्यांना संकल्प फाऊंडेशनतर्फे शालेय साहित्याचे मोफत वाटप',
    },
    newspaper: {
      en: 'Dainik Pudhari (My Satara Edition)',
      mr: 'दैनिक पुढारी (सातारा आवृत्ती)',
    },
    date: {
      en: 'July 4, 2022',
      mr: '४ जुलै २०२२',
    },
    summary: {
      en: 'Free distribution of educational kits and notebooks from Anganwadi to 10th standard across remote villages including Aalandi, Navali, Kelavali, and Venekhol.',
      mr: 'परळी व कास पठारावरील आलवडी, नावली, केळवली, वेणेखोल, पाटेघर या गावांतील गरजू विद्यार्थ्यांना अंगणवाडीपासून १० वीपर्यंत मोफत शालेय वस्तूंचे वाटप.',
    },
    image: '/images/media/pudhari-kas-pathar-sahitya-vatap.png',
  },
  {
    id: 'annachhatra-coverage',
    title: {
      en: 'Food Support Camp Organized at Sai Tapovan Ashram, Murbad',
      mr: '“सुख म्हणजे नक्की काय असतं!” — साई तपोवन आश्रम मुरबाड येथे संकल्प अन्नछत्र कार्यक्रम',
    },
    newspaper: {
      en: 'Special Media Feature',
      mr: 'वृत्तपत्र विशेष बातमी',
    },
    date: {
      en: 'January 15',
      mr: '१५ जानेवारी',
    },
    summary: {
      en: 'Over 250 needy children and elderly individuals provided with nutritious meals and educational guidance during Makar Sankranti.',
      mr: 'मकर संक्रांतीनिमित्त साई तपोवन आश्रम मुरबाड येथे २५० हून अधिक गरजू मुले व ज्येष्ठांना अन्नछत्र भोजन सेवा व शालेय मार्गदर्शन कार्यक्रम.',
    },
    image: '/images/media/annachhatra-ashram-coverage.png',
  },
  {
    id: 'pudhari-ajit-jadhav-upakram',
    title: {
      en: 'Notebooks Distributed to Over 450 Students in Urmodi Region',
      mr: 'विद्यार्थ्यांच्या गुणवत्तावाढीसाठी शैक्षणिक उपक्रम : अजितदादा जाधव',
    },
    newspaper: {
      en: 'Dainik Pudhari (Satara)',
      mr: 'दैनिक पुढारी (सातारा)',
    },
    date: {
      en: 'Satara Edition',
      mr: 'पुढारी वृत्तसेवा (सातारा)',
    },
    summary: {
      en: 'Distribution of notebooks and learning supplies to over 450 students across schools in Urmodi region to encourage academic excellence.',
      mr: 'समन्वय युवा मंच व संकल्प फाऊंडेशनच्या माध्यमातून उरमोडी विभागातील विविध गावांमधील ४५० हून अधिक विद्यार्थ्यांना वह्यांचे वाटप.',
    },
    image: '/images/media/pudhari-ajit-jadhav-shaikshanik-upakram.png',
  },
];

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
    role: { en: 'Founder and President', mr: 'संस्थापक' },
    bio: {
      en: '"Education is the true foundation of change."\n\nDriven by a passion for social service and a strong commitment to uplift the underprivileged, Praveen Jadhav founded the Sankalp Foundation with a vision to bring meaningful change in society.\n\nHe has been working tirelessly to ensure that children from economically weaker and tribal communities get equal learning opportunities. Through the Foundation, he leads several initiatives such as the distribution of school bags, books, and educational materials, along with other welfare activities for rural and marginalized students.\n\nProfessionally, he is an Investment and Tax Consultant with over 15 years of experience in the financial domain. Alongside his professional journey, he continues to dedicate his time and efforts toward social causes.\n\nHis contribution and commitment have been recognized and honored by various social organizations across Maharashtra.',
      mr: '"शिक्षण हाच खरा बदलाचा पाया आहे."\n\nसमाजसेवेची ओढ आणि दुर्बल घटकांसाठी काहीतरी अर्थपूर्ण करण्याची जिद्द मनात ठेवून प्रविण जाधव यांनी संकल्प फाऊंडेशन ची स्थापना केली. त्यांचे ध्येय म्हणजे मागासलेला समाज, गोरगरीब आणि आदिवासी मुलांना शिक्षणाच्या प्रवाहात आणणे.\n\nग्रामीण आणि आदिवासी भागातील विद्यार्थ्यांसाठी शैक्षणिक साहित्य, दप्तर, पुस्तके यांचे वाटप तसेच विविध सामाजिक उपक्रम राबवून त्यांनी शिक्षणाचा प्रकाश प्रत्येक घरापर्यंत पोहोचवण्याचा प्रयत्न केला आहे.\n\nव्यवसायाने इन्व्हेस्टमेंट आणि टॅक्स कन्सल्टंट असलेले प्रविण जाधव यांना या क्षेत्रातील १५ वर्षांहून अधिक अनुभव आहे. व्यावसायिक जीवनासोबतच त्यांनी सामाजिक जबाबदारीचे भान ठेवत समाजासाठी अनेक उपक्रम हाती घेतले आहेत.\n\nत्यांच्या उल्लेखनीय कार्याची दखल घेत विविध सामाजिक संस्था आणि संघटनांकडून त्यांना अनेक वेळा सन्मानित करण्यात आले आहे.',
    },
    photo: '/images/team/praveen-jadhav.webp',
  },
  {
    id: 'nanda-ahire-jadhav',
    name: { en: 'Nanda Ahire Jadhav', mr: 'नंदा अहिरे जाधव' },
    role: { en: 'Member (Professor)', mr: 'प्राध्यापक (Member)' },
    bio: {
      en: '"Through education, true progress of society is achieved."\n\nA professional professor, Nanda Ahire Jadhav has been actively associated with Sankalp Foundation since its inception. He holds M.A., B.Ed., and M.Phil (Economics) degrees and brings over 15 years of extensive experience in the educational field, providing valuable knowledge and guidance.\n\nCurrently serving at Satish Pradhan Dnyansadhana College, Thane, he regularly mentors students and supports teacher development initiatives. Under his guidance, numerous educational projects, workshops, and training programs have been successfully implemented.\n\nAt Sankalp Foundation, Nanda Ahire Jadhav plays a pivotal role in planning educational initiatives, providing strategic advice, and mentoring. His expertise helps create meaningful resources and opportunities for underprivileged children, enabling them to achieve academic success.\n\nThrough his dedication and socially-driven vision, he has significantly contributed to the growth and impact of Sankalp Foundation’s educational programs, ensuring a lasting positive effect on the communities they serve.',
      mr: '"शिक्षणाद्वारेच समाजाची खरी प्रगती साधता येते."\n\nव्यवसायाने प्राध्यापक असलेले नंदा अहिरे जाधव संकल्प फाऊंडेशनशी स्थापनेपासून सक्रिय आहेत. त्यांनी M.A., B.Ed., आणि M.Phil (Economics) मध्ये शिक्षण पूर्ण केले असून, मागील १५ वर्षांचा अनुभव त्यांच्या समृद्ध ज्ञानाची आणि मार्गदर्शन क्षमतेची साक्ष आहे.\n\nसध्यः सतीश प्रधान ज्ञानसाधना महाविद्यालय, ठाणे येथे कार्यरत असलेले नंदा अहिरे जाधव, विद्यार्थ्यांच्या शैक्षणिक विकासासाठी आणि शिक्षक प्रशिक्षणासाठी नियमित मार्गदर्शन देतात. त्यांच्या नेतृत्वाखाली, अनेक शैक्षणिक प्रकल्प, कार्यशाळा आणि प्रशिक्षण उपक्रम यशस्वीपणे राबवले गेले आहेत.\n\nसंकल्प फाऊंडेशनमध्ये, नंदा अहिरे जाधव शैक्षणिक उपक्रमांचे नियोजन, धोरणात्मक सल्ला आणि मार्गदर्शन पुरवतात. त्यांच्या अनुभवामुळे, विद्यार्थ्यांच्या शैक्षणिक प्रगतीसाठी वंचित वर्गातील बालकांना उपयुक्त संसाधने आणि संधी उपलब्ध करून देणे शक्य झाले आहे.\n\nत्यांच्या कार्यतत्परतेमुळे आणि समाजाभिमुख दृष्टिकोनामुळे संकल्प फाऊंडेशनच्या शैक्षणिक उपक्रमांना ठोस दिशा आणि प्रभावी परिणाम मिळाला आहे.',
    },
    photo: '/images/team/nanda-ahire-jadhav.webp',
  },
  {
    id: 'bhushan-pawar',
    name: { en: 'Bhushan Pawar', mr: 'भूषण पवार' },
    role: { en: 'Member', mr: 'Member' },
    bio: {
      en: '"Creating impactful programs for lasting social change."\n\nBhushan Pawar has been an active member of Sankalp Foundation since its inception. He holds a B.Sc. in Agriculture and an MBA in Marketing, equipping him with extensive expertise in business, marketing, and social initiatives.\n\nAt Sankalp Foundation, Bhushan plays a key role in planning social initiatives, marketing strategies, project management, and community engagement. He has actively participated in various programs, providing valuable guidance to educational and developmental projects for students and the community.\n\nUnder his leadership, the foundation has successfully implemented numerous educational, social, and community-focused projects. His approach is centered on creating impactful programs that drive social change and deliver sustainable results.\n\nThrough his dedication, strategic vision, and hands-on involvement, Bhushan Pawar has contributed significantly to the reach, effectiveness, and long-term stability of Sankalp Foundation’s initiatives.',
      mr: '"सामाजिक बदलासाठी परिणामकारक योजना आणि स्थायी परिणाम."\n\nभूषण पवार संकल्प फाऊंडेशनच्या स्थापनेपासूनच सक्रिय सदस्य आहेत. त्यांचे शैक्षणिक पार्श्वभूमी B.Sc. Agriculture आणि MBA in Marketing आहे, ज्यामुळे त्यांना व्यवसाय, मार्केटिंग आणि सामाजिक उपक्रमांमध्ये समृद्ध अनुभव प्राप्त झाला आहे.\n\nसंकल्प फाऊंडेशनमध्ये, भूषण पवार सामाजिक उपक्रमांचे नियोजन, मार्केटिंग धोरणे, प्रकल्प व्यवस्थापन आणि समुदायाशी संवाद या क्षेत्रात महत्त्वपूर्ण योगदान देतात. त्यांनी संस्थेच्या विविध उपक्रमांमध्ये सक्रिय सहभाग घेत, विद्यार्थ्यांच्या शैक्षणिक व विकासात्मक प्रकल्पांना पोषक दिशा दिली आहे.\n\nत्यांच्या नेतृत्वाखाली, संकल्प फाऊंडेशनने अनेक शैक्षणिक, सामाजिक आणि समुदायाभिमुख प्रकल्प यशस्वीपणे राबवले आहेत. भूषण पवार यांचा दृष्टिकोन सामाजिक बदलासाठी परिणामकारक योजना आणि स्थायी प्रभाव निर्माण करण्यावर केंद्रित आहे.\n\nत्यांच्या कार्यतत्परतेमुळे आणि रणनीतीमुळे, संकल्प फाऊंडेशनच्या उपक्रमांना विस्तृत पोहोच, प्रभावी परिणाम आणि दीर्घकालीन स्थिरता मिळाली आहे.',
    },
    photo: '/images/team/bhushan-pawar.webp',
  },
  {
    id: 'harshada-surve',
    name: { en: 'Harshada Surve', mr: 'हर्षदा सुर्वे' },
    role: { en: 'Member', mr: 'Member' },
    bio: {
      en: '"A strong foundation ensures effective impact for society."\n\nHarshada Surve has been an active member of Sankalp Foundation since its inception. Professionally, she is associated with the banking sector and brings over 10 years of experience in financial management and operations.\n\nAt Sankalp Foundation, Harshada contributes significantly to financial planning, coordination of organizational initiatives, and social programs. Her expertise ensures the smooth functioning of foundation activities and strengthens the impact of its community-oriented projects.',
      mr: '"संस्था स्थिर राहिल्यासच समाजासाठी परिणामकारक कार्य करता येते."\n\nहर्षदा सुर्वे संकल्प फाऊंडेशनच्या स्थापनेपासून सक्रिय सदस्य आहेत. व्यवसायाने त्या बँकिंग क्षेत्रात कार्यरत असून, त्यांना मागील १० वर्षांचा अनुभव आहे.\n\nसंकल्प फाऊंडेशनमध्ये, हर्षदा सुर्वे वित्तीय व्यवस्थापन, संस्थात्मक उपक्रमांचे समन्वय आणि सामाजिक उपक्रमांमध्ये योगदान देतात. त्यांच्या अनुभवामुळे, संस्थेच्या उपक्रमांना स्थिरता आणि कार्यक्षमतेची जोड मिळते.',
    },
    photo: '/images/team/harshada-surve.webp',
  },
  {
    id: 'prajwal-shinde',
    name: { en: 'Prajwal Shinde', mr: 'प्रज्वल शिंदे' },
    role: { en: 'Social Media & Marketing Head', mr: 'Social Media & Marketing Head' },
    bio: {
      en: '"Connecting society through social media."\n\nPrajwal Shinde serves as the Social Media & Marketing Head at Sankalp Foundation. She holds a B.CA degree from SNDT University and has demonstrated strong expertise in digital platforms, brand promotion, and effective online communication.\n\nActively participating in the foundation’s social initiatives, Prajwal manages social media, digital marketing, and public outreach to enhance the visibility and impact of Sankalp Foundation’s programs. Her efforts ensure that the foundation’s work reaches a wider audience and creates greater community awareness.\n\nPrajwal’s approach focuses on social service, impactful communication, and driving positive change through digital channels, significantly strengthening the foundation’s engagement and outreach.',
      mr: '"सोशल माध्यमांद्वारे समाजाशी जोडले जावे."\n\nप्रज्वल शिंदे संकल्प फाऊंडेशनमध्ये Social Media आणि Marketing Head म्हणून कार्यरत आहेत. त्यांनी SNDT University मधून B.CA पदवी पूर्ण केली असून, डिजिटल प्लॅटफॉर्मवर प्रभावी संवाद साधण्यात आणि ब्रँड प्रमोशनमध्ये प्रावीण्य आहे.\n\nसंकल्प फाऊंडेशनच्या सामाजिक उपक्रमांत सक्रिय सहभाग असून, ते सोशल मीडिया, डिजिटल मार्केटिंग आणि जनसंपर्काद्वारे संस्थेच्या उपक्रमांचा प्रभाव वाढवतात. त्यांच्या प्रयत्नांमुळे फाउंडेशनची माहिती विस्तृत प्रमाणात पोहोचते आणि समाजातील लोकांमध्ये जागरूकता निर्माण होते.\n\nप्रज्वल यांचा दृष्टिकोन समाजसेवा, प्रभावी संवाद आणि डिजिटल माध्यमातून सकारात्मक बदल ह्या तिन्हींवर केंद्रित आहे.',
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

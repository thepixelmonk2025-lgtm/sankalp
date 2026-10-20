export interface MediaArticle {
  id: string;
  title: { en: string; mr: string };
  newspaper: { en: string; mr: string };
  date: { en: string; mr: string };
  summary: { en: string; mr: string };
  image: string;
}

export const mediaArticles: MediaArticle[] = [
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

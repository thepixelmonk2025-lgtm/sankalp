// TODO: Replace with real program data from client (names, descriptions, photos)

export interface Program {
  id: string;
  icon: string; // emoji or icon class placeholder
  imageUrl?: string;
  title: { en: string; mr: string };
  description: { en: string; mr: string };
  anchor: string;
}

export const programs: Program[] = [
  {
    id: 'education',
    icon: '📚',
    imageUrl: '/images/programs/education.jpg', // TODO: replace with real photo
    title: {
      en: 'Education & Literacy',
      mr: 'शिक्षण आणि साक्षरता',
    },
    description: {
      en: 'We run learning centers and scholarship programs for children and youth from underserved communities, ensuring no child is left behind due to poverty.',
      mr: 'आम्ही वंचित समुदायातील मुले आणि तरुणांसाठी शिक्षण केंद्रे आणि शिष्यवृत्ती कार्यक्रम चालवतो.',
    },
    anchor: 'education',
  },
  {
    id: 'health',
    icon: '🏥',
    imageUrl: '/images/programs/health.jpg', // TODO: replace with real photo
    title: {
      en: 'Health & Wellness',
      mr: 'आरोग्य आणि कल्याण',
    },
    description: {
      en: 'Regular health camps, awareness drives, and referral support to bring basic healthcare closer to communities with limited access.',
      mr: 'नियमित आरोग्य शिबिरे, जागरूकता मोहिमा आणि मर्यादित प्रवेश असलेल्या समुदायांपर्यंत मूलभूत आरोग्यसेवा पोहोचवणे.',
    },
    anchor: 'health',
  },
  {
    id: 'livelihood',
    icon: '🌱',
    imageUrl: '/images/programs/livelihood.jpg', // TODO: replace with real photo
    title: {
      en: 'Livelihood & Skill Development',
      mr: 'उपजीविका आणि कौशल्य विकास',
    },
    description: {
      en: 'Vocational training and micro-enterprise support empowering women and youth to build sustainable livelihoods and economic independence.',
      mr: 'व्यावसायिक प्रशिक्षण आणि लघु-उद्योग सहाय्य महिला आणि तरुणांना शाश्वत उपजीविका निर्माण करण्यास सक्षम करते.',
    },
    anchor: 'livelihood',
  },
  {
    id: 'environment',
    icon: '🌿',
    imageUrl: '/images/programs/environment.jpg', // TODO: replace with real photo
    title: {
      en: 'Environment & Rural Development',
      mr: 'पर्यावरण आणि ग्रामीण विकास',
    },
    description: {
      en: 'Tree plantation drives, water conservation, and sustainable agriculture practices that benefit communities and the environment alike.',
      mr: 'वृक्षारोपण, जलसंधारण आणि शाश्वत शेती पद्धती समुदाय आणि पर्यावरण दोन्हींना फायदेशीर ठरतात.',
    },
    anchor: 'environment',
  },
];

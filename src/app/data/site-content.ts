export interface Section {
  title: string;
  blurb: string;
  image: string;
  tag?: string;
}

export interface Profile {
  slug: string;
  name: string;
  role: string;
  /** Short role line and blurb for the team overview cards. */
  tagline: string;
  summary: string;
  photo: string;
  highlights: string[];
  bio: string[];
}

export interface ContactChannel {
  label: string;
  value: string;
  href: string;
  icon: 'mail' | 'phone' | 'pin' | 'chat';
}

export const ABOUT = {
  headline: { before: 'Curated content with', em: 'context', after: ', not clutter.' },
  lead:
    'In the ever-expanding digital content space, Charchalive stands out as an outlier. It offers curated content, culled from authentic sources and covered with unique context, to add to the ken of the visitors.',
  quote: { before: 'We revel in our pithy content that contains', em: 'perspectives rather than prejudices.' },
  body: [
    'The wide range – stretching from skin to spirituality – promises to be a delight for today’s youth and even those who nurtured them.',
    'From historical Rajneeti Se Pare to celebrated cases which added a new dimension to Indian jurisprudence; from the latest in science & tech to travel and tourism; and from food recipes to Chust-Durast tips, every section will contribute to any netizen’s quest for an ‘informed and good’ living.',
  ],
  pillars: [
    { title: 'Curated', text: 'Pithy, handpicked content — no clutter, no noise.' },
    { title: 'Authentic sources', text: 'Every story culled from sources you can trust.' },
    { title: 'Unique context', text: 'Perspectives that add to your ken, not prejudices.' },
  ],
  closing:
    'Charchalive seeks to be your go-to digital destination by generating lively conversations over diverse topics. Our ‘Aapki Awaaz’ invites you to join in and share your thoughts.',
};

export const SECTIONS: Section[] = [
  {
    title: 'Rajneeti Se Pare',
    blurb: 'Historical Rajneeti Se Pare that shaped the nation, revisited with context.',
    image: 'images/parliament.jpg',
  },
  {
    title: 'Celebrated Cases',
    blurb: 'Landmark cases that added a new dimension to Indian jurisprudence.',
    image: 'images/law.jpg',
  },
  {
    title: 'Science & Tech',
    blurb: 'The latest in science and technology, explained without the jargon.',
    image: 'images/science.jpg',
  },
  {
    title: 'Yayawar Ki Dairy',
    blurb: 'Places worth the journey, and the stories that come with them.',
    image: 'images/travel.jpg',
  },
  {
    title: 'Khao Gali',
    blurb: 'Recipes and food traditions from kitchens across the country.',
    image: 'images/food.jpg',
  },
  {
    title: 'Chust-Durast',
    blurb: 'Practical tips for looking good and living well.',
    image: 'images/fitness.jpg',
  },
  {
    title: 'Katha',
    tag: 'Special',
    blurb: 'Rich Indian mythological texts and spiritual tradition, seen in a new light.',
    image: 'images/katha.jpg',
  },
  {
    title: 'Charcha',
    tag: 'Podcast',
    blurb:
      'Arc lights on those who may not be celebrities but deserve to be celebrated.',
    image: 'images/talk.jpg',
  },
  {
    title: 'Aapki Awaaz',
    tag: 'Community',
    blurb: 'Join in and share your thoughts. The conversation is yours too.',
    image: 'images/corner.jpg',
  },
];

export const PROFILES: Profile[] = [
  {
    slug: 'anupam-daftuar',
    name: 'Anupam Daftuar',
    role: 'Director, Invision Communications & Research',
    tagline: 'Research & Communications Professional, Entrepreneur',
    summary: 'Over two decades of experience in research, advocacy, content analysis and media.',
    photo: 'images/team/anupam-daftuar.jpg',
    highlights: [
      '20+ years in research & media',
      'Founder, EnergyNext (2010–2020)',
      'MA Political Science, University of Delhi',
    ],
    bio: [
      'Anupam Daftuar is a research and communications professional and entrepreneur with over two decades of experience in research, advocacy, content analysis and media. She is Director of Invision Communications & Research Pvt. Ltd., which she has led since its founding in 2006, delivering research, content and communication solutions to central and state governments, corporates, trade bodies and NGOs. Since 2019, she has also been a Director of Incore Business Solutions LLP, a market research, public relations and social media consultancy.',
      'From 2010 to 2020, she was Founder and Publication Director of EnergyNext, a monthly renewable energy trade magazine published by Focal Point Media Services Pvt. Ltd. and supported by IREDA. Under her leadership, the magazine was named jury’s choice for Best Renewable Energy Publication at the REI Expo 2017 and received a letter of appreciation from then Power Minister Piyush Goyal in 2016.',
      'Her research has focused on women-centric issues, including a content analysis of women in the press (“Still Invisible”), a performance audit of women police stations, and a study of hostels for OBC girls. Earlier, as Associate Dean of the MG School of Communications Management (1998–2006), she oversaw training, evaluation and research programmes and helped design its curriculum.',
      'She holds an MA in Political Science from the University of Delhi and a B.A. (Hons.) from Miranda House, and is an Associate Member of the Indian Institute of Public Administration.',
    ],
  },
  {
    slug: 'pradip-bagchi',
    name: 'Pradip Bagchi',
    role: 'Senior Advisor, NCAER · Former Senior Editor, The Times of India',
    tagline: 'Senior Journalist & Media Educator',
    summary: 'A media professional for over 36 years across print, wire and broadcast journalism.',
    photo: 'images/team/pradip-bagchi.jpg',
    highlights: [
      '36+ years in media',
      'Media educator since 1999',
      'War Correspondents’ Course, 1995',
    ],
    bio: [
      'Pradip Bagchi has been a media professional for over 36 years. After his last full-time media engagement (till March 2024) as Senior Editor with the Times of India in New Delhi, he joined the National Council of Applied Economic Research (NCAER), India’s oldest economic policy think tank, as a part-time Senior Advisor leading the editorial and communication functions.',
      'He has also been a media educator since 1999, serving as a visiting faculty member at premier institutes, including the Indian Institute of Mass Communication (IIMC), Apeejay Institute of Mass Communication, YMCA (New Delhi), TV Today Media Institute and Xavier University and KIIT University in Bhubaneswar among others.',
      'During his long journalistic career, he has worked across various media platforms. Bagchi began his media career with the wire service, United News of India, in 1990. He switched to broadcast media in 2003 as part of the senior editorial team for the launch of Headlines Today (now India Today). He held a senior position at CNN-IBN (now News18) and was also part of the launch team for NewsX as the Deputy Editor in 2008.',
      'As Senior Vice President in Mumbai-based Castle Media, a media consultancy firm, he was part of an international team of consultants to launch Bangladesh’s first 24X7 news channel, Somoy, in 2011.',
      'Bagchi has reported on a wide range of subjects, including politics, defence, disasters and cricket. He was part of the War Correspondents’ Course, organised by the Ministry of Defence in 1995. He was also on the panel of All India Radio’s English newscasters during 1996–2004.',
    ],
  },
  {
    slug: 'abhilasha-daftuar',
    name: 'Abhilasha Daftuar (Founder)',
    role: 'International Relations, Ashoka University',
    tagline: 'Researcher & Writer — International Relations',
    summary: 'Ashoka University graduate in International Relations with a minor in History.',
    photo: 'images/team/abhilasha-daftuar.jpg',
    highlights: [
      'BA International Relations, minor in History',
      'Aspiring Indian Foreign Service officer',
      'Research at ORF & Rashtrapati Bhavan Museum',
    ],
    bio: [
      'Abhilasha Daftuar is a graduate of Ashoka University, where she studied International Relations with a minor in History. Her interest in India’s foreign relations and its engagement with global powers drives her aspiration to join the Indian Foreign Service.',
      'Alongside her studies, she built wide-ranging research and writing experience through internships. At the Observer Research Foundation, she worked under Professor Harsh V. Pant, writing articles on India–Pakistan relations. With the Government of Haryana’s Citizen Resources Information Department, she studied the Parivar Pehchan Patra family data repository, examining its implementation and its privacy and governance implications. At the Rashtrapati Bhavan Museum, she wrote and edited anecdotes about India’s Presidents. She has also interned at Ritam Digital Media Foundation and at Invision Communications & Research, where she worked on a study of adolescent girls’ menstrual hygiene concerns and on event planning and design.',
      'In her final semester, she was a Teaching Assistant for history courses taught by Professors Mahesh Rangarajan and Seema Alavi. At university, she co-headed the Public Relations department of the student government and the Social Media and Communications department of the Law Society, and mentored first-year students.',
    ],
  },
];

// TODO: placeholder details — replace with Charchalive's real contact information.
export const CONTACT = {
  email: 'contact@charchalive.com',
  channels: [
    {
      label: 'Email',
      value: 'contact@charchalive.com',
      href: 'mailto:contact@charchalive.com',
      icon: 'mail',
    },
    // { label: 'Phone', value: '+91 00000 00000', href: 'tel:+910000000000', icon: 'phone' },
    {
      label: 'Office',
      value: 'New Delhi, India',
      href: 'https://maps.google.com/?q=New+Delhi',
      icon: 'pin',
    },
  ] satisfies ContactChannel[],
  topics: ['General enquiry', 'Aapki Awaaz submission', 'Suggest a guest for Charcha', 'Partnerships'],
};
